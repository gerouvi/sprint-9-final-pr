import styled from 'styled-components';

export const Fruit = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: ${({ fruitCoords }) => fruitCoords[0]}%;
  top: ${({ fruitCoords }) => fruitCoords[1]}%;
  width: 5%;
  height: 5%;
  background-color: ${({ color }) => color};
  border: 1px solid white;
`;

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
  width: 175px;
  height: 175px;
  margin-left: auto;
  margin-right: auto;
  display: ${({ isMobile }) => (isMobile ? 'block' : 'none')};
`;

export const ArrowUp = styled.div`
  position: absolute;
  border-bottom: 50px solid black;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: none;
  left: 50%;
  transform: translateX(-50%);
`;
export const ArrowDown = styled.div`
  position: absolute;
  border-bottom: none;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: 50px solid black;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
`;
export const ArrowLeft = styled.div`
  position: absolute;
  border-bottom: 30px solid transparent;
  border-left: none;
  border-right: 50px solid black;
  border-top: 30px solid transparent;
  top: 50%;
  transform: translateY(-50%);
`;
export const ArrowRight = styled.div`
  position: absolute;
  border-bottom: 30px solid transparent;
  border-left: 50px solid black;
  border-right: none;
  border-top: 30px solid transparent;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const GameOver = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: red;
`;
