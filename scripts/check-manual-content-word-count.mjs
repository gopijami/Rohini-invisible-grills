import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const minWords = Number(process.argv[2] ?? 2500);
const repoRoot = process.cwd();
const contentPath = path.join(
  repoRoot,
  "app",
  "components",
  "data",
  "manualServiceLocationPageContent.ts"
);

function countWords(text) {
  return (text.match(/[A-Za-z0-9]+(?:[-'][A-Za-z0-9]+)*/g) ?? []).length;
}

function pushText(value, parts) {
  if (typeof value === "string") {
    parts.push(value);
    return;
  }

  if (Array.isArray(value)) {
    for (const item of value) pushText(item, parts);
  }
}

function visiblePageText(page) {
  const parts = [];
  const data = page.resolvedPageData;
  pushText(data.title, parts);
  pushText(data.shortDescription, parts);
  pushText(data.chips, parts);
  pushText(data.showcaseBadge, parts);
  pushText(data.cta?.title, parts);
  pushText(data.cta?.description, parts);

  for (const section of data.sections ?? []) {
    pushText(section.heading, parts);
    pushText(section.content, parts);
  }

  for (const faq of data.faqs ?? []) {
    pushText(faq.question, parts);
    pushText(faq.answer, parts);
  }

  return parts.join(" ");
}

const sourceText = fs.readFileSync(contentPath, "utf8");
const transpiled = ts.transpileModule(sourceText, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2020,
    esModuleInterop: true,
  },
});

const module = { exports: {} };
const sandbox = {
  exports: module.exports,
  module,
  require: () => ({}),
};

vm.runInNewContext(transpiled.outputText, sandbox, {
  filename: contentPath,
});

const registry = module.exports.manualServiceLocationPageContent;
const invisibleGrills = registry?.["invisible-grills"];

if (!invisibleGrills) {
  console.error("Could not load invisible-grills manual page registry.");
  process.exit(2);
}

const rows = Object.entries(invisibleGrills)
  .map(([slug, page]) => ({
    slug,
    words: countWords(visiblePageText(page)),
  }))
  .sort((a, b) => a.words - b.words || a.slug.localeCompare(b.slug));

for (const row of rows) {
  const status = row.words >= minWords ? "OK" : "LOW";
  console.log(`${status.padEnd(3)} ${String(row.words).padStart(5)} ${row.slug}`);
}

const lowRows = rows.filter((row) => row.words < minWords);
if (lowRows.length > 0) {
  console.error(
    `\n${lowRows.length} manual service-area page(s) are below ${minWords} visible words.`
  );
  process.exit(1);
}
