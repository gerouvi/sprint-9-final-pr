import { ButtonStyled } from '../../Buttons/Button.styles';
import { InputStyled } from '../../Form/Input.styles';
import Portal from './Portal';
import { Wrapper } from './PortalForgottenPassword.styles';

const PortalForgottenPassword = ({
  modalForgottenPasswordIsOpen,
  emailToSendForgottenPassword,
  setEmailToSendForgottenPassword,
  closeModal,
  triggerFunction,
}) => {
  return (
    <>
      <Portal isModalOpen={modalForgottenPasswordIsOpen}>
        <Wrapper>
          <p>Email:</p>
          <InputStyled
            value={emailToSendForgottenPassword}
            onChange={(e) => setEmailToSendForgottenPassword(e.target.value)}
          />
          <div>
            <ButtonStyled
              color="green"
              onClick={() => {
                triggerFunction();
              }}
            >
              Send
            </ButtonStyled>
            <ButtonStyled
              color="red"
              type="button"
              onClick={() => {
                closeModal();
                setEmailToSendForgottenPassword('');
              }}
            >
              Cancel
            </ButtonStyled>
          </div>
        </Wrapper>
      </Portal>
    </>
  );
};

export default PortalForgottenPassword;
