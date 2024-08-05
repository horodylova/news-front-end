import styled from "styled-components";

 export const PageContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #ffffff; // Light background for the container
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

 export const Heading = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

 export const Article = styled.article`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  
  p {
    margin-bottom: 15px;
  }
`;
