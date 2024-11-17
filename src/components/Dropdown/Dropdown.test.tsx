import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

test("renders Dropdown component", () => {
  render(<Dropdown options={[{ label: "Option 1", value: "1" }]} />);
  expect(screen.getByRole("combobox")).toBeInTheDocument();
});

test("renders Dropdown in disabled state", () => {
  const { container } = render(
    <Dropdown options={[{ label: "Option 1", value: "1" }]} isdisabled />,
  );
  expect(container.querySelector("select")).toHaveStyle(
    "filter: grayscale(100%)",
  );
  expect(container.querySelector("select")).toHaveStyle("cursor: not-allowed");
});
