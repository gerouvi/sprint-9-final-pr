import styled from 'styled-components';
import Input from './Input';

export const InputStyled = styled(Input)`
  width: 100%;
  text-align: center;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;

  &:focus {
    border-bottom: 1px solid red;
    outline: none;
    color: red;
  }
`;
