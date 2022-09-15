import styled from 'styled-components';

export const TextDescription = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  & p {
    font-size: 24px;
    margin-bottom: 50px;
  }

  & p span {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
  }
`;

export const OrderList = styled.ol`
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 30px;
  border: 1px solid black;
  padding: 30px;
  border-radius: 30px;
  box-shadow: 3px 3px 13px black;

  & li {
    list-style: inside decimal;
    padding: 17px;

    & span {
      text-decoration: underline;
    }
  }

  & li:last-of-type span {
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
  }
`;
