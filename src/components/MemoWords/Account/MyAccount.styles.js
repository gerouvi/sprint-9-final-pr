import styled from 'styled-components';
import { THEME_STYLES } from '../../../styles/THEME_STYLES';

export const Wrapper = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const WrapperForms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media screen and (min-width: ${THEME_STYLES.TABLET_SIZE}px) {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
`;
