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
}) => (
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
          onChange={(e) =>
            setCredentialsUser((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label>Password:</label>
        <InputStyled
          value={credentialsUser.password}
          type="password"
          onChange={(e) =>
            setCredentialsUser((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
        />
      </div>
      <Button disabled={!credentialsUser.email || !credentialsUser.password}>
        GO!
      </Button>
    </form>
  </div>
);

const handleLogIn = async (email, password, setCredentialsUser, setView) => {
  setCredentialsUser((prev) => ({ ...prev, error: null }));
  try {
    await logInFunction(email, password);
    setView(undefined);
  } catch (err) {
    setCredentialsUser((prev) => ({ ...prev, error: err.message }));
  }
};

const handleSignUp = async (email, password, setCredentialsUser, setView) => {
  setCredentialsUser((prev) => ({ ...prev, error: null }));
  try {
    await signUpFunction(email, password);
    setView(undefined);
  } catch (err) {
    setCredentialsUser((prev) => ({ ...prev, error: err.message }));
  }
};

export default FormLoginSignIn;
