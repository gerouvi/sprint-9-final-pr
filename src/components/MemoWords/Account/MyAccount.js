import { useContext } from 'react';
import { UserAuthContext } from '../../../lib/contexts/UserAuthContext';

const MyAccount = () => {
  const { user } = useContext(UserAuthContext);

  if (!user) return <h1>No user</h1>;
  return <h1>My Account</h1>;
};

export default MyAccount;
