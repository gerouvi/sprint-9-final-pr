import { useState } from 'react';
import {
  logInFunction,
  signUpFunction,
} from '../../../lib/firebase/firebase-functions';
import { InputStyled } from '../../Form/Input.styles';

import { Button } from './FormLogInSignUp.styles';

const FormLoginSignIn = ({
  view,
  setView,
  credentialsUser,
  setCredentialsUser,
  className,
}) => {
  const [capsLock, setCapsLock] = useState({
    email: false,
    password: false,
  });

  return (
    <div className={className}>
      {view === 'login' ? <h1>Log In</h1> : <h1>Sign Up</h1>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (view === 'login') {
            handleLogIn(
              credentialsUser.email,
              credentialsUser.password,
              setCredentialsUser,
              setView
            );
          } else {
            handleSignUp(
              credentialsUser.email,
              credentialsUser.password,
              setCredentialsUser,
              setView
            );
          }
        }}
      >
        <div>
          <label>Email:</label>
          <InputStyled
            value={credentialsUser.email}
            type="email"
            onKeyUp={(e) => handleCapsLock(e, 'email', setCapsLock)}
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
            onKeyUp={(e) => handleCapsLock(e, 'password', setCapsLock)}
            onChange={(e) =>
              setCredentialsUser((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
          />
          {capsLock.password && <p>Caps Lock actived</p>}
        </div>
        <Button disabled={!credentialsUser.email || !credentialsUser.password}>
          GO!
        </Button>
      </form>
    </div>
  );
};

const handleCapsLock = (e, option, setCapsLock) => {
  if (e.getModifierState('CapsLock') && option === 'email')
    setCapsLock((prev) => ({ ...prev, email: true }));
  if (e.getModifierState('CapsLock') && option === 'password')
    setCapsLock((prev) => ({ ...prev, password: true }));
  if (!e.getModifierState('CapsLock') && option === 'email')
    setCapsLock((prev) => ({ ...prev, email: false }));
  if (!e.getModifierState('CapsLock') && option === 'password')
    setCapsLock((prev) => ({ ...prev, password: false }));
};

const handleLogIn = async (email, password, setCredentialsUser) => {
  setCredentialsUser((prev) => ({ ...prev, error: null }));
  try {
    await logInFunction(email, password);
  } catch (err) {
    setCredentialsUser((prev) => ({ ...prev, error: err.code }));
  }
};

const handleSignUp = async (email, password, setCredentialsUser) => {
  setCredentialsUser((prev) => ({ ...prev, error: null }));
  try {
    await signUpFunction(email, password);
    console.log('ok');
  } catch (err) {
    setCredentialsUser((prev) => ({ ...prev, error: err.code }));
  }
};

export default FormLoginSignIn;
