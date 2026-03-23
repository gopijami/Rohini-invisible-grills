import { locationGeo, GeoCity } from "../data/locationGeo";
import { locationParentMap } from "../data/locationGeo";

export function getGeo(slug: string) {
  const parentCity: GeoCity =
    locationParentMap[slug] ?? "hyderabad";

  return locationGeo[parentCity];
}