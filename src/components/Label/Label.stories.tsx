import { Meta, StoryObj } from "@storybook/react";
import Label from "./Label";
import { LabelProps } from "./Label.types";

export default {
  title: "Components/Label",
  component: Label,
  argTypes: {
    text: { control: "text" },
    isdisabled: { control: "boolean" },
  },
} as Meta<LabelProps>;

const Template: StoryObj<LabelProps> = {
  render: (args) => <Label {...args} />,
};

export const Default = {
  ...Template,
  args: {
    text: "Label Text",
    isdisabled: false,
  },
};

export const Disabled = {
  ...Template,
  args: {
    text: "Label Text",
    isdisabled: true,
  },
};
