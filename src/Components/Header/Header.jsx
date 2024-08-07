import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext.jsx";
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
  const { user, setUser } = useContext(AppContext);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const toggleButtonVisibility = () => {
    setIsButtonVisible(!isButtonVisible);
  };

  useEffect(() => {
    console.log("User updated: ", user);
  }, [user]);

  return (
    <HeaderContainer>
      <Heading>Summer News</Heading>
      <ButtonContainer>
        {isButtonVisible && (
          <RegisterButton to="/login" onClick={toggleButtonVisibility}>
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
      <WelcomeMessage>Welcome, {user.username}!</WelcomeMessage>
    </HeaderContainer>
  );
}

export default Header;
