import { useEffect, useRef, useState } from 'react';
import {
  Battery,
  Icons,
  IconsBottom,
  LogoApp,
  ScreenOn,
  Signal,
  Time,
} from '../MobileFrame/LauncherMobile.styles.js';
import bgScreen from '../../assets/images/bgiphone.jpg';
import logoMemoWords from '../../assets/images/memowords.jpg';
import logoPhone from '../../assets/images/phone.png';
import logoMail from '../../assets/images/mail.png';
import logoSafari from '../../assets/images/safari.png';
import logoMusic from '../../assets/images/music.png';

const LauncherMobile = ({
  children,
  showMobileDevice,
  setShowMobileDevice,
}) => {
  const [date, setDate] = useState(() => new Date());

  const hour = date.getHours();

  const minutes =
    date.getMinutes() < 10
      ? date.getMinutes() === 0
        ? '00'
        : '0' + String(date.getMinutes())
      : date.getMinutes();

  let intervalTime = useRef();

  useEffect(() => {
    intervalTime.current = setInterval(() => {
      setDate(new Date());
    }, 10000);

    return () => clearInterval(intervalTime.current);
  }, []);

  return (
    <>
      {showMobileDevice ? (
        <ScreenOn src={bgScreen}>
          <Time>
            {hour}:{minutes}
          </Time>
          <Battery>
            <div />
          </Battery>
          <Signal />
          <Icons>
            <LogoApp
              src={logoMemoWords}
              onClick={() => setShowMobileDevice(false)}
            />
            <IconsBottom>
              <LogoApp src={logoPhone} />
              <LogoApp src={logoMail} />
              <LogoApp src={logoSafari} />
              <LogoApp src={logoMusic} />
            </IconsBottom>
          </Icons>
        </ScreenOn>
      ) : (
        children
      )}
    </>
  );
};

export default LauncherMobile;
