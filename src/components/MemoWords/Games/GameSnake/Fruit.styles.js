import styled from 'styled-components';

export const FruitDot = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 5%;
  height: 5%;
  background-color: ${({ color }) => console.log(color)};
  border: 1px solid white;
`;
