import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    isdisabled: { control: "boolean" },
  },
} as Meta<ButtonProps>;

const Template: StoryObj<ButtonProps> = {
  render: (args) => <Button {...args} />,
};

export const Default = {
  ...Template,
  args: {
    label: "Click Me",
    isdisabled: false,
  },
};

export const Disabled = {
  ...Template,
  args: {
    label: "Disabled Button",
    isdisabled: true,
  },
};
