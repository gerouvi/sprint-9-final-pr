import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Account from '../MemoWords/Account/Account';
import AddWords from '../MemoWords/AddWords/AddWords';
import GameClassic from '../MemoWords/Games/GameClassic/GameClassic';
import Games from '../MemoWords/Games/Games';
import GameSnake from '../MemoWords/Games/GameSnake/GameSnake';
import LaunchPage from '../MemoWords/LaunchPage/LaunchPage';
import Translate from '../MemoWords/Translate/Translate';
import WordsList from '../MemoWords/WordsList/WordsList';
import { FrameStyled } from '../MobileFrame/Frame.styles';
import LauncherMobile from '../MobileFrame/LauncherMobile';
import ProtectedRoutes from '../ProtectedRoutes/ProtectedRoutes';
import CustomUserAuthProvider from '../providers/CustomUserAuthProvider';

const Router = ({ showMobileDevice, setShowMobileDevice }) => (
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
        <Route
          path="/classic"
          element={
            <ProtectedRoutes>
              <GameClassic />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/snake"
          element={
            <ProtectedRoutes>
              <GameSnake />
            </ProtectedRoutes>
          }
        />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  </CustomUserAuthProvider>
);

export default Router;
