import styled from 'styled-components';

export const WrapperWords = styled.div`
  padding: 2em;
  margin-bottom: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  & p {
    margin: 0;
  }
`;

export const Word = styled.p`
  text-transform: capitalize;
`;

export const SelectedText = styled.p`
  color: green;
`;

export const NoSelectedText = styled.p`
  color: red;
`;
