import React, { ReactNode } from "react";
import chroma from "chroma-js";

interface ButtonProps {
  children?: ReactNode;
  startContent?: ReactNode;
  endContent?: ReactNode;
  color?: string;
  size?: "small" | "medium" | "large";
  radius?: "none" | "small" | "medium" | "large" | "full";
  variant?: "solid" | "outline" | "text";
  style?: React.CSSProperties;
}

function getPaddingPixels(size: ButtonProps["size"]) {
  switch (size) {
    case "small":
      return "8px 16px";
    case "large":
      return "16px 32px";
    default:
      return "12px 24px";
  }
}

function getBorderRadiusPixels(radius: ButtonProps["radius"]) {
  switch (radius) {
    case "none":
      return "0";
    case "small":
      return "4px";
    case "large":
      return "12px";
    case "full":
      return "9999px";
    default:
      return "8px";
  }
}

/*
Text button has a transparent background but gets a light background on hover. Gets text color set to color
Outline button has a transparent background and has a border but gets a light background on hover and a lighter border. Gets text color and border color set to color
Solid button has a light background and gets a darker background on hover. Gets background color set to color and text color set to transparent
The hover color gets closer to the passed in color
*/

function getButtonBackground(
  variant: ButtonProps["variant"],
  color: ButtonProps["color"]
) {
  const adjustedColor = color || "#adadad";

  switch (variant) {
    case "text":
      return "transparent";
    case "outline":
      return "transparent";
    default:
      return adjustedColor;
  }
}

function getButtonColor(
  variant: ButtonProps["variant"],
  color: ButtonProps["color"]
) {
  const adjustedColor = color || "#adadad";

  switch (variant) {
    case "text":
      return adjustedColor;
    case "outline":
      return adjustedColor;
    default:
      return "transparent";
  }
}

function getButtonBorder(
  variant: ButtonProps["variant"],
  color: ButtonProps["color"]
) {
  const adjustedColor = color || "#adadad";

  switch (variant) {
    case "outline":
      return `1px solid ${adjustedColor}`;
    default:
      return "none";
  }
}

function getButtonHoverBackground(
  variant: ButtonProps["variant"],
  color: ButtonProps["color"]
) {
  const adjustedColor = color || "#adadad";

  switch (variant) {
    case "text":
      return chroma(adjustedColor).alpha(0.05).css();
    case "outline":
      return chroma(adjustedColor).alpha(0.05).css();
    default:
      return chroma(adjustedColor).darken().css();
  }
}

function getButtonHoverColor(
  variant: ButtonProps["variant"],
  color: ButtonProps["color"]
) {
  const adjustedColor = color || "#adadad";

  switch (variant) {
    case "text":
      return adjustedColor;
    case "outline":
      return chroma(adjustedColor).darken().css();
    default:
      return "transparent";
  }
}

function getButtonHoverBorder(
  variant: ButtonProps["variant"],
  color: ButtonProps["color"]
) {
  const adjustedColor = color || "#adadad";

  switch (variant) {
    case "outline":
      return `1px solid ${chroma(adjustedColor).brighten().css()}`;
    default:
      return "none";
  }
}

const Button = ({
  children,
  startContent,
  endContent,
  color = "adadad",
  size = "medium",
  radius = "medium",
  variant = "solid",
  style,
}: ButtonProps) => {
  return (
    <button
      style={{
        padding: getPaddingPixels(size),
        borderRadius: getBorderRadiusPixels(radius),
        background: getButtonBackground(variant, color),
        color: getButtonColor(variant, color),
        border: getButtonBorder(variant, color),
        transition: "background-color 0.2s, color 0.2s, border-color 0.2s",
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = getButtonHoverBackground(
          variant,
          color
        );
        e.currentTarget.style.color = getButtonHoverColor(variant, color);
        e.currentTarget.style.borderColor = getButtonHoverBorder(
          variant,
          color
        );
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = getButtonBackground(variant, color);
        e.currentTarget.style.color = getButtonColor(variant, color);
        e.currentTarget.style.borderColor = getButtonBorder(variant, color);
      }}
    >
      {startContent}
      {children}
      {endContent}
    </button>
  );
};

export default Button;
