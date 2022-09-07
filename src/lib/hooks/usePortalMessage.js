import { useState } from 'react';

const usePortalMessage = () => {
  const [portalMessage, setPortalMessage] = useState({
    isOpen: false,
    message: undefined,
  });

  const setOpenPortalMessage = (newMessage) => {
    setPortalMessage({
      isOpen: true,
      message: newMessage,
    });
  };

  const setClosePortalMessage = () => {
    setPortalMessage({
      isOpen: false,
      message: undefined,
    });
  };

  return {
    portalMessage,
    setOpenPortalMessage,
    setClosePortalMessage,
  };
};

export default usePortalMessage;
