import logoMemoWords from '../../assets/images/memoWordsWhite.png';
import { LogoMemoWords } from './LockMobile.styles';

const LockMobile = ({ className, isLocked, showMobileDevice, children }) => {
  if (isLocked && showMobileDevice)
    return (
      <>
        <div className={className}>
          <LogoMemoWords logoMemoWords={logoMemoWords} />
        </div>
      </>
    );
  return children;
};

export default LockMobile;
