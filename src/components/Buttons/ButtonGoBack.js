import ArrowLeftIcon from '../Icons/ArrowLeftIcon';
import { ButtonIconStyled } from './ButtonIcon.styles';

const ButtonGoBack = ({ className, ...props }) => {
  return (
    <div className={className}>
      <ButtonIconStyled>
        <ArrowLeftIcon />
      </ButtonIconStyled>
    </div>
  );
};

export default ButtonGoBack;
