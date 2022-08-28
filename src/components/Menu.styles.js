import styled from 'styled-components';
import Menu from './Menu';

export const MenuStyled = styled(Menu)`
  background-color: lightblue;
  margin-top: 0;
  padding-top: 50px;
  padding-left: 80px;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 820px) {
    border-radius: 23px;
  }

  h1 {
    color: red;
  }
`;
