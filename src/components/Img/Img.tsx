import React from "react";
import { ImgProps } from "./Img.types";
import styled from "styled-components";

const StyledImg = styled.img<{
  width?: string;
  height?: string;
  isdisabled?: string;
}>`
  max-width: 100%;
  height: auto;
  filter: ${(props) => (props.isdisabled ? "grayscale(100%)" : "none")};
  cursor: ${(props) => (props.isdisabled ? "not-allowed" : "pointer")};
`;

const Img: React.FC<ImgProps> = ({ src, alt, width, height, isdisabled }) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      width={width}
      height={height}
      isdisabled={isdisabled ? "true" : ""}
    />
  );
};

export default Img;
