import { useState } from 'react';
import { ACCOUNT_OPTIONS } from '../../../lib/constants/accountOptions';
import {
  handdleSendPasswordResetEmail,
  handleSignInWithEmailAndPassword,
} from '../../../lib/firebase/firebase-handlers-auth';
import useAreAreCapsLockEmailAndPassword from '../../../lib/hooks/useAreCapsLockEmailAndPassword';

import usePortalForgottenPassword from '../../../lib/hooks/usePortalForgottenPassword';
import usePortalMessage from '../../../lib/hooks/usePortalMessage';
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

  const {
    portalForgottenPassword,
    setOpenPortalForgottenPassword,
    setClosePortalForgottenPassword,
    setEmailPortalForgottenPassword,
  } = usePortalForgottenPassword();

  const { portalMessage, setOpenPortalMessage, setClosePortalMessage } =
    usePortalMessage();

  const {
    areCapsLockEmailAndPassword,
    setEmailAreCapsLockEmailAndPassword,
    setPasswordAreCapsLockEmailAndPassword,
  } = useAreAreCapsLockEmailAndPassword();

  const sendForgottenPassword = () => {
    setOpenPortalForgottenPassword();
    handdleSendPasswordResetEmail(
      portalForgottenPassword.email,
      setOpenPortalMessage
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
            onKeyUp={(e) => setEmailAreCapsLockEmailAndPassword(e)}
            onChange={(e) =>
              setCredentialsUser((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
          {areCapsLockEmailAndPassword.email && <p>Caps Lock actived</p>}
        </div>
        <div>
          <label>Password:</label>
          <InputStyled
            value={credentialsUser.password}
            type="password"
            onKeyUp={(e) => setPasswordAreCapsLockEmailAndPassword(e)}
            onChange={(e) =>
              setCredentialsUser((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
          />
          {areCapsLockEmailAndPassword.password && <p>Caps Lock actived</p>}
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
      <LinkText type="button" onClick={setOpenPortalForgottenPassword}>
        Forgotten your password?
      </LinkText>
      <PortalForgottenPassword
        triggerFunction={sendForgottenPassword}
        modalForgottenPasswordIsOpen={portalForgottenPassword.isOpen}
        closeModal={setClosePortalForgottenPassword}
        emailToSendForgottenPassword={portalForgottenPassword.email}
        setEmailToSendForgottenPassword={setEmailPortalForgottenPassword}
      />
      <PortalMessage
        isModalOpen={portalMessage.isOpen}
        message={portalMessage.message}
        closeModal={setClosePortalMessage}
      />
    </Wrapper>
  );
};

export default SignInForm;
