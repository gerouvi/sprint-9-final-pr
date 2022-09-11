import { THEME_STYLES } from '../../../styles/THEME_STYLES';
import { ButtonNeonStyled } from '../../Buttons/ButtonNeon.styles';
import WrapperPage from '../Wrappers/WrapperPage';

import { TextDescription } from './LaunchPage.styles';

const LaunchPage = () => {
  console.log('launch page');
  return (
    <WrapperPage>
      {window.screen.availWidth > THEME_STYLES.MOBILE_SIZE && (
        <TextDescription>
          <p>
            Welcome to Memo Words the website where you can memorize your
            translate words!
          </p>

          <ul>
            <li>You can translate words from any langauge to any language!</li>
            <li>You can add your words to memorize!</li>
            <li>And you can play meanwhile you memorize your words!</li>
          </ul>

          <p>
            Go to account to Log In or Sign In if you don't have an account!
          </p>
          <ButtonNeonStyled>Log In / Sign In</ButtonNeonStyled>
        </TextDescription>
      )}
    </WrapperPage>
  );
};

export default LaunchPage;
