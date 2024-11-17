import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import { CardProps } from "./Card.types";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    isdisabled: { control: "boolean" },
  },
} as Meta<CardProps>;

const Template: StoryObj<CardProps> = {
  render: (args) => <Card {...args} />,
};

export const Default = {
  ...Template,
  args: {
    title: "Card Title",
    content: "This is a sample card content.",
    isdisabled: false,
  },
};

export const Disabled = {
  ...Template,
  args: {
    title: "Card Title",
    content: "This is a sample card content.",
    isdisabled: true,
  },
};
