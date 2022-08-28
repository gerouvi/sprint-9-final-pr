import styled from 'styled-components';
import ButtonSwitchMobileDevice from './ButtonSwitchMobileDevice';

export const ButtonSwitchMobileDeviceStyled = styled(ButtonSwitchMobileDevice)`
  position: absolute;
  top: 50px;
  right: 50px;
  border: 2px solid black;
  border-radius: 3px;
  width: 25px;
  height: 56px;

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
    }

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 3px;
    width: 15px;
    height: 2px;
    background-color: black;
    border-radius: 0px 0px 3px 3px;
  }

  & > div {
    position: absolute;
    left: -24.5px;
    top: -8.5px;
    width: 70px;
    height: 70px;
    border: 2px solid black;
    border-radius: 50%;
  }

  & > div > div {
    content: '';
    position: absolute;
    top: 30px;
    width: 70px;
    height: 2px;
    background-color: black;
    transform: rotate(45deg);
  }
`;
