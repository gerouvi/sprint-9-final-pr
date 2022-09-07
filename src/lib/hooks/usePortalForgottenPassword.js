import { useState } from 'react';

const usePortalForgottenPassword = () => {
  const [portalForgottenPassword, setPortalForgottenPassword] = useState({
    email: '',
    isOpen: false,
  });

  const setOpenPortalForgottenPassword = () =>
    setPortalForgottenPassword({ email: '', isOpen: true });

  const setClosePortalForgottenPassword = () =>
    setPortalForgottenPassword({ email: '', isOpen: false });

  const setEmailPortalForgottenPassword = (newEmail) =>
    setPortalForgottenPassword({ email: newEmail, isOpen: true });

  return {
    portalForgottenPassword,
    setOpenPortalForgottenPassword,
    setClosePortalForgottenPassword,
    setEmailPortalForgottenPassword,
  };
};

export default usePortalForgottenPassword;
