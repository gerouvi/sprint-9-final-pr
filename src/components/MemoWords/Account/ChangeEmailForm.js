import { useState } from 'react';
import { handleUpdateEmail } from '../../../lib/firebase/firebase-handlers-auth';
import usePortalConfirmPassword from '../../../lib/hooks/usePortalConfirmPassword';

import usePortalMessage from '../../../lib/hooks/usePortalMessage';

import { ButtonStyled } from '../../Buttons/Button.styles';
import { InputStyled } from '../../Form/Input.styles';
import PortalConfirmPassword from '../Portals/PortalConfirmPassword';
import PortalMessage from '../Portals/PortalMessage';
import { Wrapper } from './ChangeEmailForm.styles';

const ChangeEmailForm = () => {
  const [newEmail, setNewEmail] = useState('');

  const {
    portalConfirmPassword,
    setOpenPortalConfirmPassword,
    setClosePortalConfirmPassword,
    setPasswordPortalConfirmPassword,
  } = usePortalConfirmPassword();

  const { portalMessage, setOpenPortalMessage, setClosePortalMessage } =
    usePortalMessage();

  const triggerFunction = () => {
    setClosePortalConfirmPassword();
    handleUpdateEmail(
      newEmail,
      portalConfirmPassword.password,
      setOpenPortalMessage
    );
    setPasswordPortalConfirmPassword('');
    setNewEmail('');
  };

  return (
    <Wrapper>
      <label>Change email:</label>
      <InputStyled
        type="email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <ButtonStyled
        color="green"
        type="button"
        onClick={setOpenPortalConfirmPassword}
      >
        Change
      </ButtonStyled>
      <PortalConfirmPassword
        label="Password:"
        isModalOpen={portalConfirmPassword.isOpen}
        closeModal={setClosePortalConfirmPassword}
        password={portalConfirmPassword.password}
        setPassword={setPasswordPortalConfirmPassword}
        triggerFunction={triggerFunction}
      />
      <PortalMessage
        isModalOpen={portalMessage.isOpen}
        message={portalMessage.message}
        closeModal={setClosePortalMessage}
      />
    </Wrapper>
  );
};

export default ChangeEmailForm;
