import React from "react";
import { LabelProps } from "./Label.types";
import styled from "styled-components";

const StyledLabel = styled.label<{ isdisabled?: string }>`
  display: block;
  margin-bottom: 8px;
  color: ${(props) => (props.isdisabled ? "#ccc" : "#000")};
  cursor: ${(props) => (props.isdisabled ? "not-allowed" : "pointer")};
`;

const Label: React.FC<LabelProps> = ({ text, isdisabled }) => {
  return (
    <StyledLabel isdisabled={isdisabled ? "true" : ""}>{text}</StyledLabel>
  );
};

export default Label;
