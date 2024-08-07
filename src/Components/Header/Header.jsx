import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext.jsx";
import { Link } from "react-router-dom";
import { toggle } from '../../utils/toggle.js';

import {
  HeaderContainer,
  Heading,
  NavContainer,
  NavList,
  ButtonContainer,
  RegisterButton,
  WelcomeMessage,
} from "./Header.styled";

function Header() {
  const {user, setUser} = useContext(AppContext);

  return (
    <HeaderContainer>
      <Heading>Summer News</Heading>
      <ButtonContainer>
        <RegisterButton to="/registration" id='reg-button' onClick={toggle}>Join Us!</RegisterButton>
      </ButtonContainer>
      <NavContainer>
        <NavList>
          <li>
            <Link to="/articles">All Articles</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </NavList>
      </NavContainer>
      <WelcomeMessage>Welcome, {user.username}!</WelcomeMessage>
    </HeaderContainer>
  );
}

export default Header;
