import React from "react";
import { TableProps } from "./Table.types";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTh = styled.th`
  padding: 8px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
`;

const StyledTd = styled.td<{ isdisabled?: string }>`
  padding: 8px;
  border: 1px solid #ccc;
  color: ${(props) => (props.isdisabled ? "#ccc" : "#000")};
`;

const Table: React.FC<TableProps> = ({ headers, data, isdisabled }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <StyledTh key={index}>{header.display}</StyledTh>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, cellIndex) => (
              <StyledTd key={cellIndex} isdisabled={isdisabled ? "true" : ""}>
                {header.key === "image" ? (
                  <img
                    src={row[header.key]}
                    alt="Table image"
                    style={{ width: "100px", height: "60px" }}
                  />
                ) : (
                  row[header.key as keyof typeof row]
                )}
              </StyledTd>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
