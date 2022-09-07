import { useContext } from 'react';
import { UserAuthContext } from '../../../lib/contexts/UserAuthContext';
import { handleDeleteUser } from '../../../lib/firebase/firebase-handlers-auth';
import { handleDeleteCollectionsAndSubcollection } from '../../../lib/firebase/firebase-handlers-firestore';
import usePortalConfirmPassword from '../../../lib/hooks/usePortalConfirmPassword';
import usePortalMessage from '../../../lib/hooks/usePortalMessage';
import usePortalSpinner from '../../../lib/hooks/usePortalSpinner';
import { ButtonStyled } from '../../Buttons/Button.styles';
import PortalPassword from '../Portals/PortalConfirmPassword';
import PortalMessage from '../Portals/PortalMessage';
import PortalSpinner from '../Portals/PortalSpinner';

const ButtonDeleteAccount = () => {
  const { user } = useContext(UserAuthContext);

  const {
    portalConfirmPassword,
    setOpenPortalConfirmPassword,
    setClosePortalConfirmPassword,
    setPasswordPortalConfirmPassword,
  } = usePortalConfirmPassword();

  const { portalMessage, setOpenPortalMessage, setClosePortalMessage } =
    usePortalMessage();

  const { portalSpinner, setOpenPortalSpinner, setClosePortalSpinner } =
    usePortalSpinner();

  const triggerFunction = () => {
    setClosePortalConfirmPassword();
    setOpenPortalSpinner();
    handleDeleteCollectionsAndSubcollection();
    handleDeleteUser(
      user.uid,
      portalConfirmPassword.password,
      setOpenPortalMessage
    );
    setPasswordPortalConfirmPassword('');
    setClosePortalSpinner();
  };

  return (
    <>
      <ButtonStyled color="red" onClick={setOpenPortalConfirmPassword}>
        Delete account
      </ButtonStyled>
      <PortalPassword
        label="Password:"
        isModalOpen={portalConfirmPassword.isOpen}
        closeModal={setClosePortalConfirmPassword}
        password={portalConfirmPassword.password}
        setPassword={setPasswordPortalConfirmPassword}
        triggerFunction={triggerFunction}
      />

      <PortalSpinner isModalOpen={portalSpinner} />
      <PortalMessage
        isModalOpen={portalMessage.isOpen}
        message={portalMessage.message}
        closeModal={setClosePortalMessage}
      />
    </>
  );
};
export default ButtonDeleteAccount;
