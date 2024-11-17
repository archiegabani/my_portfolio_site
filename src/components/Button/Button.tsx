import React from "react";
import { ButtonProps } from "./Button.types";
import styled from "styled-components";

const StyledButton = styled.button<{ isdisabled?: string }>`
  padding: 10px 20px;
  background-color: ${(props) => (props.isdisabled ? "#ccc" : "#007bff")};
  color: ${(props) => (props.isdisabled ? "#666" : "#fff")};
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.isdisabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.isdisabled ? "#ccc" : "#0056b3")};
  }
`;

const Button: React.FC<ButtonProps> = ({ label, isdisabled, onClick }) => {
  return (
    <StyledButton
      isdisabled={isdisabled ? "true" : ""}
      onClick={isdisabled ? undefined : onClick}
      disabled={isdisabled}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
