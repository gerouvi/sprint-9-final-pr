import styled from 'styled-components';
import Mobile from './Mobile';

export const MobileStyled = styled(Mobile)`
  margin-top: 30px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  border: 8px solid ${(props) => props.theme.COLORS.BLACK};
  border-radius: 32px;
  width: 256px;
  height: 560px;
  box-shadow: 0px 20px 15px #33333335;
`;

export const Top = styled.div`
  position: absolute;
  top: 0;
  left: 58px;
  z-index: 30;
  background-color: ${(props) => props.theme.COLORS.BLACK};
  width: 120px;
  height: 24px;
  border-radius: 0px 0px 16px 16px;
`;

export const Camera = styled.div`
  position: absolute;
  top: 4px;
  right: 33px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #1e1f22;
  background-color: #447bb5a6;
`;
export const Speaker = styled.div`
  position: absolute;
  top: 7px;
  right: 48.4px;
  width: 43.2px;
  height: 4.5px;
  background-color: ${(props) => props.theme.COLORS.GRAY};
  border-radius: 3.2px;
`;

export const ButtonLockUnlock = styled.div`
  position: absolute;
  right: -10px;
  top: 100px;
  width: 2px;
  height: 70px;
  background-color: ${(props) => props.theme.COLORS.BLACK_LIGHT};
  z-index: 40;
  border-radius: 0px 5px 5px 0px;

  :after {
    position: absolute;
    display: inline-block;
    content: '';
    left: 8.9px;
    width: 70px;
    height: 70px;
    background-color: transparent;
    border-radius: 5px;
  }

  :active {
    transform: translateX(-1px);
  }

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const LogoLockUnlock = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.theme.COLORS.BLACK};
  top: 130px;
  right: -40px;
  border-radius: 3px;
`;

export const Open = styled.div`
  position: absolute;
  top: -5px;
  left: 2.5px;
  width: 10px;
  height: 10px;
  border: 2px solid ${(props) => props.theme.COLORS.BLACK};
  border-bottom: 2px solid transparent;
  border-left: 2px solid transparent;
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -0.5px;
    background-color: ${(props) => props.theme.COLORS.BLACK};
    width: 2px;
    height: 2px;
    border-radius: 50%;
  }
`;

export const Close = styled.div`
  position: absolute;
  top: -5px;
  left: 2.5px;
  width: 10px;
  height: 10px;
  border: 2px solid ${(props) => props.theme.COLORS.BLACK};

  border-radius: 50%;
`;

export const Hole = styled.div`
  position: absolute;
  width: 3px;
  height: 3px;
  background-color: ${(props) => props.theme.COLORS.WHITE};
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  top: 3px;

  &:after {
    content: '';
    position: absolute;
    border-bottom: 8px solid ${(props) => props.theme.COLORS.WHITE};
    border-top: 0px solid transparent;
    border-left: 1.5px solid transparent;
    border-right: 1.5px solid transparent;
  }
`;

export const ButtonsLeftSide = styled.div`
  position: absolute;
  left: -10px;
  top: 90px;
  width: 2px;
  height: 40px;
  background-color: ${(props) => props.theme.COLORS.BLACK_LIGHT};
  z-index: 40;
  border-radius: 5px 0px 0px 5px;

  &::before {
    position: absolute;
    content: '';
    top: -25px;
    width: 2px;
    height: 15px;
    background-color: ${(props) => props.theme.COLORS.BLACK_LIGHT};
    z-index: 40;
    border-radius: 5px 0px 0px 5px;
  }

  ::after {
    position: absolute;
    content: '';
    top: 50px;
    width: 2px;
    height: 40px;
    background-color: ${(props) => props.theme.COLORS.BLACK_LIGHT};
    z-index: 40;
    border-radius: 5px 0px 0px 5px;
  }
`;

export const ScreenOff = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.COLORS.BG_SCREEN_OFF};
  border-radius: ${(props) => props.theme.BORDER_RADIUS_SCREEN_MOBILE};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoApple = styled.div`
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
`;

export const ScreenOn = styled.div`
  position: absolute;
  z-index: 10;
  background-image: url(${(props) => props.src});
  background-size: cover;
  min-width: 100%;
  height: 100%;
  border-radius: ${(props) => props.theme.BORDER_RADIUS_SCREEN_MOBILE};
`;

export const Time = styled.span`
  position: absolute;
  left: 20px;
  top: 5px;
  color: white;
  font-size: 0.7em;
`;
export const Battery = styled.div`
  position: absolute;
  top: 6px;
  right: 15px;
  padding-right: 2px;
  width: 17px;
  height: 8px;
  border-radius: 2px;
  background-color: black;
  border: 1px solid black;

  & div {
    width: 100%;
    height: 100%;
    background-color: white;
  }

  &::after {
    content: '';
    position: absolute;
    top: -1.5px;
    left: -1.5px;
    right: -1.5px;
    bottom: -1.5px;
    background: white;
    border-radius: 2px;
    z-index: -1;
  }

  &::before {
    content: '';
    position: absolute;
    width: 0.8px;
    height: 1.6px;
    background-color: white;
    right: -2.5px;
    top: 2.5px;
  }
`;

export const Signal = styled.div`
  position: absolute;
  top: 12px;
  right: 44px;
  width: 5px;
  height: 12px;
  border: 2px solid transparent;
  border-top: 2px solid white;
  border-radius: 30%;

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -4.5px;
    width: 10px;
    height: 12px;
    border: 2px solid transparent;
    border-top: 2px solid white;
    border-radius: 40%;
  }

  &::after {
    content: '';
    position: absolute;
    top: -8px;
    left: -6.5px;
    width: 14px;
    height: 12px;
    border: 2px solid transparent;
    border-top: 2px solid white;
    border-radius: 40%;
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  margin-top: 180px;
`;

export const IconsBottom = styled.div`
  margin-top: 254px;
  display: flex;
  gap: 1em;
  padding: 0.5em;
  border-radius: 20px;
  background: rgba(255, 165, 0, 0.43);
`;

export const LogoApp = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 12px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  box-shadow: 0px 4px 4px #33333340;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;
