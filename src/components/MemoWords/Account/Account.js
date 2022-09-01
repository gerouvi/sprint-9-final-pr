import { useContext, useEffect, useState } from 'react';
import { UserAuthContext } from '../../../lib/contexts/UserAuthContext';
import { ButtonStyled } from '../../Buttons/Button.styles';
import WrapperPage from '../WrapperPage';
import { WrapperButtons } from './Account.style';
import FormLoginSignIn from './FormLogInSignUp';
import MyAccount from './MyAccount';

const Account = () => {
  const [view, setView] = useState('signup');

  const { user } = useContext(UserAuthContext);

  useEffect(() => {
    if (user) setView('myacoount');
  }, [user]);

  const [credentialsUser, setCredentialsUser] = useState({
    email: undefined,
    password: undefined,
    error: null,
  });

  return (
    <WrapperPage>
      <WrapperButtons>
        <li>
          <ButtonStyled disabled={user} onClick={() => setView('signup')}>
            Sign Up
          </ButtonStyled>
        </li>
        <li>
          <ButtonStyled disabled={user} onClick={() => setView('login')}>
            Log In
          </ButtonStyled>
        </li>

        <li>
          <ButtonStyled disabled={!user} onClick={() => setView('myaccount')}>
            My Account
          </ButtonStyled>
        </li>
      </WrapperButtons>
      {view === 'login' || view === 'signup' ? (
        <>
          {view === 'login' ? <h1>Log In</h1> : <h1>Sign Up</h1>}
          <FormLoginSignIn
            view={view}
            setView={setView}
            credentialsUser={credentialsUser}
            setCredentialsUser={setCredentialsUser}
          />
          <p>{credentialsUser.error}</p>
        </>
      ) : (
        <MyAccount />
      )}
    </WrapperPage>
  );
};

export default Account;
