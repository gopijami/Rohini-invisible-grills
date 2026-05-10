const reviews = [
  {
    name: "Anitha Reddy",
    initials: "AR",
    location: "Kondapur",
    service: "Balcony safety grills",
    quote:
      "The balcony still feels open, but now we are not worried when the kids stand near it. The finishing is clean and the wires are aligned neatly.",
  },
  {
    name: "Ramesh Kumar",
    initials: "RK",
    location: "Madhapur",
    service: "Anti-bird invisible grills",
    quote:
      "They did not just cover the front side. They checked where pigeons were entering from and fixed the actual problem without making the flat look ugly.",
  },
  {
    name: "Priya Sharma",
    initials: "PS",
    location: "Gachibowli",
    service: "Window invisible grills",
    quote:
      "The team explained the material, took proper measurements, and completed the work neatly. Light and air still come through the window nicely.",
  },
  {
    name: "Suresh Naidu",
    initials: "SN",
    location: "Tellapur",
    service: "Children safety grills",
    quote:
      "It looks much better than the normal grill options we saw. Simple, safe, and clean enough for a new apartment.",
  },
];

const highlights = ["Clean installation", "Open balcony view", "Local Hyderabad team"];

export default function Testimonials() {
  return (
    <div className="mx-auto max-w-7xl rounded-[34px] border border-stone-200 bg-[#fbfaf5] p-4 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-6 lg:p-8">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.5fr]">
        <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm lg:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">
            Project notes
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            Safety that does not make your home feel closed.
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            These notes reflect the kind of site conversations we handle:
            balcony use, bird routes, child-safety worries, and a finish that
            should feel calm from inside the room.
          </p>

          <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50/70 p-4">
            <p className="text-sm font-semibold leading-6 text-slate-800">
              We keep public claims practical: site check, material discussion,
              neat fitting, and clear scope before work starts.
            </p>
          </div>

          <div className="mt-5 space-y-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-slate-700">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reviews.map((review, index) => (
            <article
              key={review.name}
              className={`rounded-[26px] border bg-white p-5 shadow-sm ${
                index === 0
                  ? "border-emerald-200 shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                  : "border-stone-200"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-900 text-sm font-bold text-white">
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-950">{review.name}</p>
                    <p className="text-xs text-slate-500">{review.location}</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-800 ring-1 ring-emerald-100">
                  Site note
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <p className="text-xs font-semibold text-slate-500">
                  {review.service}
                </p>
              </div>

              <p className="mt-4 text-[15px] leading-7 text-slate-700">
                &quot;{review.quote}&quot;
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
