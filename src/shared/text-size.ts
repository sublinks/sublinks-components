export type TextSize = "small" | "medium" | "large";

const TEXT_SIZE_SMALL = "12px";
const TEXT_SIZE_MEDIUM = "14px";
const TEXT_SIZE_LARGE = "16px";

export function getTextSize(size: TextSize) {
  switch (size) {
    case "small":
      return TEXT_SIZE_SMALL;
    case "large":
      return TEXT_SIZE_LARGE;
    default:
      return TEXT_SIZE_MEDIUM;
  }
}