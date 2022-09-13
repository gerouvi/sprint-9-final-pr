import bg from '../../../assets/backgrounds/bg4.png';
import { THEME_STYLES } from '../../../styles/THEME_STYLES';
import MenuNav from './MenuNav';
import { Link } from 'react-router-dom';
import { ButtonGoBackStyled } from '../../Buttons/ButtonGoBack.styles';
import { Wrapper } from './WrapperPage.styles';

const WrapperPage = ({ children }) => {
  const pathName = window.location.pathname.replace('/', '');

  return (
    <Wrapper bg={bg}>
      {window.screen.width <= THEME_STYLES.MOBILE_SIZE && pathName && (
        <Link to="/">
          <ButtonGoBackStyled>Go Back</ButtonGoBackStyled>
        </Link>
      )}
      {(window.screen.width > THEME_STYLES.MOBILE_SIZE || !pathName) && (
        <MenuNav />
      )}
      {children}
    </Wrapper>
  );
};

export default WrapperPage;
