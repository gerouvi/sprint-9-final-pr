import styled from 'styled-components';
import { THEME_STYLES } from '../../../../styles/THEME_STYLES';

export const Subtitle = styled.h2`
  margin: 0;
  margin-top: -45px;
  @media screen and (min-width: ${THEME_STYLES.MOBILE_SIZE}px) {
    padding-top: 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: ${THEME_STYLES.MOBILE_SIZE}px) {
    display: grid;
    grid-template-columns: 2fr 3fr 2fr;
  }
`;

export const Description = styled.p`
  margin: 0;
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

export const WrapperQuestionAnswer = styled.div`
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
`;

export const Text = styled.p`
  text-transform: capitalize;
`;

export const DotAnswer = styled.span`
  display: inline-block;
  width: 25px;
  height: 25px;
  background-color: ${({ color }) => (color === 'blue' ? 'blue' : 'green')};
  border: 1px solid white;
`;
