import { Meta, StoryObj } from "@storybook/react";
import Dropdown, { DropdownProps } from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    isdisabled: { control: "boolean" },
    options: { control: "object" },
  },
} as Meta<DropdownProps>;

const Template: StoryObj<DropdownProps> = {
  render: (args) => <Dropdown {...args} />,
};

export const Default = {
  ...Template,
  args: {
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
    isdisabled: false,
  },
};

export const Disabled = {
  ...Template,
  args: {
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
    isdisabled: true,
  },
};
