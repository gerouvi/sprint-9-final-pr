import {
  ButtonLockUnlock,
  ButtonsLeftSide,
  Camera,
  Close,
  Hole,
  LogoLockUnlock,
  MobileDevice,
  NoMobileDevice,
  Open,
  Speaker,
  Top,
} from './Frame.styles';

const Frame = ({ children, showMobileDevice, isLocked, setIsLocked }) => {
  return (
    <>
      {showMobileDevice ? (
        <MobileDevice>
          <Top>
            <Camera />
            <Speaker />
          </Top>
          <ButtonLockUnlock onClick={() => setIsLocked((prev) => !prev)} />

          <LogoLockUnlock>
            {isLocked ? <Open /> : <Close />}
            <Hole />
          </LogoLockUnlock>
          <ButtonsLeftSide />
          {children}
        </MobileDevice>
      ) : (
        <NoMobileDevice>{children}</NoMobileDevice>
      )}
    </>
  );
};

export default Frame;
