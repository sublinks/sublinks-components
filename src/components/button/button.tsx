import React, { ReactNode } from "react";
import chroma from "chroma-js";
import { DEFAULT_COLOR } from "../../shared/constants";
import { Radius, getBorderRadiusPixels } from "../../shared/radius";
import { TextSize, getTextSize } from "../../shared/text-size";

export interface ButtonProps {
  children?: ReactNode;
  startContent?: ReactNode;
  endContent?: ReactNode;
  color?: string;
  size?: TextSize;
  radius?: Radius;
  variant?: "solid" | "outline" | "text";
  style?: React.CSSProperties;
  isIcon?: boolean;
  onClick?: () => void;
}

function getPaddingPixels(size: ButtonProps["size"], isIcon: ButtonProps["isIcon"]) {
  if (isIcon) {
    switch (size) {
      case "small":
        return "8px";
      case "large":
        return "16px";
      default:
        return "12px";
    }
  }

  switch (size) {
    case "small":
      return "8px 16px";
    case "large":
      return "16px 32px";
    default:
      return "12px 24px";
  }
}

function getButtonBackground(
  variant: ButtonProps["variant"],
  color: ButtonProps["color"],
) {
  const adjustedColor = color || DEFAULT_COLOR;

  switch (variant) {
    case "text":
      return "transparent";
    case "outline":
      return "transparent";
    default:
      return adjustedColor;
  }
}

function getTextColor(
  variant: ButtonProps["variant"],
  color: ButtonProps["color"]
) {
  const adjustedColor = color || DEFAULT_COLOR;

  switch (variant) {
    case "text":
      return adjustedColor;
    case "outline":
      return adjustedColor;
    default:
      return chroma.contrast(adjustedColor, "white") > 4.5 ? "white" : "black";
  }
}

function getButtonBorder(
  variant: ButtonProps["variant"],
  color: ButtonProps["color"]
) {
  const adjustedColor = color || DEFAULT_COLOR;

  switch (variant) {
    case "outline":
      return `1px solid ${chroma(adjustedColor).darken().css()}`;
    default:
      return "none";
  }
}

function getButtonHoverBackground(
  variant: ButtonProps["variant"],
  color: ButtonProps["color"],
) {
  const adjustedColor = color || DEFAULT_COLOR;

  switch (variant) {
    case "text":
      return chroma(adjustedColor).alpha(0.2).css();
    case "outline":
      return chroma(adjustedColor).alpha(0.2).css();
    default:
      return chroma(adjustedColor).darken().css();
  }
}

function getButtonHoverColor(
  variant: ButtonProps["variant"],
  color: ButtonProps["color"]
) {
  const adjustedColor = color || DEFAULT_COLOR;

  switch (variant) {
    case "text":
      return adjustedColor;
    case "outline":
      return adjustedColor;
    default:
      return "white";
  }
}

function getButtonHoverBorder(
  variant: ButtonProps["variant"],
  color: ButtonProps["color"]
) {
  const adjustedColor = color || DEFAULT_COLOR;

  switch (variant) {
    case "outline":
      return `1px solid ${chroma(adjustedColor).css()}`;
    default:
      return "none";
  }
}

const Button = ({
  children,
  startContent,
  endContent,
  color = DEFAULT_COLOR,
  size = "medium",
  radius = "medium",
  variant = "solid",
  isIcon = false,
  onClick = () => {},
  style,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: getPaddingPixels(size, isIcon),
        borderRadius: getBorderRadiusPixels(radius),
        background: getButtonBackground(variant, color),
        color: getTextColor(variant, color),
        border: getButtonBorder(variant, color),
        fontSize: getTextSize(size),
        cursor: "default",
        transition: "background 0.2s, background-color 0.2s, color 0.2s, border-color 0.2s, font-size 0.2s, transform 0.2s",
        ...style,
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = "scale(0.97)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = getButtonHoverBackground(
          variant,
          color,
        );
        e.currentTarget.style.color = getButtonHoverColor(variant, color);
        e.currentTarget.style.border = getButtonHoverBorder(
          variant,
          color
        );
        e.currentTarget.style.cursor = "pointer";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = getButtonBackground(variant, color);
        e.currentTarget.style.color = getTextColor(variant, color);
        e.currentTarget.style.border = getButtonBorder(variant, color);
        e.currentTarget.style.cursor = "default"
      }}
    >
      {startContent}
      {children}
      {endContent}
    </button>
  );
};

export default Button;
