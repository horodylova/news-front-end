import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 900px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
`;

export const ContentContainer = styled.div `
display:flex;
flex-direction:column`
export const Image = styled.img`
  width: 120px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%; 
`;

export const Title = styled.h3`
  font-size: 16px;
  margin: 0 0 8px;
`;

export const Author = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0 0 4px;
`;

export const DateStyled = styled.p`
  font-size: 12px;
  color: #777;
  margin: 0 0 8px;
`;

export const Topic = styled.p`
  font-size: 14px;
  margin: 0 0 8px;
  font-weight: bold;
`;

export const Votes = styled.p`
  font-size: 14px;
  margin: 0 0 4px;
`;

export const CommentCount = styled.p`
  font-size: 14px;
  margin: 0;
`;
