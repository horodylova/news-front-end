import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh; 
  overflow: hidden; 
`;

export const Sidebar = styled.aside`
  width: 250px; 
  background-color: #f4f4f4; 
  padding: 20px;
  border-right: 1px solid #ccc; 
  overflow-y: auto; 
`;

export const Content = styled.main`
  flex-grow: 1; 
  padding: 20px;
  overflow-y: auto; 
  background-color: #fff;
`;

export const TopicLink = styled.a`
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
  color: #333;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd; 
  }
`;