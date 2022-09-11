import styled from 'styled-components';

export const Subtitle = styled.h2`
  margin: 0;
`;

export const Question = styled.p`
  text-transform: capitalize;
`;
export const Form = styled.form`
  & p {
    margin: 0;
  }
`;

export const Result = styled.span`
  margin: 0;
  height: 10px;
  color: ${({ correct }) => (correct ? 'green' : 'red')};
`;
