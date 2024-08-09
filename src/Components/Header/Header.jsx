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

  return (
    <HeaderContainer>
      <Heading><Link to='/'>Summer News</Link></Heading>
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
            <Link to='/'>Home</Link>
          </li>
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

