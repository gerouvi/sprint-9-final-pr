import styled from 'styled-components';
import { THEME_STYLES } from '../../../styles/THEME_STYLES';

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  gap: 30px;

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
    gap: 30px;
  }
`;
