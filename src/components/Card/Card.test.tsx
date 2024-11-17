import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

test("renders Card component", () => {
  render(<Card title="Test Title" content="Test Content" />);
  expect(screen.getByText(/test title/i)).toBeInTheDocument();
  expect(screen.getByText(/test content/i)).toBeInTheDocument();
});

test("renders Card in disabled state", () => {
  const { container } = render(
    <Card title="Test Title" content="Test Content" isdisabled />,
  );
  expect(container.firstChild).toHaveStyle("filter: grayscale(100%)");
  expect(container.firstChild).toHaveStyle("cursor: not-allowed");
});
