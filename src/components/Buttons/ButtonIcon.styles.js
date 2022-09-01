import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';

export const ButtonIconStyled = styled(ButtonIcon)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.BORDER_RADIUS.SM};
`;
