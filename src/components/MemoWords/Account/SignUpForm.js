import { useState } from 'react';
import { ACCOUNT_OPTIONS } from '../../../lib/constants/accountOptions';
import { handleCreateUserWithEmailAndPassword } from '../../../lib/firebase/firebase-handlers-auth';
import handleAreCapsLock from '../../../lib/functions/areCapsLock';
import { ButtonRoundedStyled } from '../../Buttons/ButtonRounded.styles';
import { InputStyled } from '../../Form/Input.styles';
import { ErrorMessage, Wrapper } from './SignInSignUpForm.styles';

const SignUpForm = ({ view }) => {
  const [credentialsUser, setCredentialsUser] = useState({
    email: '',
    password: '',
    error: undefined,
  });

  const [capsLock, setCapsLock] = useState({
    email: false,
    password: false,
  });

  if (view !== ACCOUNT_OPTIONS.SIGN_UP) return null;

  return (
    <Wrapper>
      <h1>Sign Up</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          localStorage.setItem('emailMemoWords', credentialsUser.email);

          handleCreateUserWithEmailAndPassword(
            credentialsUser.email,
            credentialsUser.password,
            setCredentialsUser
          );
        }}
      >
        <div>
          <label>Email:</label>
          <InputStyled
            value={credentialsUser.email}
            type="email"
            onKeyUp={(e) => handleAreCapsLock(e, 'email', setCapsLock)}
            onChange={(e) =>
              setCredentialsUser((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
          {capsLock.email && <p>Caps Lock actived</p>}
        </div>
        <div>
          <label>Password:</label>
          <InputStyled
            value={credentialsUser.password}
            type="password"
            onKeyUp={(e) => handleAreCapsLock(e, 'password', setCapsLock)}
            onChange={(e) =>
              setCredentialsUser((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
          />
          {capsLock.password && <p>Caps Lock actived</p>}
        </div>
        <ButtonRoundedStyled
          disabled={!credentialsUser.email || !credentialsUser.password}
        >
          Go!
        </ButtonRoundedStyled>
        <ErrorMessage>{credentialsUser.error}</ErrorMessage>
      </form>
    </Wrapper>
  );
};

export default SignUpForm;
