import React from "react";
import { CardProps } from "./Card.types";
import styled from "styled-components";

const StyledCard = styled.div<{ isdisabled?: string }>`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  text-align: center;
  filter: ${(props) => (props.isdisabled ? "grayscale(100%)" : "none")};
  cursor: ${(props) => (props.isdisabled ? "not-allowed" : "pointer")};
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.25rem;
`;

const Card: React.FC<CardProps> = ({ title, content, isdisabled }) => {
  return (
    <StyledCard isdisabled={isdisabled ? "true" : ""}>
      <Title>{title}</Title>
      <p>{content}</p>
    </StyledCard>
  );
};

export default Card;
