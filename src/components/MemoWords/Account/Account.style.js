import styled from 'styled-components';
import { THEME_STYLES } from '../../../styles/THEME_STYLES';

export const WrapperButtons = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;

  padding-top: 80px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  gap: 20px;

  @media screen and (min-width: ${THEME_STYLES.MOBILE_SIZE}px) {
    flex-direction: row;
    font-size: 1em;
    padding-top: 0;
  }

  & li {
    list-style: none;
  }
`;

export const ErrorMessage = styled.p`
  text-align: center;
  color: red;
`;

export const WrapperVerifiedMessage = styled.div`
  padding-top: 70px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;

  & div p button {
    border: none;
    background-color: transparent;
    color: blue;
    cursor: pointer;
  }
  & div p button:active {
    transform: scale(0.8);
  }
`;
