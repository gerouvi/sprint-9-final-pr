import {
  logInFunction,
  signUpFunction,
} from '../../../lib/firebase/firebase-functions';

const FormLoginSignIn = ({
  view,
  setView,
  credentialsUser,
  setCredentialsUser,
}) => {
  return (
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
        <input
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
        <input
          type="password"
          onChange={(e) =>
            setCredentialsUser((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
        />
      </div>
      {view === 'login' ? <button>Log In</button> : <button>Sign Up</button>}
    </form>
  );
};

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
