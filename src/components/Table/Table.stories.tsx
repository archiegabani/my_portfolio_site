import { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";
import { TableProps } from "./Table.types";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    data: { control: "object" },
    isdisabled: { control: "boolean" },
  },
} as Meta<TableProps>;

const Template: StoryObj<TableProps> = {
  render: (args) => <Table {...args} />,
};

export const Default = {
  ...Template,
  args: {
    headers: ["id", "name"], // Specify headers here
    data: [
      { id: 1, name: "Row 1" },
      { id: 2, name: "Row 2" },
    ],
    isdisabled: false,
  },
};

export const Disabled = {
  ...Template,
  args: {
    headers: ["id", "name"], // Specify headers here
    data: [
      { id: 1, name: "Row 1" },
      { id: 2, name: "Row 2" },
    ],
    isdisabled: true,
  },
};
