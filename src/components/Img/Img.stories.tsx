import { Meta, StoryObj } from "@storybook/react";
import Img from "./Img";
import { ImgProps } from "./Img.types";

export default {
  title: "Components/Img",
  component: Img,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    isdisabled: { control: "boolean" },
  },
} as Meta<ImgProps>;

const Template: StoryObj<ImgProps> = {
  render: (args) => <Img {...args} />,
};

export const Default = {
  ...Template,
  args: {
    src: "https://picsum.photos/seed/picsum/300/300",
    alt: "Sample Image",
    isdisabled: false,
  },
};

export const Disabled = {
  ...Template,
  args: {
    src: "https://picsum.photos/seed/picsum/300/300",
    alt: "Sample Image",
    isdisabled: true,
  },
};
