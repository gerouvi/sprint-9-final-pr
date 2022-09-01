import { useEffect, useState } from 'react';
import { UserAuthContext } from '../../lib/contexts/UserAuthContext';
import { isUserConnected } from '../../lib/firebase/firebase-functions';

const CustomUserAuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    isUserConnected(setUser);
  }, []);

  return (
    <UserAuthContext.Provider value={{ user }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default CustomUserAuthProvider;
