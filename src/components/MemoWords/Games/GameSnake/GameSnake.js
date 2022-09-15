import { useEffect, useState } from 'react';
import getPairOfWordsGames from '../../../../lib/functions/getPairOfWordsGames';
import { THEME_STYLES } from '../../../../styles/THEME_STYLES';
import { ButtonStyled } from '../../../Buttons/Button.styles';
import FieldAndGameLogic from './FieldAndGameLogic';
import {
  Description,
  DotAnswer,
  Subtitle,
  Text,
  Wrapper,
  WrapperButtons,
  WrapperQuestionAnswer,
} from './GameSnake.styles';

const GameSnake = ({ words, setGamesOptions }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [newWords, setNewWords] = useState(false);

  const [randomLeftRightCorrectAnswer, setRandomLeftRightCorrectAnswer] =
    useState(Math.floor(Math.random() * 2));

  const [gameOptions, setGameOptions] = useState({});
  const { answer, answerFake, question, correctColorAnswer, wrongColorAnswer } =
    gameOptions;

  useEffect(() => {
    const newGameOpt = getPairOfWordsGames(words);
    setGameOptions(newGameOpt);
    setRandomLeftRightCorrectAnswer(Math.floor(Math.random() * 2));
  }, [newWords]);

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
            Exit
          </ButtonStyled>

          <ButtonStyled onClick={() => setIsMobile((prev) => !prev)}>
            {isMobile ? ' Is Desktop?' : ' Is Mobile?'}
          </ButtonStyled>
          <Description>If it's mobile click on the button above</Description>
          <Description>If is desktop use the arrows</Description>
          {window.screen.width <= THEME_STYLES.MOBILE_SIZE && (
            <WrapperQuestionAnswer>
              <Text>{question}?</Text>
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
            </WrapperQuestionAnswer>
          )}
        </WrapperButtons>

        <FieldAndGameLogic
          isMobile={isMobile}
          gameOptions={gameOptions}
          setNewWords={setNewWords}
        />

        {window.screen.width > THEME_STYLES.MOBILE_SIZE && (
          <WrapperQuestionAnswer isMobile={isMobile}>
            <Text>{question}?</Text>

            <div>
              <DotAnswer
                color={
                  randomLeftRightCorrectAnswer
                    ? correctColorAnswer
                    : wrongColorAnswer
                }
              />
              <Text>{randomLeftRightCorrectAnswer ? answer : answerFake}</Text>
            </div>
            <div>
              <DotAnswer
                color={
                  randomLeftRightCorrectAnswer
                    ? wrongColorAnswer
                    : correctColorAnswer
                }
              />
              <Text>{randomLeftRightCorrectAnswer ? answerFake : answer}</Text>
            </div>
          </WrapperQuestionAnswer>
        )}
      </Wrapper>
    </>
  );
};

export default GameSnake;
