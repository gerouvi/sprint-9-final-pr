import { createPortal } from 'react-dom';
import { ModalWrapper, Overlay } from './Portal.styles';

const Portal = ({ isModalOpen, children }) => {
  if (!isModalOpen) return null;
  return createPortal(
    <div>
      <Overlay />
      <ModalWrapper>{children}</ModalWrapper>
    </div>,
    document.getElementById('modal')
  );
};

export default Portal;
