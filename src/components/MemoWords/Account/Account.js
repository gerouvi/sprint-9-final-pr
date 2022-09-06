import { useContext, useEffect, useState } from 'react';
import { ACCOUNT_OPTIONS } from '../../../lib/constants/accountOptions';
import { UserAuthContext } from '../../../lib/contexts/UserAuthContext';
import { ButtonStyled } from '../../Buttons/Button.styles';
import WrapperPage from '../WrapperPage';
import { WrapperButtons, WrapperVerifiedMessage } from './Account.style';
import MyAccount from './MyAccount';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const Account = () => {
  const [view, setView] = useState('signup');

  const { user } = useContext(UserAuthContext);

  useEffect(() => {
    if (user) setView(ACCOUNT_OPTIONS.MY_ACCOUNT);
    else if (localStorage.getItem('emailMemoWords'))
      setView(ACCOUNT_OPTIONS.SIGN_IN);
  }, [user]);

  if (user && !user.emailVerified)
    return (
      <WrapperPage>
        <WrapperVerifiedMessage>
          <p>
            You have to verify your email address! Make sure you checked your
            spams!
          </p>
          <p>{user.email}</p>
          <ButtonStyled color="red" onClick={() => window.location.reload()}>
            Email verified? Click!
          </ButtonStyled>
        </WrapperVerifiedMessage>
      </WrapperPage>
    );

  return (
    <WrapperPage>
      <WrapperButtons>
        <li>
          <ButtonStyled
            disabled={user}
            onClick={() => {
              setView(ACCOUNT_OPTIONS.SIGN_UP);
            }}
          >
            Sign Up
          </ButtonStyled>
        </li>
        <li>
          <ButtonStyled
            disabled={user}
            onClick={() => {
              setView(ACCOUNT_OPTIONS.SIGN_IN);
            }}
          >
            Sign In
          </ButtonStyled>
        </li>

        <li>
          <ButtonStyled onClick={() => setView(ACCOUNT_OPTIONS.MY_ACCOUNT)}>
            My Account
          </ButtonStyled>
        </li>
      </WrapperButtons>
      <SignUpForm view={view} />
      <SignInForm view={view} />
      <MyAccount view={view} />
    </WrapperPage>
  );
};

export default Account;
