import { useState } from 'react';
import areCapsLockActived from '../functions/areCapsLockActived';

const useAreAreCapsLockEmailAndPassword = () => {
  const [areCapsLockEmailAndPassword, setAreCapsLockEmailAndPassword] = useState({
    email: false,
    password: false,
  });

  const setEmailAreCapsLockEmailAndPassword = (e) => {
    const areActived = areCapsLockActived(e);

    setAreCapsLockEmailAndPassword((prev) => ({
      email: areActived,
      password: prev.password,
    }));
  };

  const setPasswordAreCapsLockEmailAndPassword = (e) => {
    const areActived = areCapsLockActived(e);

    setAreCapsLockEmailAndPassword((prev) => ({
      email: prev.email,
      password: areActived,
    }));
  };

  return {
    areCapsLockEmailAndPassword,
    setEmailAreCapsLockEmailAndPassword,
    setPasswordAreCapsLockEmailAndPassword,
  };
};

export default useAreAreCapsLockEmailAndPassword;
