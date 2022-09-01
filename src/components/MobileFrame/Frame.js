import { useContext, useEffect, useState } from 'react';
import { UserAuthContext } from '../../lib/contexts/UserAuthContext';
import {
  ButtonLockUnlock,
  ButtonsLeftSide,
  Camera,
  Close,
  LogoLockUnlock,
  MobileDevice,
  Open,
  Speaker,
  Top,
} from './Frame.styles';
import { LockMobileStyled } from './LockMobile.styles';

const Frame = ({ children, showMobileDevice, setShowMobileDevice }) => {
  const [isLocked, setIsLocked] = useState(true);

  const { user } = useContext(UserAuthContext);

  useEffect(() => {
    if (user) setShowMobileDevice(false);
  }, [user, setShowMobileDevice]);

  return (
    <>
      {showMobileDevice ? (
        <MobileDevice>
          <Top>
            <Camera />
            <Speaker />
          </Top>
          <ButtonLockUnlock onClick={() => setIsLocked((prev) => !prev)} />
          <LogoLockUnlock>{isLocked ? <Open /> : <Close />}</LogoLockUnlock>
          <ButtonsLeftSide />
          <LockMobileStyled
            isLocked={isLocked}
            showMobileDevice={showMobileDevice}
          >
            {children}
          </LockMobileStyled>
        </MobileDevice>
      ) : (
        children
      )}
    </>
  );
};

export default Frame;
