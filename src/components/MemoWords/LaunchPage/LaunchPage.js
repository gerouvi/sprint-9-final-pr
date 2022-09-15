import { Link } from 'react-router-dom';
import { THEME_STYLES } from '../../../styles/THEME_STYLES';
import { ButtonStyled } from '../../Buttons/Button.styles';
import WrapperPage from '../Wrappers/WrapperPage';

import { OrderList, TextDescription } from './LaunchPage.styles';

const LaunchPage = () => {
  console.log('launch page');
  return (
    <WrapperPage>
      {window.screen.width > THEME_STYLES.MOBILE_SIZE && (
        <TextDescription>
          <p>
            Welcome to <span>memo words</span> the website where you can
            memorize your translate words!
          </p>

          <OrderList>
            <li>
              You can <span>translate</span> words from any langauge to any
              language and add it in your lists
            </li>
            <li>
              You can <span>add</span> words in your lists
            </li>
            <li>
              You can <span>modify</span>, <span>update</span> or{' '}
              <span>delete</span> your words
            </li>
            <li>
              And you can <span>play</span> meanwhile you memorize your words!
            </li>
          </OrderList>

          <Link to="/account">
            <ButtonStyled color="red">Log In / Sign In</ButtonStyled>
          </Link>
        </TextDescription>
      )}
    </WrapperPage>
  );
};

export default LaunchPage;
