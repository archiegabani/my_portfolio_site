import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Text from "./Text";

describe("Text Component", () => {
  test("renders Text component with content", () => {
    render(<Text content="Sample text" />);

    // Check if the text is rendered
    expect(screen.getByText("Sample text")).toBeInTheDocument();
  });

  test("renders Text component in disabled state", () => {
    const { container } = render(<Text content="Disabled text" isdisabled />);

    // Check if the text is rendered
    expect(screen.getByText("Disabled text")).toBeInTheDocument();

    // Verify if the text has disabled styles
    expect(container.firstChild).toHaveStyle("color: #ccc"); // Assuming this style indicates disabled state
  });
});
