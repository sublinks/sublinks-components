import { Size } from "./types";

const PADDING_SMALL = "8px";
const PADDING_MEDIUM = "12px";
const PADDING_LARGE = "16px";
const PADDING_SMALL_BIG_SIDE = "16px";
const PADDING_MEDIUM_BIG_SIDE = "24px";
const PADDING_LARGE_BIG_SIDE = "32px";

export function getPaddingPixels(size: Size, equalSides: boolean = false) {
  switch (size) {
    case "small":
      return equalSides ? PADDING_SMALL : `${PADDING_SMALL} ${PADDING_SMALL_BIG_SIDE}`;
    case "large":
      return equalSides ? PADDING_LARGE : `${PADDING_LARGE} ${PADDING_LARGE_BIG_SIDE}`;
    default:
      return equalSides ? PADDING_MEDIUM : `${PADDING_MEDIUM} ${PADDING_MEDIUM_BIG_SIDE}`;
  }
}
