import { useEffect, useState } from 'react';
import { useRef } from 'react';
import getPairOfWordsGames from '../../../../lib/functions/getPairOfWordsGames';
import { THEME_STYLES } from '../../../../styles/THEME_STYLES';
import { ButtonStyled } from '../../../Buttons/Button.styles';
import FieldAndGameLogic from './FieldAndGameLogic';
import Field from './FieldAndGameLogic';
import Fruit from './Fruit';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ButtonsWrapper,
  Description,
  DotAnswer,
  DotCorrectAnswer,
  Subtitle,
  Text,
  Wrapper,
  WrapperArrows,
  WrapperButtons,
  WrapperQuestionAnswer,
  WrapperTop,
} from './GameSnake.styles';
import Snake from './Snake';

const GameSnake = ({ words, setGamesOptions }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [finishGame, setFinishGame] = useState(false);

  const [randomLeftRightCorrectAnswer, setRandomLeftRightCorrectAnswer] =
    useState(Math.floor(Math.random() * 2));

  const [gameOptions, setGameOptions] = useState({});
  const { answer, answerFake, question, correctColorAnswer, wrongColorAnswer } =
    gameOptions;

  useEffect(() => {
    const newGameOpt = getPairOfWordsGames(words);
    setGameOptions(newGameOpt);
    setRandomLeftRightCorrectAnswer(Math.floor(Math.random() * 2));
  }, []);

  return (
    <>
      <Subtitle>Snake</Subtitle>
      <Wrapper>
        <WrapperButtons isMobile={isMobile}>
          <ButtonStyled
            onClick={() =>
              setGamesOptions((prev) => ({ ...prev, play: false }))
            }
            color="red"
          >
            Stop to play!
          </ButtonStyled>

          {finishGame && <ButtonStyled>Play again</ButtonStyled>}
          <ButtonStyled onClick={() => setIsMobile((prev) => !prev)}>
            {isMobile ? ' Is Desktop?' : ' Is Mobile?'}
          </ButtonStyled>
          <Description>If it's mobile click on the button above</Description>
          <Description>If is desktop use the arrows</Description>
          {window.screen.width <= THEME_STYLES.MOBILE_SIZE && (
            <WrapperQuestionAnswer>
              <Text>{question}?</Text>
              <div>
                <div>
                  <DotAnswer
                    color={
                      randomLeftRightCorrectAnswer
                        ? correctColorAnswer
                        : wrongColorAnswer
                    }
                  />
                  <Text>
                    {randomLeftRightCorrectAnswer ? answer : answerFake}
                  </Text>
                </div>
                <div>
                  <DotAnswer
                    color={
                      randomLeftRightCorrectAnswer
                        ? wrongColorAnswer
                        : correctColorAnswer
                    }
                  />
                  <Text>
                    {randomLeftRightCorrectAnswer ? answerFake : answer}
                  </Text>
                </div>
              </div>
            </WrapperQuestionAnswer>
          )}
        </WrapperButtons>

        <FieldAndGameLogic isMobile={isMobile} />
        {window.screen.width > THEME_STYLES.MOBILE_SIZE && (
          <WrapperQuestionAnswer isMobile={isMobile}>
            <Text>{question}?</Text>
            <div>
              <div>
                <DotAnswer
                  color={
                    randomLeftRightCorrectAnswer
                      ? correctColorAnswer
                      : wrongColorAnswer
                  }
                />
                <Text>
                  {randomLeftRightCorrectAnswer ? answer : answerFake}
                </Text>
              </div>
              <div>
                <DotAnswer
                  color={
                    randomLeftRightCorrectAnswer
                      ? wrongColorAnswer
                      : correctColorAnswer
                  }
                />
                <Text>
                  {randomLeftRightCorrectAnswer ? answerFake : answer}
                </Text>
              </div>
            </div>
          </WrapperQuestionAnswer>
        )}
      </Wrapper>
    </>
  );

  // const states = useRef(getInitialState());
  // const frame = useRef(0);
  // const [refresh, setRefresh] = useState(0);
  // const [play, setPlay] = useState(false);

  // const gameLoop = () => {
  //   coordinatesFunction(frame, states);
  //   const isOutside = isSnakeOutside(states);
  //   const hasEatenTail = isSnakeEatingItsTail(states);

  //   const idAnimationFrame = window.requestAnimationFrame(gameLoop);

  //   if (isOutside || hasEatenTail) {
  //     cancelAnimationFrame(idAnimationFrame);
  //   } else {
  //     setRefresh((prev) => prev + 1);
  //   }

  //   const hasEatedFruit = hasTheSnakeEatedTheFruit(states);

  //   if (hasEatedFruit) {
  //     states.current.accerts += 1;
  //     generateFruitRandom(states);
  //     increaseSnakeDots(states);
  //   }
  // };
  // useEffect(() => {
  //   if (play) {
  //     window.addEventListener('keydown', (e) => {
  //       if (
  //         (e.key === 'ArrowLeft' && states.current.key !== 'ArrowRight') ||
  //         (e.key === 'ArrowRight' && states.current.key !== 'ArrowLeft') ||
  //         (e.key === 'ArrowUp' && states.current.key !== 'ArrowDown') ||
  //         (e.key === 'ArrowDown' && states.current.key !== 'ArrowUp')
  //       ) {
  //         states.current.lastKey = states.current.key;
  //         states.current.key = e.key;
  //       }
  //     });
  //     const btnUp = document.getElementById('btnUp');
  //     const btnDown = document.getElementById('btnDown');
  //     const btnLeft = document.getElementById('btnLeft');
  //     const btnRight = document.getElementById('btnRight');
  //     btnUp.addEventListener('click', () => {
  //       states.current.lastKey = states.current.key;
  //       states.current.key = 'ArrowUp';
  //     });
  //     btnDown.addEventListener('click', () => {
  //       states.current.lastKey = states.current.key;
  //       states.current.key = 'ArrowDown';
  //     });
  //     btnLeft.addEventListener('click', () => {
  //       states.current.lastKey = states.current.key;
  //       states.current.key = 'ArrowLeft';
  //     });
  //     btnRight.addEventListener('click', () => {
  //       states.current.lastKey = states.current.key;
  //       states.current.key = 'ArrowRight';
  //     });
  //     window.requestAnimationFrame(gameLoop);
  //   }
  // }, [play]);

  // return (
  //   <>
  //     <Subtitle>Snake</Subtitle>
  //     <ButtonsWrapper>
  //       <ButtonStyled
  //         onClick={() => setGamesOptions((prev) => ({ ...prev, play: false }))}
  //         color="red"
  //       >
  //         Stop to play!
  //       </ButtonStyled>
  //       {!play && <button onClick={() => setPlay(true)}>Play</button>}
  //     </ButtonsWrapper>
  //     <div>{states.current.accerts}</div>
  //     <Field>
  //       <Snake snakeCoords={states.current.snakeCoords} />
  //       <Fruit fruitCoords={states.current.fruitCoords} />
  //     </Field>
  //     <WrapperArrows>
  //       <ArrowUp id="btnUp" />
  //       <ArrowLeft id="btnLeft" />
  //       <ArrowRight id="btnRight" />
  //       <ArrowDown id="btnDown" />
  //     </WrapperArrows>
  //   </>
  // );
};
// const coordinatesFunction = (frame, states) => {
//   if (frame.current === 5) {
//     frame.current = 0;
//     let newCoords = [...states.current.snakeCoords];

//     //In case you press
//     const condition = states.current.lastKey || states.current.key;

//     switch (condition) {
//       case 'ArrowUp': {
//         states.current.lastKey = undefined;
//         newCoords.push([
//           newCoords[newCoords.length - 1][0],
//           newCoords[newCoords.length - 1][1] - 5,
//         ]);
//         newCoords.shift();

//         break;
//       }
//       case 'ArrowDown': {
//         states.current.lastKey = undefined;
//         newCoords.push([
//           newCoords[newCoords.length - 1][0],
//           newCoords[newCoords.length - 1][1] + 5,
//         ]);
//         newCoords.shift();

//         break;
//       }
//       case 'ArrowLeft': {
//         states.current.lastKey = undefined;
//         newCoords.push([
//           newCoords[newCoords.length - 1][0] - 5,
//           newCoords[newCoords.length - 1][1],
//         ]);
//         newCoords.shift();

//         break;
//       }
//       case 'ArrowRight': {
//         states.current.lastKey = undefined;
//         newCoords.push([
//           newCoords[newCoords.length - 1][0] + 5,
//           newCoords[newCoords.length - 1][1],
//         ]);
//         newCoords.shift();

//         break;
//       }
//       default: {
//         break;
//       }
//     }
//     states.current.snakeCoords = newCoords;
//   } else {
//     frame.current += 1;
//   }
// };

// const isSnakeOutside = (states) => {
//   const isOutside =
//     states.current.snakeCoords[states.current.snakeCoords.length - 1][1] < 0 ||
//     states.current.snakeCoords[states.current.snakeCoords.length - 1][0] < 0 ||
//     states.current.snakeCoords[states.current.snakeCoords.length - 1][1] > 96 ||
//     states.current.snakeCoords[states.current.snakeCoords.length - 1][0] > 96;

//   if (isOutside) return true;
//   return false;
// };

// const isSnakeEatingItsTail = (states) => {
//   const head =
//     states.current.snakeCoords[states.current.snakeCoords.length - 1];

//   const body = [...states.current.snakeCoords];
//   body.pop();

//   const isEating = body.some((dot) => {
//     return dot[0] === head[0] && dot[1] === head[1];
//   });

//   if (isEating) return true;
//   return false;
// };

// const hasTheSnakeEatedTheFruit = (states) => {
//   const head =
//     states.current.snakeCoords[states.current.snakeCoords.length - 1];

//   const hasEated =
//     head[0] === states.current.fruitCoords[0] &&
//     head[1] === states.current.fruitCoords[1];

//   return hasEated;
// };

// const generateFruitRandom = (states) => {
//   let condition = true;
//   let posX;
//   let posY;
//   do {
//     posX = Math.floor(Math.random() * 20) * 5;
//     posY = Math.floor(Math.random() * 20) * 5;

//     condition = states.current.snakeCoords.some(
//       (coord) => coord[0] === posX && coord[1] === posY
//     );
//   } while (condition);

//   states.current.fruitCoords = [posX, posY];
// };

// const increaseSnakeDots = (states) => {
//   let snakeCopy = [...states.current.snakeCoords];
//   switch (states.current.key) {
//     case 'ArrowUp': {
//       snakeCopy.unshift([
//         [states.current.snakeCoords][0] + 5,
//         [states.current.snakeCoords][1],
//       ]);
//       break;
//     }
//     case 'ArrowDown': {
//       snakeCopy.unshift([
//         [states.current.snakeCoords][0] - 5,
//         [states.current.snakeCoords][1],
//       ]);
//       break;
//     }
//     case 'ArrowLeft': {
//       snakeCopy.unshift([
//         [states.current.snakeCoords][0],
//         [states.current.snakeCoords][1] + 5,
//       ]);
//       break;
//     }
//     case 'ArrowRight': {
//       snakeCopy.unshift([
//         [states.current.snakeCoords][0],
//         [states.current.snakeCoords][1] - 5,
//       ]);
//       break;
//     }
//     default: {
//       break;
//     }
//   }
//   states.current.snakeCoords = snakeCopy;
// };

export default GameSnake;
