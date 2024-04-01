import { StoryObj, Meta } from "@storybook/react";
import Overview from "./overview";

const meta = {
  title: "Examples/Overview",
  component: Overview,
} satisfies Meta<typeof Overview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
};
