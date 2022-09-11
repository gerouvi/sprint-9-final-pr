import { SpinnerStyled } from '../../Extras/Spinner.styles';
import Portal from './Portal';

const PortalSpinner = ({ isModalOpen }) => {
  return (
    <Portal isModalOpen={isModalOpen}>
      <SpinnerStyled />
    </Portal>
  );
};

export default PortalSpinner;
