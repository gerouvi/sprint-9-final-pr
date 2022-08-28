import { useEffect, useRef, useState } from 'react';

import {
  Battery,
  ButtonLockUnlock,
  ButtonsLeftSide,
  Camera,
  Close,
  Hole,
  Icons,
  IconsBottom,
  LogoApp,
  LogoApple,
  LogoLockUnlock,
  Open,
  ScreenOff,
  ScreenOn,
  Signal,
  Speaker,
  Time,
  Top,
} from './Mobile.styles';

import { MenuStyled } from './Menu.styles';
import bgScreen from '../assets/images/bgiphone.jpg';
import logoUsememo from '../assets/images/usememo.jpg';
import logoPhone from '../assets/images/phone.png';
import logoMail from '../assets/images/mail.png';
import logoSafari from '../assets/images/safari.png';
import logoMusic from '../assets/images/music.png';

const Mobile = ({ className, view, setView }) => {
  const [date, setDate] = useState(() => new Date());

  const hour = date.getHours();

  const minutes =
    date.getMinutes < 10
      ? date.getMinutes() === 0
        ? '00'
        : '0' + String(date.getMinutes())
      : date.getMinutes();

  let intervalTime = useRef();

  useEffect(() => {
    if (view === 'iphoneMenuView') {
      intervalTime.current = setInterval(() => {
        setDate(new Date());
      }, 10000);
    }

    return () => clearInterval(intervalTime.current);
  }, [view]);

  return (
    <div className={className}>
      <Top>
        <Camera />
        <Speaker />
      </Top>
      <ButtonLockUnlock
        onClick={() => {
          if (view !== 'lockedView') setView('lockedView');
          else setView('iphoneMenuView');
        }}
      />

      <LogoLockUnlock>
        {view === 'lockedView' && <Open />}
        {view !== 'lockedView' && <Close />}
        <Hole />
      </LogoLockUnlock>
      <ButtonsLeftSide />
      {view === 'lockedView' && (
        <ScreenOff>
          <LogoApple />
        </ScreenOff>
      )}
      {view === 'iphoneMenuView' && (
        <ScreenOn src={bgScreen}>
          <Time>
            {hour}:{minutes}
          </Time>
          <Battery>
            <div />
          </Battery>
          <Signal />
          <Icons>
            <LogoApp onClick={() => setView('gameView')} src={logoUsememo} />
            <IconsBottom>
              <LogoApp src={logoPhone} />
              <LogoApp src={logoMail} />
              <LogoApp src={logoSafari} />
              <LogoApp src={logoMusic} />
            </IconsBottom>
          </Icons>
        </ScreenOn>
      )}
      {view !== 'lockedView' && view !== 'iphoneMenuView' && <MenuStyled />}
    </div>
  );
};

export default Mobile;
