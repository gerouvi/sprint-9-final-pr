import { ButtonStyled } from '../../../Buttons/Button.styles';

const GameSnake = ({ words, setGamesOptions }) => {
  console.log('game snake');
  return (
    <>
      <h2>Snake</h2>
      <ButtonStyled
        onClick={() => setGamesOptions((prev) => ({ ...prev, play: false }))}
        color="red"
      >
        Stop!
      </ButtonStyled>
    </>
  );
};

export default GameSnake;
