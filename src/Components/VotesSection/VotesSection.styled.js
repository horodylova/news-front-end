import styled from 'styled-components';

export const VotesContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const VotesText = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-right: 8px; 
  color: #333;
`;

export const RecomendIconStyled = styled.img`
  width: 24px;
  height: 24px;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ isDisabled }) => (isDisabled ? 0 : 1)};
  visibility: ${({ isDisabled }) => (isDisabled ? 'hidden' : 'visible')};
`;
