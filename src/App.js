import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ButtonSwitchMobileDeviceStyled } from './components/ButtonSwitchMobileDevice.styles';
import { MenuStyled } from './components/Menu.styles';
import { MobileStyled } from './components/Mobile.styles';
import GlobalStyles from './styles/GolablStyles';
import { THEME_STYLES } from './styles/THEME_STYLES';

function App() {
  const [view, setView] = useState('lockedView');
  const [isMobileSize, setIsMobileSize] = useState(true);

  useEffect(() => {
    if (window.screen.availWidth <= 820) {
      setView('gameView');
    } else {
      setIsMobileSize(false);
    }
  }, [view]);

  return (
    <ThemeProvider theme={THEME_STYLES}>
      <GlobalStyles />

      {window.screen.availWidth > 820 && (
        <ButtonSwitchMobileDeviceStyled
          isMobileSize={isMobileSize}
          setIsMobileSize={setIsMobileSize}
        />
      )}

      {isMobileSize ? (
        <MenuStyled />
      ) : (
        <MobileStyled view={view} setView={setView} />
      )}
    </ThemeProvider>
  );
}

export default App;
