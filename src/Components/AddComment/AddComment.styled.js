import styled from 'styled-components';

export const AddCommentForm = styled.form`
max-width: 800px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

export const CommentInput = styled.input`
  margin-top: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  color: #333;
  flex: 1;
`;

export const AddButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
