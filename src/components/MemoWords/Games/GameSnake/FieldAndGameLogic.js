import { useEffect, useRef, useState } from 'react';
import { ButtonStyled } from '../../../Buttons/Button.styles';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  FieldBorders,
  Result,
  Wrapper,
  WrapperArrows,
} from './FieldAndGameLogic.styles';
import Fruit from './Fruit';
import Snake from './Snake';

const getInitialState = () => ({
  key: 'ArrowRight',
  lastKey: undefined,
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
  accerts: 0,
});

const FieldAndGameLogic = ({ isMobile }) => {
  const states = useRef(getInitialState());
  const frame = useRef(0);
  const [refresh, setRefresh] = useState(0);
  const [start, setStart] = useState(false);

  const gameLoop = () => {
    coordinatesFunction(frame, states);
    const isOutside = isSnakeOutside(states);
    const hasEatenTail = isSnakeEatingItsTail(states);

    const idAnimationFrame = window.requestAnimationFrame(gameLoop);

    if (isOutside || hasEatenTail) {
      cancelAnimationFrame(idAnimationFrame);
    } else {
      setRefresh((prev) => prev + 1);
    }

    const hasEatedFruit = hasTheSnakeEatedTheFruit(states);

    if (hasEatedFruit) {
      states.current.accerts += 1;
      generateFruitRandom(states);
      increaseSnakeDots(states);
    }
  };
  useEffect(() => {
    if (start) {
      window.addEventListener('keydown', (e) => {
        if (
          (e.key === 'ArrowLeft' && states.current.key !== 'ArrowRight') ||
          (e.key === 'ArrowRight' && states.current.key !== 'ArrowLeft') ||
          (e.key === 'ArrowUp' && states.current.key !== 'ArrowDown') ||
          (e.key === 'ArrowDown' && states.current.key !== 'ArrowUp')
        ) {
          states.current.lastKey = states.current.key;
          states.current.key = e.key;
        }
      });
      const btnUp = document.getElementById('btnUp');
      const btnDown = document.getElementById('btnDown');
      const btnLeft = document.getElementById('btnLeft');
      const btnRight = document.getElementById('btnRight');
      btnUp.addEventListener('click', () => {
        states.current.lastKey = states.current.key;
        states.current.key = 'ArrowUp';
      });
      btnDown.addEventListener('click', () => {
        states.current.lastKey = states.current.key;
        states.current.key = 'ArrowDown';
      });
      btnLeft.addEventListener('click', () => {
        states.current.lastKey = states.current.key;
        states.current.key = 'ArrowLeft';
      });
      btnRight.addEventListener('click', () => {
        states.current.lastKey = states.current.key;
        states.current.key = 'ArrowRight';
      });
      window.requestAnimationFrame(gameLoop);
    }
  }, [start]);
  return (
    <>
      <Wrapper>
        {!start && (
          <ButtonStyled color="green" onClick={() => setStart(true)}>
            Start
          </ButtonStyled>
        )}
        <Result>{states.current.accerts}</Result>

        <FieldBorders>
          <Snake snakeCoords={states.current.snakeCoords} />
          <Fruit fruitCoords={states.current.fruitCoords} />
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

const hasTheSnakeEatedTheFruit = (states) => {
  const head =
    states.current.snakeCoords[states.current.snakeCoords.length - 1];

  const hasEated =
    head[0] === states.current.fruitCoords[0] &&
    head[1] === states.current.fruitCoords[1];

  return hasEated;
};

const generateFruitRandom = (states) => {
  let condition = true;
  let posX;
  let posY;
  do {
    posX = Math.floor(Math.random() * 20) * 5;
    posY = Math.floor(Math.random() * 20) * 5;

    condition = states.current.snakeCoords.some(
      (coord) => coord[0] === posX && coord[1] === posY
    );
  } while (condition);

  states.current.fruitCoords = [posX, posY];
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
