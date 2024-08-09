import styled from 'styled-components';

export const TopicLink = styled.a`
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
  color: ${({ isSelected }) => (isSelected ? '#000' : '#333')};
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  background-color: ${({ isSelected }) => (isSelected ? '#ddd' : 'transparent')};

  &:hover {
    background-color: #ddd;
  }
`;

