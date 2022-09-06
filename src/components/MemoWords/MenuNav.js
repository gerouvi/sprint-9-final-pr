import { Link } from 'react-router-dom';
import { ButtonStyled } from '../Buttons/Button.styles';
import { useContext } from 'react';
import { UserAuthContext } from '../../lib/contexts/UserAuthContext';

import { Header, LogOutButton, NavMenu, WrapperLogo } from './MenuNav.styles';

import logoMenu from '../../assets/images/memoWordsWhite.png';
import logoLogOut from '../../assets/images/logout2.png';
import { THEME_STYLES } from '../../styles/THEME_STYLES';
import { signOutFunction } from '../../lib/firebase/firebase-functions';

const MenuNav = () => {
  const { user } = useContext(UserAuthContext);

  return (
    <Header>
      {user && window.screen.availWidth < THEME_STYLES.TABLET_SIZE && (
        <Link to="/">
          <LogOutButton
            logoLogOut={logoLogOut}
            onClick={signOutFunction}
            mobilePosition="true"
          />
        </Link>
      )}
      <Link to="/">
        <WrapperLogo>
          <img src={logoMenu} alt="logo memo words" />
        </WrapperLogo>
      </Link>
      <NavMenu>
        <ul>
          <li>
            <Link to="/translate">
              <ButtonStyled>Translate</ButtonStyled>
            </Link>
          </li>
          <li>
            <Link to="/addwords">
              <ButtonStyled>Add Words</ButtonStyled>
            </Link>
          </li>
          <li>
            <Link to="/wordslist">
              <ButtonStyled>Words List</ButtonStyled>
            </Link>
          </li>
          <li>
            <Link to="/games">
              <ButtonStyled>Games</ButtonStyled>
            </Link>
          </li>
          {(user || window.screen.availWidth <= THEME_STYLES.MOBILE_SIZE) && (
            <li>
              <Link to="/account">
                <ButtonStyled>Account</ButtonStyled>
              </Link>
            </li>
          )}
          {user && window.screen.availWidth >= THEME_STYLES.TABLET_SIZE && (
            <li>
              <Link to="/">
                <LogOutButton
                  logoLogOut={logoLogOut}
                  onClick={signOutFunction}
                />
              </Link>
            </li>
          )}
        </ul>
      </NavMenu>
    </Header>
  );
};

export default MenuNav;
