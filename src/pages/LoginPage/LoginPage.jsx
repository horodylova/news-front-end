import React, { useContext } from "react";
import { fetchUserById } from '../../api'
import { AppContext } from "../../contexts/AppContext";
import {
  FormContainer,
  Form,
  Label,
  Input,
  Button,
} from "./LoginPage.styled";  

function LoginPage() {
  const {user, setUser, isLogin, setIsLogin} = useContext(AppContext)
  

  async function handleSubmit (event) {
    event.preventDefault()
    try{
      const response = await fetchUserById()
      const users = response.users
      const existingUser = users.find(
        (uniqueUser) => uniqueUser.username === username
     );
     if (existingUser) {
      setIsLogin(true);
    }
    
    } catch (error) {
    console.log("Error submitting user: ", error);
    setIsLogin(false);
    }
    }
     
    function handleChange(event) {
      setUser(event.target.value);
    }
    
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">
          Name
          <Input type="text" id="name" placeholder="Svitlana Horodylova" onChange={handleChange} value={user.name}/>
        </Label>
        <Label htmlFor="username">
          Username
          <Input type="text" id="username" placeholder="asvetkin" onChange={handleChange} value={user.username}/>
        </Label>
        <Button type="submit">Join</Button>
      </Form>
    </FormContainer>
  );
}

export default LoginPage;
