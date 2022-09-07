import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  & p {
    text-align: center;
  }
  & div {
    display: flex;
    gap: 15px;
  }
`;
