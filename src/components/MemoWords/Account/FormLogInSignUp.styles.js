import styled from 'styled-components';
import FormLoginSignIn from './FormLogInSignUp';

export const FormLoginSignUpStyled = styled(FormLoginSignIn)`
  text-align: center;
  padding-top: 30px;

  & form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
`;

export const Button = styled.button`
  border: 1px solid black;
  border-radius: 50%;
  background: none;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 2px black;

  &:disabled {
    border: none;
    box-shadow: none;
    cursor: initial;
  }
`;
