import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuthContext } from '../../lib/contexts/UserAuthContext';

const ProtectedRoutes = ({ children }) => {
  const { user } = useContext(UserAuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/account');
  });

  return children;
};

export default ProtectedRoutes;
