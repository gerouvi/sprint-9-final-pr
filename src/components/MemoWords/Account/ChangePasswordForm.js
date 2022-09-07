import { useState } from 'react';
import { handleUpdatePassword } from '../../../lib/firebase/firebase-handlers-auth';
import usePortalConfirmPassword from '../../../lib/hooks/usePortalConfirmPassword';

import usePortalMessage from '../../../lib/hooks/usePortalMessage';
import { ButtonStyled } from '../../Buttons/Button.styles';
import { InputStyled } from '../../Form/Input.styles';
import PortalConfirmPassword from '../Portals/PortalConfirmPassword';
import PortalMessage from '../Portals/PortalMessage';
import { Wrapper } from './ChangePasswordForm.styles';

const ChangePasswordForm = () => {
  const [newPassword, setNewPassword] = useState('');

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
    handleUpdatePassword(
      newPassword,
      portalConfirmPassword.password,
      setOpenPortalMessage
    );
    setPasswordPortalConfirmPassword('');
    setNewPassword('');
  };

  return (
    <Wrapper>
      <label>Change password:</label>
      <InputStyled
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <ButtonStyled
        color="green"
        type="button"
        onClick={setOpenPortalConfirmPassword}
      >
        Change
      </ButtonStyled>
      <PortalConfirmPassword
        label="Former Password:"
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

export default ChangePasswordForm;
