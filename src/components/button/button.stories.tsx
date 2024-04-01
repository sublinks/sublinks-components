import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { HeartIcon } from '@heroicons/react/24/outline';
import Button from "./button";

const meta = {
  title: "Sublinks/Button",
  component: Button,
  tags: ['autodocs'],
  args: {
    size: "medium",
    children: "Regular",
    radius: "medium",
    variant: "solid",
    isIcon: false,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
  },
};

export const SolidColor: Story = {
  args: {
    color: "#a12363",
  },
};

export const OutlineColor: Story = {
  args: {
    variant: "outline",
    color: "#a12363",
  },
};

export const TextColor: Story = {
  args: {
    variant: "text",
    color: "#a12363",
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

export const NoRadius: Story = {
  args: {
    radius: "none",
  },
};

export const SmallRadius: Story = {
  args: {
    radius: "small",
  },
};

export const MediumRadius: Story = {
  args: {
    radius: "medium",
  },
};

export const LargeRadius: Story = {
  args: {
    radius: "large",
  },
};

export const FullRadius: Story = {
  args: {
    radius: "full",
  },
};

export const IconSolid: Story = {
  args: {
    children: "Icon",
    isIcon: true,
  },
};

export const IconOutline: Story = {
  args: {
    children: "Icon",
    isIcon: true,
    variant: "outline",
  },
};

export const IconText: Story = {
  args: {
    children: "Icon",
    isIcon: true,
    variant: "text",
  },
};

export const StartIconSolid: Story = {
  args: {
    startContent: <HeartIcon style={{minWidth: '24px', minHeight: '24px'}} />,
  },
};

export const StartIconOutline: Story = {
  args: {
    startContent: <HeartIcon style={{minWidth: '24px', minHeight: '24px'}} />,
    variant: "outline",
  },
};

export const StartIconText: Story = {
  args: {
    startContent: <HeartIcon style={{minWidth: '24px', minHeight: '24px'}} />,
    variant: "text",
  },
};

export const EmptySolid: Story = {
  args: {
    children: "",
  },
};

export const EmptyOutline: Story = {
  args: {
    children: "",
    variant: "outline",
  },
};

export const EmptyText: Story = {
  args: {
    children: "",
    variant: "text",
  },
};

export const EndIconSolid: Story = {
  args: {
    endContent: <HeartIcon style={{minWidth: '24px', minHeight: '24px'}} />,
  },
};

export const EndIconOutline: Story = {
  args: {
    endContent: <HeartIcon style={{minWidth: '24px', minHeight: '24px'}} />,
    variant: "outline",
  },
};

export const EndIconText: Story = {
  args: {
    endContent: <HeartIcon style={{minWidth: '24px', minHeight: '24px'}} />,
    variant: "text",
  },
};
