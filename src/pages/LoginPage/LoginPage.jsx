import React, { useContext, useState } from "react";
import { toast } from 'react-toastify';
import { fetchUserById } from '../../api';
import { AppContext } from "../../contexts/AppContext";
import { FormContainer, Form, Label, Input, Button } from "./LoginPage.styled";

function LoginPage() {
  const { user, setUser, isLogin, setIsLogin } = useContext(AppContext);

  const [inputValues, setInputValues] = useState({
    name: user ? user.name : '',
    username: user ? user.username : '',
  });

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetchUserById(inputValues.username);
      const fetchedUser = response.user;
      setUser(fetchedUser);
      setIsLogin(true);
      toast.success('Login successful!');
    } catch (error) {
      console.log("Error submitting user: ", error);
      setIsLogin(false);
      toast.error(`Error: ${error.message}`);
    }
  }

  function handleChange(event) {
    const { id, value } = event.target;
    setInputValues(prevValues => ({
      ...prevValues,
      [id]: value,
    }));
    setUser(event.target.value)
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            id="name"
            placeholder="Svitlana Horodylova"
            onChange={handleChange}
            value={inputValues.name}
          />
        </Label>
        <Label htmlFor="username">
          Username
          <Input
            type="text"
            id="username"
            placeholder="asvetkin"
            onChange={handleChange}
            value={inputValues.username}
          />
        </Label>
        <Button type="submit">Log In</Button>
      </Form>
    </FormContainer>
  );
}

export default LoginPage;

