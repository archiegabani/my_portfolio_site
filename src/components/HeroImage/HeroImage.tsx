import React from "react";
import { HeroImageProps } from "./HeroImage.types";
import styled from "styled-components";

const StyledHeroImage = styled.div<{ imageurl: string; isdisabled?: string }>`
  width: 100%;
  height: 300px; /* Adjust the height as needed */
  background-image: url(${(props) => props.imageurl});
  background-size: cover;
  background-position: center;
  filter: ${(props) => (props.isdisabled ? "grayscale(100%)" : "none")};
  cursor: ${(props) => (props.isdisabled ? "not-allowed" : "pointer")};
`;

const HeroImage: React.FC<HeroImageProps> = ({ imageurl, isdisabled }) => {
  return (
    <StyledHeroImage
      data-testid="hero-image"
      imageurl={imageurl}
      isdisabled={isdisabled ? "true" : ""}
    />
  );
};

export default HeroImage;
