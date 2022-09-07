import { useState } from 'react';

const usePortalSpinner = () => {
  const [portalSpinner, setPortalSpinner] = useState(false);

  const setOpenPortalSpinner = () => setPortalSpinner(true);

  const setClosePortalSpinner = () => setPortalSpinner(false);

  return {
    portalSpinner,
    setOpenPortalSpinner,
    setClosePortalSpinner,
  };
};

export default usePortalSpinner;
