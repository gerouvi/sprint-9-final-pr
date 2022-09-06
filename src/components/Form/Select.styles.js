import styled from 'styled-components';
import { THEME_STYLES } from '../../styles/THEME_STYLES';
import Select from './Select';

export const SelectStyled = styled(Select)`
  width: 150px;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  appearance: none;
  /*Quitar la flecha x defecto*/
  box-shadow: ${THEME_STYLES.BOX_SHADOW.SM};
  border-radius: 0.25em;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
