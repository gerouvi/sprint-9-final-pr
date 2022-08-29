import { useEffect, useRef, useState } from 'react';
import {
  Battery,
  Icons,
  IconsBottom,
  LogoApp,
  ScreenOn,
  Signal,
  Time,
} from './LauncherMobile.styles';
import bgScreen from '../assets/images/bgiphone.jpg';
import logoUsememo from '../assets/images/usememo.jpg';
import logoPhone from '../assets/images/phone.png';
import logoMail from '../assets/images/mail.png';
import logoSafari from '../assets/images/safari.png';
import logoMusic from '../assets/images/music.png';
import { Link, useNavigate } from 'react-router-dom';

const LauncherMobile = ({ showMobileDevice }) => {
  const navigate = useNavigate();

  const [date, setDate] = useState(() => new Date());

  useEffect(() => {
    if (!showMobileDevice) navigate('/usememo');
  }, [showMobileDevice, navigate]);

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
    <ScreenOn src={bgScreen}>
      <Time>
        {hour}:{minutes}
      </Time>
      <Battery>
        <div />
      </Battery>
      <Signal />
      <Icons>
        <Link to="/usememo">
          <LogoApp src={logoUsememo} />
        </Link>
        <IconsBottom>
          <LogoApp src={logoPhone} />
          <LogoApp src={logoMail} />
          <LogoApp src={logoSafari} />
          <LogoApp src={logoMusic} />
        </IconsBottom>
      </Icons>
    </ScreenOn>
  );
};

export default LauncherMobile;
