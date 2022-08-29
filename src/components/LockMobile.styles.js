import styled from 'styled-components';
import LockMobile from './LockMobile';

export const LockMobileStyled = styled(LockMobile)`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.COLORS.BG_SCREEN_OFF};
  border-radius: ${(props) => props.theme.BORDER_RADIUS_SCREEN_MOBILE};
  display: flex;
  justify-content: center;
  align-items: center;

  & div {
    width: 50px;
    height: 50px;
    background-color: #fff;
    width: 52px;
    height: 49.5px;
    border-radius: 35% 35% 41% 41% / 42% 42% 75% 75%;

    &::before {
      position: absolute;
      content: '';
      width: 13.75px;
      height: 13.75px;
      margin: -12.75px 0 0 25px;
      border-radius: 25px 0;
      z-index: 10;
      background-color: #fff;
    }

    &::after {
      position: absolute;
      content: '';
      width: 22.5px;
      height: 22.5px;
      background-color: ${(props) => props.theme.COLORS.BG_SCREEN_OFF};
      margin: 7px 0px 0px 43.5px;
      border-radius: 50%;
      z-index: 5;
      box-shadow: -31.75px -27.37px 0px ${(props) => props.theme.COLORS.BG_SCREEN_OFF},
        -29.5px -26.75px 0px ${(props) => props.theme.COLORS.BG_SCREEN_OFF},
        -28.87px -25.62px 0px ${(props) => props.theme.COLORS.BG_SCREEN_OFF},
        -26.375px -27.37px 0px ${(props) => props.theme.COLORS.BG_SCREEN_OFF},
        -26.25px -27.37px ${(props) => props.theme.COLORS.BG_SCREEN_OFF},
        -32.25px 41.5px 0px ${(props) => props.theme.COLORS.BG_SCREEN_OFF},
        -26.875px 41.5px 0px ${(props) => props.theme.COLORS.BG_SCREEN_OFF},
        -29.75px 40.25px 0px ${(props) => props.theme.COLORS.BG_SCREEN_OFF};
    }
  }
`;
