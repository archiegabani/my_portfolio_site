import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Img from "./Img";

test("renders Img component", () => {
  render(
    <Img
      src="https://picsum.photos/seed/picsum/150/100"
      alt="Placeholder Image"
    />,
  );
  const imgElement = screen.getByAltText(/placeholder image/i);
  expect(imgElement).toBeInTheDocument();
});

test("renders Img with correct src", () => {
  const { container } = render(
    <Img
      src="https://picsum.photos/seed/picsum/150/100"
      alt="Placeholder Image"
    />,
  );
  expect(container.querySelector("img")).toHaveAttribute(
    "src",
    "https://picsum.photos/seed/picsum/150/100",
  );
});

test("renders Img in disabled state", () => {
  const { container } = render(
    <Img
      src="https://picsum.photos/seed/picsum/150/100"
      alt="Placeholder Image"
      isdisabled
    />,
  );
  expect(container.querySelector("img")).toHaveStyle("filter: grayscale(100%)");
});
