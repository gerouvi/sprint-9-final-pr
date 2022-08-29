import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ButtonSwitchMobileDeviceStyled } from './components/ButtonSwitchMobileDevice.styles';
import { FrameStyled } from './components/Frame.styles';
import GlobalStyles from './styles/GolablStyles';
import { THEME_STYLES } from './styles/THEME_STYLES';
import { LauncherMobileStyled } from './components/LauncherMobile.styles';
import { LockMobileStyled } from './components/LockMobile.styles';
import Menu from './components/Menu';

function App() {
  const [isLocked, setIsLocked] = useState(true);
  const [showMobileDevice, setShowMobileDevice] = useState(true);

  useEffect(() => {
    if (window.screen.availWidth <= 820 || !showMobileDevice) {
      setShowMobileDevice(false);
    }
  }, [showMobileDevice]);

  return (
    <ThemeProvider theme={THEME_STYLES}>
      <GlobalStyles />

      {window.screen.availWidth > 820 && (
        <ButtonSwitchMobileDeviceStyled
          showMobileDevice={showMobileDevice}
          setShowMobileDevice={setShowMobileDevice}
        />
      )}
      <FrameStyled
        isLocked={isLocked}
        setIsLocked={setIsLocked}
        showMobileDevice={showMobileDevice}
      >
        <LockMobileStyled
          isLocked={isLocked}
          showMobileDevice={showMobileDevice}
        >
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <LauncherMobileStyled showMobileDevice={showMobileDevice} />
                }
              />
              <Route path="/usememo" element={<Menu />} />
            </Routes>
          </BrowserRouter>
        </LockMobileStyled>
      </FrameStyled>
    </ThemeProvider>
  );
}

export default App;
