// HeroImage.test.tsx
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HeroImage from "./HeroImage";

test("renders HeroImage component", () => {
  render(<HeroImage imageurl="https://picsum.photos/seed/picsum/800/300" />);
  const heroImage = screen.getByTestId("hero-image"); // You may need to add a test ID
  expect(heroImage).toBeInTheDocument();
});

test("renders HeroImage in disabled state", () => {
  const { container } = render(
    <HeroImage
      imageurl="https://picsum.photos/seed/picsum/800/300"
      isdisabled
    />,
  );
  const heroImage = container.firstChild; // Assuming the first child is the HeroImage component
  expect(heroImage).toHaveStyle("filter: grayscale(100%)");
  expect(heroImage).toHaveStyle("cursor: not-allowed");
});
