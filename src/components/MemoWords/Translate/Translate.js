import WrapperPage from '../Wrappers/WrapperPage';
import { useTranslateWords } from '../../../lib/hooks/useTranslateWords';
import { Wrapper } from './Translate.styles';
import { LANGUAGES_OPTIONS } from '../../../lib/constants/langaugesOptions';
import { SelectStyled } from '../../Form/Select.styles';
import { InputStyled } from '../../Form/Input.styles';
import { ButtonStyled } from '../../Buttons/Button.styles';
import { translateWordsApi } from '../../../lib/api/translateApi';
import { handlePostWords } from '../../../lib/firebase/firebase-handlers-firestore';

const Translate = () => {
  const {
    translateWords,
    setOption1,
    setWord1,
    setOption2,
    setWord2,
    setError,
    setInitialStateTranslateWords,
  } = useTranslateWords();

  console.log('Translate');

  console.log(translateWords);

  return (
    <WrapperPage>
      <Wrapper>
        <h1>Translate</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!translateWords.word2)
              handleTranslateWords(translateWords, setWord2);
            else
              handleAddWords(
                translateWords,
                setError,
                setInitialStateTranslateWords
              );
          }}
        >
          <SelectStyled
            value={translateWords.option1}
            onChange={(e) => setOption1(e.target.value)}
          >
            {LANGUAGES_OPTIONS.map((language, index) => (
              <option key={index} value={language.name}>
                {language.name.toUpperCase()}
              </option>
            ))}
          </SelectStyled>

          <SelectStyled
            value={translateWords.option2}
            onChange={(e) => {
              setOption2(e.target.value);
            }}
          >
            {LANGUAGES_OPTIONS.map((language, index) => (
              <option key={index} value={language.name}>
                {language.name.toUpperCase()}
              </option>
            ))}
          </SelectStyled>
          <InputStyled
            value={translateWords.word1}
            onChange={(e) => setWord1(e.target.value)}
          />
          {translateWords.word2 && (
            <InputStyled
              value={translateWords.word2}
              onChange={(e) => setWord2(e.target.value)}
            />
          )}

          <ButtonStyled>
            {translateWords.word2 ? 'Add Words' : 'Translate'}
          </ButtonStyled>
        </form>
      </Wrapper>
    </WrapperPage>
  );
};

const handleTranslateWords = (translateWords, setWord2) => {
  const codeOpt1 = LANGUAGES_OPTIONS.filter(
    (language) => language.name === translateWords.option1
  )[0].code;

  const codeOpt2 = LANGUAGES_OPTIONS.filter(
    (language) => language.name === translateWords.option2
  )[0].code;

  translateWordsApi(codeOpt1, codeOpt2, translateWords.word1, setWord2);
};

const handleAddWords = (
  translateWords,
  setError,
  setInitialStateTranslateWords
) => {
  handlePostWords(
    translateWords.word1,
    translateWords.option1,
    translateWords.word2,
    translateWords.option2,
    setError
  );
  setInitialStateTranslateWords();
};

export default Translate;
