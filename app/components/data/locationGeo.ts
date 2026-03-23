export const locationGeo = {
  hyderabad: { lat: "17.3850", lng: "78.4867", region: "IN-TG" },
  warangal: { lat: "17.9689", lng: "79.5941", region: "IN-TG" },
  karimnagar: { lat: "18.4386", lng: "79.1288", region: "IN-TG" },
  nizamabad: { lat: "18.6725", lng: "78.0941", region: "IN-TG" },
  khammam: { lat: "17.2473", lng: "80.1514", region: "IN-TG" },
  nalgonda: { lat: "17.0542", lng: "79.2672", region: "IN-TG" },
  siddipet: { lat: "18.1040", lng: "78.8520", region: "IN-TG" },
  mahabubnagar: { lat: "16.7488", lng: "78.0035", region: "IN-TG" },
  sangareddy: { lat: "17.6140", lng: "78.0816", region: "IN-TG" },
  suryapet: { lat: "17.1405", lng: "79.6200", region: "IN-TG" },
} as const;

export type GeoCity = keyof typeof locationGeo;


export const locationParentMap: Record<string, GeoCity> = {

  // WARANGAL REGION
  warangal: "warangal",
  hanamkonda: "warangal",
  kazipet: "warangal",
  "warangal-city": "warangal",
  subedari: "warangal",
  "kakatiya-university-area": "warangal",

  // KARIMNAGAR
  karimnagar: "karimnagar",
  "housing-board-colony": "karimnagar",
  kothirampur: "karimnagar",
  ramnagar: "karimnagar",
  jyothinagar: "karimnagar",
  "mancherial-road-area": "karimnagar",

  // NIZAMABAD
  nizamabad: "nizamabad",
  "vinayak-nagar": "nizamabad",
  "bodhan-road": "nizamabad",
  "armoor-road": "nizamabad",
  "subhash-nagar": "nizamabad",

  // KHAMMAM
  khammam: "khammam",
  "wyra-road": "khammam",
  mamillagudem: "khammam",
  "balaji-nagar": "khammam",

  // NALGONDA
  nalgonda: "nalgonda",
  "devarakonda-road": "nalgonda",
  "miryalaguda-road": "nalgonda",
  "shivaji-nagar": "nalgonda",

  // SIDDIPET
  siddipet: "siddipet",
  "gajwel-road": "siddipet",
  "prashanth-nagar": "siddipet",

  // MAHABUBNAGAR
  mahabubnagar: "mahabubnagar",
  gadwal: "mahabubnagar",
  boyapally: "mahabubnagar",
  "jadcherla-road": "mahabubnagar",
  "new-town": "mahabubnagar",

  // SANGAREDDY / HYD OUTSKIRTS
  sangareddy: "sangareddy",
  patancheru: "sangareddy",
  isnapur: "sangareddy",
  "rc-puram": "sangareddy",
  "iit-hyderabad-surroundings": "sangareddy",

  // SURYAPET
  suryapet: "suryapet",
  miryalaguda: "suryapet",

  // GENERIC AREAS → HYDERABAD
  "sr-nagar": "hyderabad",
  "highway-road": "hyderabad",
  "new-layouts": "hyderabad",
  "residential-colonies": "hyderabad",
  "new-apartment-zones": "hyderabad",
  "main-road-developments": "hyderabad",
};