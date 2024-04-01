import React, { ReactNode } from "react";
import chroma from "chroma-js";
import { DEFAULT_COLOR } from "../../shared/constants";
import { Radius, getRadiusPixels } from "../../shared/radius";
import { getTextSize } from "../../shared/text-size";
import { Size } from "../../shared/types";
import { getPaddingPixels } from "../../shared/padding";

export interface ChipProps {
  children?: ReactNode;
  startContent?: ReactNode;
  endContent?: ReactNode;
  size?: Size;
  radius?: Radius;
  color?: string;
  variant?: "solid" | "outline";
}

function getBackgroundColor(color: ChipProps["color"], variant: ChipProps["variant"]) {
  const adjustedColor = color || DEFAULT_COLOR;

  switch (variant) {
    case "outline":
      return "transparent";
    default:
      return adjustedColor;
  }
}

function getBorder(color: ChipProps["color"], variant: ChipProps["variant"]) {
  const adjustedColor = color || DEFAULT_COLOR;

  switch (variant) {
    case "outline":
      return `1px solid ${adjustedColor}`;
    default:
      return "transparent";
  }
}

function getTextColor(color: ChipProps["color"], variant: ChipProps["variant"]) {
  const adjustedColor = color || DEFAULT_COLOR;

  switch (variant) {
    case "outline":
      return color;
    default:
      return chroma.contrast(adjustedColor, "white") > 4.5 ? "white" : "black";
  }
}

const Chip = ({ children, size = "medium", radius = "full", color = DEFAULT_COLOR, startContent, endContent, variant = "solid" }: ChipProps) => {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: getPaddingPixels(size),
        borderRadius: getRadiusPixels(radius),
        backgroundColor: getBackgroundColor(color, variant),
        border: getBorder(color, variant),
        color: getTextColor(color, variant),
        fontSize: getTextSize(size),
      }}
    >
      {startContent}
      {children}
      {endContent}
    </div>
  );
};

export default Chip;
