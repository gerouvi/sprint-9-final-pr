import { useState } from 'react';
import { ACCOUNT_OPTIONS } from '../../../lib/constants/accountOptions';
import {
  handdleSendPasswordResetEmail,
  handleSignInWithEmailAndPassword,
} from '../../../lib/firebase/firebase-handlers-auth';
import handleAreCapsLock from '../../../lib/functions/areCapsLock';
import { ButtonRoundedStyled } from '../../Buttons/ButtonRounded.styles';
import { InputStyled } from '../../Form/Input.styles';
import PortalForgottenPassword from '../Portals/PortalForgottenPassword';
import PortalMessage from '../Portals/PortalMessage';
import { ErrorMessage, LinkText, Wrapper } from './SignInSignUpForm.styles';

const SignInForm = ({ view }) => {
  const [credentialsUser, setCredentialsUser] = useState({
    email: localStorage.getItem('emailMemoWords') || '',
    password: '',
    error: undefined,
  });

  const [capsLock, setCapsLock] = useState({
    email: false,
    password: false,
  });

  const [modalForgottenPasswordIsOpen, setModalForgottenPasswordIsOpen] =
    useState(false);

  const [emailToSendForgottenPassword, setEmailToSendForgottenPassword] =
    useState('');

  const [modalMessageActionFinished, setModalMessageActionFinished] = useState({
    isOpen: false,
    message: undefined,
  });

  const sendForgottenPassword = () => {
    setModalForgottenPasswordIsOpen(false);
    handdleSendPasswordResetEmail(
      emailToSendForgottenPassword,
      setModalMessageActionFinished
    );
  };

  if (view !== ACCOUNT_OPTIONS.SIGN_IN) return null;

  return (
    <Wrapper>
      <h1>Sign In</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          localStorage.setItem('emailMemoWords', credentialsUser.email);
          handleSignInWithEmailAndPassword(
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
        <div>
          <ButtonRoundedStyled
            disabled={!credentialsUser.email || !credentialsUser.password}
          >
            Go!
          </ButtonRoundedStyled>
        </div>
        <ErrorMessage>{credentialsUser.error}</ErrorMessage>
      </form>
      <LinkText
        type="button"
        onClick={() => setModalForgottenPasswordIsOpen(true)}
      >
        Forgotten your password?
      </LinkText>
      <PortalForgottenPassword
        triggerFunction={sendForgottenPassword}
        modalForgottenPasswordIsOpen={modalForgottenPasswordIsOpen}
        closeModal={() => setModalForgottenPasswordIsOpen(false)}
        emailToSendForgottenPassword={emailToSendForgottenPassword}
        setEmailToSendForgottenPassword={setEmailToSendForgottenPassword}
      />
      <PortalMessage
        isModalOpen={modalMessageActionFinished.isOpen}
        message={modalMessageActionFinished.message}
        closeModal={() =>
          setModalMessageActionFinished((prev) => ({ ...prev, isOpen: false }))
        }
      />
    </Wrapper>
  );
};

export default SignInForm;
