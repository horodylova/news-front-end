import React, { useContext, useState } from "react";
import { toast } from 'react-toastify';
import { fetchUserById } from '../../api';
import { AppContext } from "../../contexts/AppContext";
import { FormContainer, Form, Label, Input, Button } from "./LoginPage.styled";

function LoginPage() {
  const { setUser, setIsLogin } = useContext(AppContext);
  const [username, setUsername] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetchUserById(username);
         setUser(response.user[0]);
        setIsLogin(true);
        toast.success('Login successful!');
      }  
    catch (error) {
      setIsLogin(false);
      toast.error(`Error: ${error.message}`);
    }
  }

  function handleChange(event) {
    setUsername(event.target.value);
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="username">
          Username
          <Input
            type="text"
            id="username"
            placeholder="asvetkin"
            onChange={handleChange}
          />
        </Label>
        <Button type="submit">Log In</Button>
      </Form>
    </FormContainer>
  );
}

export default LoginPage;

