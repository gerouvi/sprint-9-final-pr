import { useContext, useEffect, useState } from 'react';
import { UserAuthContext } from '../../../lib/contexts/UserAuthContext';
import { ButtonStyled } from '../../Buttons/Button.styles';
import WrapperPage from '../WrapperPage';
import { ErroMessage, WrapperButtons } from './Account.style';
import { FormLoginSignUpStyled } from './FormLogInSignUp.styles';
import MyAccount from './MyAccount';

const Account = () => {
  const [view, setView] = useState('signup');

  const { user } = useContext(UserAuthContext);

  useEffect(() => {
    if (user) setView('myacoount');
  }, [user]);

  const [credentialsUser, setCredentialsUser] = useState(
    initialStateCredentials
  );

  return (
    <WrapperPage>
      <WrapperButtons>
        <li>
          <ButtonStyled
            disabled={user}
            onClick={() => {
              setView('signup');
              setCredentialsUser(initialStateCredentials());
            }}
          >
            Sign Up
          </ButtonStyled>
        </li>
        <li>
          <ButtonStyled
            disabled={user}
            onClick={() => {
              setView('login');
              setCredentialsUser(initialStateCredentials());
            }}
          >
            Log In
          </ButtonStyled>
        </li>

        <li>
          <ButtonStyled onClick={() => setView('myaccount')}>
            My Account
          </ButtonStyled>
        </li>
      </WrapperButtons>
      {view === 'login' || view === 'signup' ? (
        <>
          <FormLoginSignUpStyled
            view={view}
            setView={setView}
            credentialsUser={credentialsUser}
            setCredentialsUser={setCredentialsUser}
          />
          {credentialsUser.error === 'auth/weak-password' && (
            <ErroMessage>Password short, at least 6 characters</ErroMessage>
          )}
          {credentialsUser.error === 'auth/email-already-in-use' && (
            <ErroMessage>Email already in use</ErroMessage>
          )}
          {credentialsUser.error &&
            credentialsUser.error !== 'auth/weak-password' &&
            credentialsUser.error !== 'auth/email-already-in-use' && (
              <ErroMessage>Credentials incorrects</ErroMessage>
            )}
        </>
      ) : (
        <MyAccount />
      )}
    </WrapperPage>
  );
};

const initialStateCredentials = () => ({
  email: '',
  password: '',
  error: null,
});

export default Account;
