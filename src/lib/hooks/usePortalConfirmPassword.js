import { useState } from 'react';

const usePortalConfirmPassword = () => {
  const [portalConfirmPassword, setPortalConfirmPassword] = useState({
    isOpen: false,
    password: '',
  });

  const setOpenPortalConfirmPassword = () => {
    setPortalConfirmPassword({ isOpen: true, password: '' });
  };

  const setClosePortalConfirmPassword = () => {
    setPortalConfirmPassword({ isOpen: false, password: '' });
  };

  const setPasswordPortalConfirmPassword = (newPassword) => {
    setPortalConfirmPassword((prev) => ({
      isOpen: prev.isOpen,
      password: newPassword,
    }));
  };

  return {
    portalConfirmPassword,
    setOpenPortalConfirmPassword,
    setClosePortalConfirmPassword,
    setPasswordPortalConfirmPassword,
  };
};

export default usePortalConfirmPassword;
