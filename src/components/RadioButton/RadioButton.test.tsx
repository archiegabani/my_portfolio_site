import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RadioButton from "./RadioButton";

test("renders RadioButton component", () => {
  render(<RadioButton label="Test Option" value="1" name="radio-group" />);
  expect(screen.getByLabelText(/test option/i)).toBeInTheDocument();
});

test("renders RadioButton in disabled state", () => {
  const { container } = render(
    <RadioButton label="Test Option" value="1" name="radio-group" isdisabled />,
  );
  expect(container.querySelector("input")).toBeDisabled();
  expect(container.firstChild).toHaveStyle("color: #ccc");
});
