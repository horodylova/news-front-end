import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  color: #333;
`;

export const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004080;
  }
`;

