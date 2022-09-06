import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  & div p {
    text-align: center;
  }
`;
