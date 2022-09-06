import styled from 'styled-components';
import { THEME_STYLES } from '../../styles/THEME_STYLES';

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 20px;

  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-width: ${THEME_STYLES.MOBILE_SIZE}px) {
    background-position-y: -300px;
  }

  @media screen and (min-width: ${THEME_STYLES.TABLET_SIZE}px) {
    background-position-y: -1000px;
  }

  @media screen and (min-width: ${THEME_STYLES.BIG_SCREENS}px) {
    background-position-y: -3000px;
  }
`;
