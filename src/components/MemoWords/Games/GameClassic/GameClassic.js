import { useState } from 'react';
import getPairOfWordsGames from '../../../../lib/functions/getPairOfWordsGames';
import { ButtonStyled } from '../../../Buttons/Button.styles';
import { ButtonNoSStyled } from '../../../Buttons/ButtonNoS.styles';
import { InputStyled } from '../../../Form/Input.styles';
import { Form, Question, Result, Subtitle } from './GameClassic.styles';

const GameClassic = ({ words, setGamesOptions }) => {
  console.log('game classic');
  const { question, answer } = getPairOfWordsGames(words);
  const [quizGame, setQuizGame] = useState({
    question: question,
    answer: answer,
    userAnswer: '',
    result: undefined,
  });
  return (
    <>
      <Subtitle>Classic</Subtitle>
      <ButtonStyled
        onClick={() => setGamesOptions((prev) => ({ ...prev, play: false }))}
        color="red"
      >
        Stop
      </ButtonStyled>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          if (quizGame.userAnswer.toLowerCase().trim() === quizGame.answer)
            setQuizGame((prev) => ({ ...prev, result: true }));
          else setQuizGame((prev) => ({ ...prev, result: false }));
        }}
      >
        <Question>{quizGame.question}</Question>
        <InputStyled
          value={quizGame.userAnswer}
          onChange={(e) =>
            setQuizGame((prev) => ({
              ...prev,
              userAnswer: e.target.value,
            }))
          }
        />
        <Result correct={quizGame.result}>
          {quizGame.result === true && 'Correct'}
          {quizGame.result === false && `Incorrect, ${quizGame.answer}`}
        </Result>
        {quizGame.result === undefined ? (
          <ButtonStyled color="green">Check</ButtonStyled>
        ) : (
          <ButtonNoSStyled
            onClick={() => {
              const { question, answer } = getPairOfWordsGames(words);
              setQuizGame({
                question: question,
                answer: answer,
                userAnswer: '',
                result: undefined,
              });
            }}
            color="green"
          >
            Next
          </ButtonNoSStyled>
        )}
      </Form>
    </>
  );
};

export default GameClassic;
