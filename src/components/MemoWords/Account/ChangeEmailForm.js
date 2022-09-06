import { useState } from 'react';
import { handleUpdateEmail } from '../../../lib/firebase/firebase-handlers-auth';

import { ButtonStyled } from '../../Buttons/Button.styles';
import { InputStyled } from '../../Form/Input.styles';
import PortalConfirmPassword from '../Portals/PortalConfirmPassword';
import PortalMessage from '../Portals/PortalMessage';
import { Wrapper } from './ChangeEmailForm.styles';

const ChangeEmailForm = () => {
  const [newData, setNewData] = useState('');
  const [password, setPassword] = useState('');

  const [isModalPasswordOpen, setIsModalPasswordOpen] = useState(false);

  const [modalMessageActionFinished, setModalMessageActionFinished] = useState({
    isOpen: false,
    message: undefined,
  });

  const triggerFunction = () => {
    setIsModalPasswordOpen(false);
    handleUpdateEmail(newData, password, setModalMessageActionFinished);

    setPassword('');
    setNewData('');
  };

  return (
    <Wrapper>
      <label>Change email:</label>
      <InputStyled
        type="email"
        value={newData}
        onChange={(e) => setNewData(e.target.value)}
      />
      <ButtonStyled
        color="green"
        type="button"
        onClick={() => setIsModalPasswordOpen(true)}
      >
        Change
      </ButtonStyled>
      <PortalConfirmPassword
        label="Former Password:"
        isModalOpen={isModalPasswordOpen}
        closeModal={() => setIsModalPasswordOpen(false)}
        password={password}
        setPassword={setPassword}
        triggerFunction={triggerFunction}
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

export default ChangeEmailForm;
