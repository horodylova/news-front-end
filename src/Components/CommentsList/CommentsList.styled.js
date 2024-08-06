import styled from 'styled-components';

export const CommentsContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 10px;
`;

export const CommentItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const CommentAuthor = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const CommentBody = styled.p`
  margin-bottom: 5px;
`;

export const CommentDate = styled.p`
  font-size: 0.9em;
  color: #aaa;
`;
