import styled from "styled-components";

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const SortLabel = styled.label`
  margin-right: 10px;
  font-weight: bold;
  color: #333;
`;

export const SortSelect = styled.select`
  margin-right: 20px;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  font-size: 16px;
  color: #333;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;
