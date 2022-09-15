import { useEffect, useRef, useState } from 'react';
import { ButtonStyled } from '../../../Buttons/Button.styles';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  FieldBorders,
  Fruit,
  Result,
  Wrapper,
  WrapperArrows,
} from './FieldAndGameLogic.styles';
import Snake from './Snake';

const getInitialState = () => ({
  key: 'ArrowRight',
  value: null,
  counter: 0,
  snakeCoords: [
    [0, 0],
    [5, 0],
    [10, 0],
    [15, 0],
    [20, 0],
    [25, 0],
    [30, 0],
  ],
  fruitCoords: [20, 20],
  fruitFakeCoords: [40, 40],
  accerts: 0,
  finishGame: false,
});

const FieldAndGameLogic = ({ isMobile, gameOptions, setNewWords }) => {
  const states = useRef(getInitialState());
  const frame = useRef(0);
  const [refresh, setRefresh] = useState(0);
  const [start, setStart] = useState(false);

  const { correctColorAnswer, wrongColorAnswer } = gameOptions;

  const gameLoop = () => {
    const idAnimationFrame = window.requestAnimationFrame(gameLoop);
    coordinatesFunction(frame, states);
    const isOutside = isSnakeOutside(states);
    const hasEatenTail = isSnakeEatingItsTail(states);
    const hasEatenFakeFruit = hasTheSnakeEatedTheFruit(
      states,
      states.current.fruitFakeCoords
    );

    if (isOutside || hasEatenTail || hasEatenFakeFruit) {
      states.current.finishGame = true;
      cancelAnimationFrame(idAnimationFrame);
    } else {
      setRefresh((prev) => prev + 1);
    }

    const hasEatedFruit = hasTheSnakeEatedTheFruit(
      states,
      states.current.fruitCoords
    );

    if (hasEatedFruit) {
      states.current.accerts += 1;
      generateRandomFruits(states);
      increaseSnakeDots(states);
      setNewWords((prev) => !prev);
    }
  };

  const functionAddEventListener = (e) => {
    if (
      (e.key === 'ArrowLeft' && states.current.key !== 'ArrowRight') ||
      (e.key === 'ArrowRight' && states.current.key !== 'ArrowLeft') ||
      (e.key === 'ArrowUp' && states.current.key !== 'ArrowDown') ||
      (e.key === 'ArrowDown' && states.current.key !== 'ArrowUp')
    ) {
      states.current.key = e.key;
    }
  };
  useEffect(() => {
    if (start) {
      window.addEventListener('keydown', functionAddEventListener);

      const btnUp = document.getElementById('btnUp');
      const btnDown = document.getElementById('btnDown');
      const btnLeft = document.getElementById('btnLeft');
      const btnRight = document.getElementById('btnRight');

      btnUp.addEventListener('click', () => {
        if (
          states.current.key !== 'ArrowDown' ||
          states.current.key !== 'ArrowUp'
        )
          states.current.key = 'ArrowUp';
      });
      btnDown.addEventListener('click', () => {
        if (
          states.current.key !== 'ArrowUp' ||
          states.current.key !== 'ArrowDown'
        )
          states.current.key = 'ArrowDown';
      });
      btnLeft.addEventListener('click', () => {
        if (
          states.current.key !== 'ArrowLeft' ||
          states.current.key !== 'ArrowRight'
        )
          states.current.key = 'ArrowLeft';
      });
      btnRight.addEventListener('click', () => {
        if (
          states.current.key !== 'ArrowLeft' ||
          states.current.key !== 'ArrowRight'
        )
          states.current.key = 'ArrowRight';
      });
      window.requestAnimationFrame(gameLoop);
    }

    return () =>
      window.removeEventListener('keydown', functionAddEventListener);
  }, [start]);
  return (
    <>
      <Wrapper>
        {!start ? (
          <ButtonStyled color="green" onClick={() => setStart(true)}>
            Start
          </ButtonStyled>
        ) : (
          <ButtonStyled
            color="green"
            onClick={() => {
              if (states.current.finishGame) {
                states.current = getInitialState();
                setNewWords();
                setStart(false);
              }
            }}
          >
            New Game
          </ButtonStyled>
        )}

        <Result>{states.current.accerts}</Result>

        <FieldBorders>
          <Snake snakeCoords={states.current.snakeCoords} />
          <Fruit
            fruitCoords={states.current.fruitCoords}
            color={correctColorAnswer}
          />
          <Fruit
            fruitCoords={states.current.fruitFakeCoords}
            color={wrongColorAnswer}
          />
        </FieldBorders>

        <WrapperArrows isMobile={isMobile}>
          <ArrowUp id="btnUp" isMobile={isMobile} />
          <ArrowLeft id="btnLeft" isMobile={isMobile} />
          <ArrowRight id="btnRight" isMobile={isMobile} />
          <ArrowDown id="btnDown" isMobile={isMobile} />
        </WrapperArrows>
      </Wrapper>
    </>
  );
};

const coordinatesFunction = (frame, states) => {
  if (frame.current === 7) {
    frame.current = 0;
    let newCoords = [...states.current.snakeCoords];

    //In case you press
    const condition = states.current.key;
    if (!states.current.finishGame)
      switch (condition) {
        case 'ArrowUp': {
          states.current.lastKey = undefined;
          newCoords.push([
            newCoords[newCoords.length - 1][0],
            newCoords[newCoords.length - 1][1] - 5,
          ]);
          newCoords.shift();

          break;
        }
        case 'ArrowDown': {
          states.current.lastKey = undefined;
          newCoords.push([
            newCoords[newCoords.length - 1][0],
            newCoords[newCoords.length - 1][1] + 5,
          ]);
          newCoords.shift();

          break;
        }
        case 'ArrowLeft': {
          states.current.lastKey = undefined;
          newCoords.push([
            newCoords[newCoords.length - 1][0] - 5,
            newCoords[newCoords.length - 1][1],
          ]);
          newCoords.shift();

          break;
        }
        case 'ArrowRight': {
          states.current.lastKey = undefined;
          newCoords.push([
            newCoords[newCoords.length - 1][0] + 5,
            newCoords[newCoords.length - 1][1],
          ]);
          newCoords.shift();

          break;
        }
        default: {
          break;
        }
      }
    states.current.snakeCoords = newCoords;
  } else {
    frame.current += 1;
  }
};

const isSnakeOutside = (states) => {
  const isOutside =
    states.current.snakeCoords[states.current.snakeCoords.length - 1][1] < 0 ||
    states.current.snakeCoords[states.current.snakeCoords.length - 1][0] < 0 ||
    states.current.snakeCoords[states.current.snakeCoords.length - 1][1] > 96 ||
    states.current.snakeCoords[states.current.snakeCoords.length - 1][0] > 96;

  if (isOutside) return true;
  return false;
};

const isSnakeEatingItsTail = (states) => {
  const head =
    states.current.snakeCoords[states.current.snakeCoords.length - 1];

  const body = [...states.current.snakeCoords];
  body.pop();

  const isEating = body.some((dot) => {
    return dot[0] === head[0] && dot[1] === head[1];
  });

  if (isEating) return true;
  return false;
};

const hasTheSnakeEatedTheFruit = (states, coords) => {
  const head =
    states.current.snakeCoords[states.current.snakeCoords.length - 1];

  const hasEated = head[0] === coords[0] && head[1] === coords[1];

  return hasEated;
};

const generateRandomFruits = (states) => {
  let conditionFr1 = undefined;
  let conditionFr2 = undefined;
  let condition3 = undefined;
  let posX1;
  let posY1;
  let posX2;
  let posY2;
  do {
    posX1 = Math.floor(Math.random() * 20) * 5;
    posY1 = Math.floor(Math.random() * 20) * 5;
    posX2 = Math.floor(Math.random() * 20) * 5;
    posY2 = Math.floor(Math.random() * 20) * 5;

    conditionFr1 = states.current.snakeCoords.some(
      (coord) => coord[0] === posX1 && coord[1] === posY1
    );

    conditionFr2 = states.current.snakeCoords.some(
      (coord) => coord[0] === posX2 && coord[1] === posY2
    );

    condition3 = posX1 === posX2 && posY1 === posY2;
  } while (conditionFr1 || conditionFr2 || condition3);

  states.current.fruitCoords = [posX1, posY1];
  states.current.fruitFakeCoords = [posX2, posY2];
};

const increaseSnakeDots = (states) => {
  let snakeCopy = [...states.current.snakeCoords];
  switch (states.current.key) {
    case 'ArrowUp': {
      snakeCopy.unshift([
        [states.current.snakeCoords][0] + 5,
        [states.current.snakeCoords][1],
      ]);
      break;
    }
    case 'ArrowDown': {
      snakeCopy.unshift([
        [states.current.snakeCoords][0] - 5,
        [states.current.snakeCoords][1],
      ]);
      break;
    }
    case 'ArrowLeft': {
      snakeCopy.unshift([
        [states.current.snakeCoords][0],
        [states.current.snakeCoords][1] + 5,
      ]);
      break;
    }
    case 'ArrowRight': {
      snakeCopy.unshift([
        [states.current.snakeCoords][0],
        [states.current.snakeCoords][1] - 5,
      ]);
      break;
    }
    default: {
      break;
    }
  }
  states.current.snakeCoords = snakeCopy;
};

export default FieldAndGameLogic;
