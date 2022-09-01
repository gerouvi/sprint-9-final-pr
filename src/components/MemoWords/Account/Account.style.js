import styled from 'styled-components';
import { THEME_STYLES } from '../../../styles/THEME_STYLES';

export const WrapperButtons = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;

  padding-top: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 20px;

  @media screen and (min-width: ${THEME_STYLES.MOBILE_SIZE}px) {
    font-size: 1em;
    padding-top: 0;
  }

  & li {
    list-style: none;
  }
`;

export const ErroMessage = styled.p`
  text-align: center;
  color: red;
`;
