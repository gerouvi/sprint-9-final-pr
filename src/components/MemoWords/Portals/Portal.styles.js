import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: ${() => window.scrollY + 300}px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  padding: 30px;
  background-color: white;
  border-radius: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
