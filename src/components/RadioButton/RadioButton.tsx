import React from "react";
import { RadioButtonProps } from "./RadioButton.types";
import styled from "styled-components";

const StyledLabel = styled.label<{ isdisabled?: string }>`
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.isdisabled ? "not-allowed" : "pointer")};
  color: ${(props) => (props.isdisabled ? "#ccc" : "#000")};
`;

const RadioInput = styled.input`
  margin-right: 8px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  isdisabled,
  name,
}) => {
  return (
    <StyledLabel isdisabled={isdisabled ? "true" : ""}>
      <RadioInput
        type="radio"
        value={value}
        name={name}
        disabled={isdisabled}
      />
      {label}
    </StyledLabel>
  );
};

export default RadioButton;
