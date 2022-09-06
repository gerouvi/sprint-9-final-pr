import styled from 'styled-components';
import ButtonRounded from './ButtonRounded';

export const ButtonRoundedStyled = styled(ButtonRounded)`
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

  &:active {
    transform: scale(0.8);
  }
`;
