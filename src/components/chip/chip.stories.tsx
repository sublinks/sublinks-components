import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { HeartIcon } from '@heroicons/react/24/outline';
import Chip from "./chip";

const meta = {
  title: "Sublinks/Chip",
  component: Chip,
  tags: ['autodocs'],
  args: {
    size: "medium",
    children: "Regular",
    radius: "full",
    variant: "solid",
  },
  argTypes: {
    children: {
      options: ['Regular', 'Icon', 'Empty'],
      mapping: {
        Regular: "Button",
        Icon: <HeartIcon style={{minWidth: '24px', minHeight: '24px'}} />,
        Empty: "",
      },
    },
    startContent: {
      options: ['Icon'],
      mapping: {
        Icon: <HeartIcon style={{minWidth: '24px', minHeight: '24px'}} />,
      },
    },
    endContent: {
      options: ['Icon'],
      mapping: {
        Icon: <HeartIcon style={{minWidth: '24px', minHeight: '24px'}} />,
      },
    },
  }
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const SolidColor: Story = {
  args: {
    color: "blue",
  },
};

export const OutlineColor: Story = {
  args: {
    color: "blue",
    variant: "outline",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};
