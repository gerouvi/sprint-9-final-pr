import styled from 'styled-components';

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
