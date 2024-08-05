import styled from "styled-components";
import { Link } from "react-router-dom"; 

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ece9e6;
  color: #333;
  padding: 20px;
  border-bottom: 1px solid #ddd;
  position: relative;  
`;


export const Heading = styled.h1`
  font-size: 2rem;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
    margin: 0;
  position: absolute;  
  top: 20px;
  left: 20px;
`;

export const NavContainer = styled.nav`
  margin-top: 60px;  
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
  margin: 0;
  font-size: 1rem;

  li {
    margin: 0;
  }
`;

export const NavLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;  
  top: 20px;
  right: 20px;
`;

export const RegisterButton = styled(Link)`
  display: inline-block;
  background-color: #ff6600;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  font-weight: bold;
  text-align: center;

  &:hover {
    background-color: #ff8533;
  }
`;
 
export const WelcomeMessage = styled.p`
  margin-top: 20px;
  font-size: 1rem;
  color: #333;
`;
