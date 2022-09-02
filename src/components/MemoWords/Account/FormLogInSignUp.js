import { useState } from 'react';
import {
  handleLogIn,
  handleSignUp,
} from '../../../lib/firebase/firebase-handlers';
import handleAreCapsLock from '../../../lib/functions/areCapsLock';
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
        <Button disabled={!credentialsUser.email || !credentialsUser.password}>
          GO!
        </Button>
      </form>
    </div>
  );
};

export default FormLoginSignIn;
