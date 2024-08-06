import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
  display: block;
  padding: 16px;
  margin: 16px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const Title = styled.h2`
  margin: 0 0 8px 0;
  font-size: 24px;
  color: #333;
`;

export const Author = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
  color: #666;
`;

export const CreatedAt = styled.p`
  margin: 0 0 8px 0;
  font-size: 14px;
  color: #999;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 16px;
  border-radius: 4px;
`;

export const Topic = styled.p`
  margin: 0 0 8px 0;
  font-size: 16px;
  color: #007BFF;
`;

export const Votes = styled.p`
  margin: 0 0 8px 0;
  font-size: 14px;
  color: #333;
`;

export const CommentCount = styled.p`
  margin: 0 0 8px 0;
  font-size: 14px;
  color: #333;
`;