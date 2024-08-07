import React from "react";
import { toast } from "react-toastify";
import {
  FormContainer,
  Form,
  Label,
  Input,
  Button,
} from "./RegistrationPage.styled";  

// const onSubmit = async ({ }) => {
//   try {
//     await ;
//     toast.success('Welcome aboard!');
//     reset();
//   } catch (error) {
//     toast.error(error);
//   }
// };

const handleSubmit = (event) => {
event.preventDefault()
};

function RegistrationPage() {
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">
          Name
          <Input type="text" id="name" placeholder="Svitlana Horodylova" />
        </Label>
        <Label htmlFor="username">
          Username
          <Input type="text" id="username" placeholder="asvetkin" />
        </Label>
        <Label htmlFor="avatar">
          Avatar URL
          <Input type="text" id="avatar" placeholder="/avatar-icon" />
        </Label>
        <Button type="submit">Join</Button>
      </Form>
    </FormContainer>
  );
}

export default RegistrationPage;
