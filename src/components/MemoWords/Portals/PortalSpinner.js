import Portal from './Portal';
import { Spinner } from './PortasSpinner.styles';

const PortalSpinner = ({ isModalOpen }) => {
  console.log('here');
  return (
    <Portal isModalOpen={isModalOpen}>
      <Spinner />
    </Portal>
  );
};

export default PortalSpinner;
