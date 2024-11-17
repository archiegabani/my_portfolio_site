import React from "react";
import styled from "styled-components";

interface TextProps {
  content: string;
  isdisabled?: boolean;
}

const StyledText = styled.p<{ isdisabled?: string }>`
  color: ${(props) => (props.isdisabled ? "#ccc" : "#000")};
  font-size: 16px;
`;

const Text: React.FC<TextProps> = ({ content, isdisabled = false }) => {
  return (
    <StyledText isdisabled={isdisabled ? "true" : ""}>{content}</StyledText>
  );
};

export default Text;
