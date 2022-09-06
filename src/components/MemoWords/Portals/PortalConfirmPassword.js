import { ButtonStyled } from '../../Buttons/Button.styles';
import { InputStyled } from '../../Form/Input.styles';
import Portal from './Portal';
import { Wrapper } from './PortalConfirmPassword.styles';

const PortalPassword = ({
  label,
  isModalOpen,
  closeModal,
  password,
  setPassword,
  triggerFunction,
}) => {
  return (
    <>
      <Portal isModalOpen={isModalOpen}>
        <Wrapper>
          <div>
            <p>{label}</p>
            <InputStyled
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <div>
            <ButtonStyled onClick={triggerFunction}>Send</ButtonStyled>

            <ButtonStyled
              color="red"
              type="button"
              onClick={() => {
                closeModal();
                setPassword('');
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

export default PortalPassword;
