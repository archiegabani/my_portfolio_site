import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import { expect, test, vi } from "vitest"; // Import from vitest instead of jest

// Test for rendering Button component
test("renders Button component", () => {
  render(<Button label="Click Me" />);
  const button = screen.getByRole("button", { name: /click me/i });
  expect(button).toBeInTheDocument();
});

// Test for onClick functionality
test("calls onClick when clicked", () => {
  const handleClick = vi.fn(); // Use vi.fn() instead of jest.fn()
  render(<Button label="Click Me" onClick={handleClick} />);

  const button = screen.getByRole("button", { name: /click me/i });
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

// Test for disabled state
test("renders Button in disabled state", () => {
  render(<Button label="Disabled Button" isdisabled />);
  const button = screen.getByRole("button", { name: /disabled button/i });

  expect(button).toBeDisabled();
  expect(button).toHaveStyle("background-color: #ccc");
  expect(button).toHaveStyle("cursor: not-allowed");
});
