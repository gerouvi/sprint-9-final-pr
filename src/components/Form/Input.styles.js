import styled from 'styled-components';
import Input from './Input';

export const InputStyled = styled(Input)`
  width: ${({ width }) => (width ? width : '100%')};
  text-align: center;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  margin-top: 30px;

  &:focus {
    border-bottom: 1px solid red;
    outline: none;
    color: red;
  }
`;
