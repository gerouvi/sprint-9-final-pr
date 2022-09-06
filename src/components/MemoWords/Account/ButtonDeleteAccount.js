import { useContext, useState } from 'react';
import { UserAuthContext } from '../../../lib/contexts/UserAuthContext';
import { handleDeleteUser } from '../../../lib/firebase/firebase-handlers-auth';
import { handleDeleteCollectionsAndSubcollection } from '../../../lib/firebase/firebase-handlers-firestore';
import { ButtonStyled } from '../../Buttons/Button.styles';
import PortalPassword from '../Portals/PortalConfirmPassword';
import PortalMessage from '../Portals/PortalMessage';
import PortalSpinner from '../Portals/PortalSpinner';

const ButtonDeleteAccount = () => {
  const { user } = useContext(UserAuthContext);
  const [password, setPassword] = useState('');

  const [isModalPasswordOpen, setIsModalPasswordOpen] = useState(false);

  const [modalMessageActionFinished, setModalMessageActionFinished] = useState({
    isOpen: false,
    message: undefined,
  });

  const [isModalSpinnerOpen, setIsModalSpinnerOpen] = useState(false);

  const send = () => {
    setIsModalPasswordOpen(false);
    setIsModalSpinnerOpen(true);
    handleDeleteCollectionsAndSubcollection();
    handleDeleteUser(user.uid, password);
    setPassword('');
    setIsModalSpinnerOpen(false);
  };

  return (
    <>
      <ButtonStyled
        color="red"
        onClick={() => {
          setIsModalPasswordOpen(true);
        }}
      >
        Delete account
      </ButtonStyled>
      <PortalPassword
        label="Password:"
        isModalOpen={isModalPasswordOpen}
        closeModal={() => setIsModalPasswordOpen(false)}
        password={password}
        setPassword={setPassword}
        triggerFunction={send}
      />
      <PortalMessage
        isModalOpen={modalMessageActionFinished.isOpen}
        message={modalMessageActionFinished.message}
        closeModal={() =>
          setModalMessageActionFinished((prev) => ({ ...prev, isOpen: false }))
        }
      />
      <PortalSpinner isModalOpen={isModalSpinnerOpen} />
    </>
  );
};
export default ButtonDeleteAccount;
