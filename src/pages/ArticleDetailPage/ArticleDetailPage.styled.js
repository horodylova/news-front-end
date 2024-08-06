import styled from 'styled-components';

export const ArticleContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
  color: #333;
`;

export const Author = styled.h3`
  font-size: 1.2em;
  color: #777;
  margin-bottom: 20px;
`;

export const CreatedAt = styled.p`
  font-size: 0.9em;
  color: #aaa;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const Topic = styled.p`
  font-size: 1.1em;
  color: #555;
  margin-bottom: 20px;
`;

export const Body = styled.div`
  font-size: 1.2em;
  line-height: 1.6;
  color: #444;
  margin-bottom: 20px;
`;

export const Votes = styled.p`
  font-size: 1.1em;
  color: #444;
  margin-bottom: 10px;
`;

export const CommentCount = styled.p`
  font-size: 1.1em;
  color: #444;
`;
