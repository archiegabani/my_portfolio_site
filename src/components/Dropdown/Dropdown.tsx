// Dropdown.tsx
import React from "react";
import styled from "styled-components";

export interface Option {
  label: string;
  value: string;
}

export interface DropdownProps {
  options: Option[];
  isdisabled?: boolean;
}

const StyledSelect = styled.select<{ isdisabled?: string }>`
  filter: ${(props) => (props.isdisabled ? "grayscale(100%)" : "none")};
  cursor: ${(props) => (props.isdisabled ? "not-allowed" : "pointer")};
`;

const Dropdown: React.FC<DropdownProps> = ({ options, isdisabled }) => {
  return (
    <StyledSelect disabled={isdisabled} isdisabled={isdisabled ? "true" : ""}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
