import styled from 'styled-components';
import Button from './Button';

export const ButtonStyled = styled(Button)`
  padding: 0.7rem 1.2rem;
  border-radius: ${({ theme: { BORDER_RADIUS } }) => BORDER_RADIUS.SM};
  box-shadow: 1px 1px 2px black;
  border: 1px solid black;
  cursor: pointer;
  background-color: transparent;

  &:disabled {
    border: 1px solid gray;
    cursor: default;
    box-shadow: none;
  }

  &:active {
    transform: scale(0.8);
  }

  &:disabled:active {
    transform: scale(1);
  }
`;
