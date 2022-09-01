import styled from 'styled-components';
import LockMobile from './LockMobile';

export const LockMobileStyled = styled(LockMobile)`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.COLORS.BG_SCREEN_OFF};
  border-radius: ${(props) => props.theme.BORDER_RADIUS_SCREEN_MOBILE};
  display: flex;
  justify-content: center;
  align-items: center;
`;
