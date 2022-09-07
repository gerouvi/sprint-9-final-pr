import { ButtonStyled } from '../../Buttons/Button.styles';
import Portal from './Portal';
import { Wrapper } from './PortalMessage.styles';

const PortalMessage = ({ message, isModalOpen, closeModal }) => {
  return (
    <Portal isModalOpen={isModalOpen}>
      <Wrapper>
        <p>{message}</p>

        <ButtonStyled onClick={() => closeModal()}>Ok</ButtonStyled>
      </Wrapper>
    </Portal>
  );
};

export default PortalMessage;
