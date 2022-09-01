import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { FrameStyled } from './components/MobileFrame/Frame.styles';
import GlobalStyles from './styles/GolablStyles';
import { THEME_STYLES } from './styles/THEME_STYLES';
import Translate from './components/MemoWords/Translate';
import AddWords from './components/MemoWords/AddWords';
import WordsList from './components/MemoWords/WordsList';
import Games from './components/MemoWords/Games';
import CustomUserAuthProvider from './components/providers/CustomUserAuthProvider';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import LaunchPage from './components/MemoWords/LaunchPage';
import Account from './components/MemoWords/Account/Account';
import LauncherMobile from './components/MobileFrame/LauncherMobile';

function App() {
  const [showMobileDevice, setShowMobileDevice] = useState(true);

  return (
    <ThemeProvider theme={THEME_STYLES}>
      <GlobalStyles />

      <CustomUserAuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <FrameStyled
                  showMobileDevice={showMobileDevice}
                  setShowMobileDevice={setShowMobileDevice}
                >
                  <LauncherMobile
                    showMobileDevice={showMobileDevice}
                    setShowMobileDevice={setShowMobileDevice}
                  >
                    <LaunchPage />
                  </LauncherMobile>
                </FrameStyled>
              }
            />
            <Route
              path="/translate"
              element={
                <ProtectedRoutes>
                  <Translate />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/addwords"
              element={
                <ProtectedRoutes>
                  <AddWords />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/wordslist"
              element={
                <ProtectedRoutes>
                  <WordsList />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/games"
              element={
                <ProtectedRoutes>
                  <Games />
                </ProtectedRoutes>
              }
            />
            <Route path="/account" element={<Account />} />
          </Routes>
        </BrowserRouter>
      </CustomUserAuthProvider>
    </ThemeProvider>
  );
}

export default App;
