import Portal from './Portal';
import { Spinner } from './PortasSpinner.styles';

const PortalSpinner = ({ isModalOpen }) => {
  return (
    <Portal isModalOpen={isModalOpen}>
      <Spinner />
    </Portal>
  );
};

export default PortalSpinner;
