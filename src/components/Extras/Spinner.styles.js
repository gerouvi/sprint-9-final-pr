import styled from 'styled-components';
import Spinner from './Spinner';

export const SpinnerStyled = styled(Spinner)`
  width: 100px;
  height: 100px;
  border: 10px solid rgb(2, 182, 222);
  border-radius: 50%;
  border-left: 10px solid transparent;

  animation: spinner 1s linear infinite;

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
