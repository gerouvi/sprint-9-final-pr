import styled from 'styled-components';
import { THEME_STYLES } from '../../../styles/THEME_STYLES';

export const Wrapper = styled.div`
  text-align: center;

  h1 {
    padding-top: 100px;
    margin-top: 0;
  }

  @media screen and (min-width: ${THEME_STYLES.MOBILE_SIZE}px) {
    h1 {
      padding-top: 0px;
    }
  }

  & form {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;

    & div {
      display: flex;
      flex-direction: column;
    }
  }
`;
