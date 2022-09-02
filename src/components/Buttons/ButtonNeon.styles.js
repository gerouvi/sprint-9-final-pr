import styled from 'styled-components';
import ButtonNeon from './ButtonNeon';

export const ButtonNeonStyled = styled(ButtonNeon)`
  font-size: 1.5rem;
  background-color: transparent;

  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: red;
  border: red 0.125em solid;
  padding: 0.25em 1em;
  border-radius: 0.25em;

  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;

  box-shadow: inset 0 0 0.5em 0 red, 0 0 0.5em 0 red;

  position: relative;

  &::before {
    pointer-events: none;
    content: '';
    position: absolute;
    background: red;
    top: 120%;
    left: 0;
    width: 100%;
    height: 100%;

    transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
    filter: blur(1em);
    opacity: 0.7;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 2em 0.5em red;
    opacity: 0;
    background-color: red;
    z-index: -1;
    transition: opacity 100ms linear;
  }

  &:hover::after {
    opacity: 1;
  }
  &:hover,
  &:focus {
    color: var(--clr-bg);
    text-shadow: none;
  }
  &:hover::before {
    opacity: 1;
  }
`;
