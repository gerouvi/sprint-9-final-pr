import { useEffect, useState } from 'react';

import {
  handleGetOptionsSelect,
  handleGetWordsFilteredGames,
} from '../../../lib/firebase/firebase-handlers-firestore';
import useOptionsSelect from '../../../lib/hooks/useOptionsSelect';
import { ButtonStyled } from '../../Buttons/Button.styles';
import { SpinnerStyled } from '../../Extras/Spinner.styles';
import WrapperPage from '../Wrappers/WrapperPage';
import GameClassic from './GameClassic/GameClassic';
import { Wrapper } from './Games.styles';
import GamesChooseGameMenu from './GamesChooseGameMenu';

import GamesLanguagesMenu from './GamesLanguagesMenu';
import GameSnake from './GameSnake/GameSnake';
import GamesWordsOptionsMenu from './GamesWordsOptionsMenu';

const Games = () => {
  console.log('games');
  const {
    optionsSelect,
    setAllOptionsSelect,
    setOption1Select,
    setOption2Select,
    setErrorSelect,
  } = useOptionsSelect();

  const [words, setWords] = useState([]);

  const [gamesOptions, setGamesOptions] = useState({
    allWords: true,
    selectedForGames: false,
    game: 'classic',
    play: false,
  });

  useEffect(() => {
    handleGetOptionsSelect(setAllOptionsSelect, setErrorSelect);
  }, []);

  useEffect(() => {
    handleGetWordsFilteredGames(
      setWords,
      optionsSelect.option1,
      optionsSelect.option2,
      gamesOptions
    );
  }, [optionsSelect.option1, optionsSelect.option2, gamesOptions]);

  return (
    <WrapperPage>
      <Wrapper>
        {!gamesOptions.play && <h1>Games</h1>}
        {!optionsSelect.allOptions.length &&
          !optionsSelect.error &&
          !gamesOptions.play && <SpinnerStyled />}

        {optionsSelect.error && !gamesOptions.play && (
          <h2>{optionsSelect.error}</h2>
        )}

        {optionsSelect.allOptions.length &&
          !optionsSelect.error &&
          !gamesOptions.play && (
            <>
              <GamesLanguagesMenu
                optionsSelect={optionsSelect}
                setOption1Select={setOption1Select}
                setOption2Select={setOption2Select}
              />
              <GamesWordsOptionsMenu setGamesOptions={setGamesOptions} />
              <GamesChooseGameMenu
                gamesOptions={gamesOptions}
                setGamesOptions={setGamesOptions}
              />
              {words.length > 2 ? (
                <ButtonStyled
                  onClick={() =>
                    setGamesOptions((prev) => ({ ...prev, play: true }))
                  }
                  color="green"
                >
                  Play!
                </ButtonStyled>
              ) : (
                'No words to play'
              )}
            </>
          )}

        {gamesOptions.game === 'classic' && gamesOptions.play && (
          <GameClassic words={words} setGamesOptions={setGamesOptions} />
        )}
        {gamesOptions.game === 'snake' && gamesOptions.play && (
          <GameSnake words={words} setGamesOptions={setGamesOptions} />
        )}
      </Wrapper>
    </WrapperPage>
  );
};

export default Games;
