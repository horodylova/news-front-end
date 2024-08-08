import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Link } from "react-router-dom";

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
  const { user, isLogin } = useContext(AppContext);

  console.log(user, 'in header');
  console.log(isLogin);

  return (
    <HeaderContainer>
      <Heading>Summer News</Heading>
      <ButtonContainer>
        {!isLogin && (
          <RegisterButton to="/login">
            Log In
          </RegisterButton>
        )}
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
      {isLogin && <WelcomeMessage>Welcome {user?.username}</WelcomeMessage>}
    </HeaderContainer>
  );
}

export default Header;

