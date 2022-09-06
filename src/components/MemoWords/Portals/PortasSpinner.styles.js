import styled from 'styled-components';

export const Spinner = styled.div`
  width: 100px;
  height: 100px;
  border: 5px solid blue;
  border-radius: 50%;
  border-left: 5px solid transparent;

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
