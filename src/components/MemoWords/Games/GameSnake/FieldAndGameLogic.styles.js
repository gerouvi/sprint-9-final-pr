import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;
export const FieldBorders = styled.div`
  position: relative;
  box-sizing: content-box;
  /* width: 90vw; */
  /* max-width: 500px; */
  width: 340px;
  /* height: 90vw; */
  /* max-height: 500px; */
  height: 340px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid black;
`;

export const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: white;
  background-color: black;
  border-radius: 50%;
`;

export const WrapperArrows = styled.div`
  position: relative;
  width: ${({ isMobile }) => (isMobile ? '175px' : '0px')};
  height: ${({ isMobile }) => (isMobile ? '175px' : '0px')};
  margin-left: auto;
  margin-right: auto;
`;

export const ArrowUp = styled.div`
  position: absolute;
  border-bottom: ${({ isMobile }) => (isMobile ? '45px' : '0px')} solid black;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: none;
  left: 50%;
  transform: translateX(-50%);
  user-select: ${({ isMobile }) => (isMobile ? 'initial' : 'none')};
`;
export const ArrowDown = styled.div`
  position: absolute;
  border-bottom: none;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: ${({ isMobile }) => (isMobile ? '45px' : '0px')} solid black;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  user-select: ${({ isMobile }) => (isMobile ? 'initial' : 'none')};
`;
export const ArrowLeft = styled.div`
  position: absolute;
  border-bottom: 30px solid transparent;
  border-left: none;
  border-right: ${({ isMobile }) => (isMobile ? '45px' : '0px')} solid black;
  border-top: 30px solid transparent;
  top: 50%;
  transform: translateY(-50%);
  user-select: ${({ isMobile }) => (isMobile ? 'initial' : 'none')};
`;
export const ArrowRight = styled.div`
  position: absolute;
  border-bottom: 30px solid transparent;
  border-left: ${({ isMobile }) => (isMobile ? '45px' : '0px')} solid black;
  border-right: none;
  border-top: 30px solid transparent;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  user-select: ${({ isMobile }) => (isMobile ? 'initial' : 'none')};
`;
