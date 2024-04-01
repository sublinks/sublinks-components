export type Radius = "none" | "small" | "medium" | "large" | "full";

const RADIUS_NONE = "0";
const RADIUS_SMALL = "8px";
const RADIUS_MEDIUM = "12px";
const RADIUS_LARGE = "16px";
const RADIUS_FULL = "9999px";

export function getRadiusPixels(radius: Radius) {
  switch (radius) {
    case "none":
      return RADIUS_NONE;
    case "small":
      return RADIUS_SMALL;
    case "large":
      return RADIUS_MEDIUM;
    case "full":
      return RADIUS_FULL;
    default:
      return RADIUS_LARGE;
  }
}