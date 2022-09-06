import styled from 'styled-components';
import { THEME_STYLES } from '../../styles/THEME_STYLES';

export const Header = styled.header`
  poisiton: relative;
  @media screen and (min-width: ${THEME_STYLES.MOBILE_SIZE}px) {
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavMenu = styled.nav`
  & ul {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;

    padding-top: 50px;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 20px;
    height: 80vh;

    @media screen and (min-width: ${THEME_STYLES.MOBILE_SIZE}px) {
      flex-direction: row;
      align-items: center;
      height: 175px;
      font-size: 0.7em;
      padding-top: 0;
    }

    @media screen and (min-width: ${THEME_STYLES.TABLET_SIZE}px) {
      font-size: 1em;
    }
  }

  & li {
    list-style: none;
  }
`;

export const WrapperLogo = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 60px;
  height: 180px;
  width: 180px;

  @media screen and (min-width: ${THEME_STYLES.MOBILE_SIZE}px) {
    margin-left: initial;
    margin-right: initial;
    top: 0px;
    position: relative;
    height: 175px;
    width: 175px;
  }

  & img {
    max-width: 100%;
  }
`;

export const LogOutButton = styled.div`
  position: ${({ mobilePosition }) => mobilePosition && 'absolute'};
  top: ${({ mobilePosition }) => mobilePosition && '15px'};
  right: ${({ mobilePosition }) => mobilePosition && '15px'};
  width: 30px;
  height: 30px;
  background-image: url(${({ logoLogOut }) => logoLogOut});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;
