import { languagesOptions } from '../../../lib/constants/langaugesOptions';
import { useAddWords } from '../../../lib/hooks/useAddWords';
import { ButtonStyled } from '../../Buttons/Button.styles';
import { InputStyled } from '../../Form/Input.styles';
import { SelectStyled } from '../../Form/Select.styles';
import { Wrapper } from './AddWords.styles';
import WrapperPage from '../WrapperPage';
import { handlePostWords } from '../../../lib/firebase/firebase-handlers-firestore';

const AddWords = () => {
  const {
    addWords,
    setOption1,
    setWord1,
    setOption2,
    setWord2,
    setError,
    setInitialStateAddWords,
  } = useAddWords();

  return (
    <WrapperPage>
      <Wrapper>
        <h1>Add Words</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlePostWords(
              addWords.word1,
              addWords.option1,
              addWords.word2,
              addWords.option2,
              setError
            );
            setInitialStateAddWords();
          }}
        >
          <div>
            <SelectStyled
              value={addWords.option1}
              onChange={(e) => setOption1(e.target.value)}
            >
              {languagesOptions.map((language) => (
                <option key={language.name} value={language.name}>
                  {language.name.toUpperCase()}
                </option>
              ))}
            </SelectStyled>
            <InputStyled
              value={addWords.word1}
              onChange={(e) => setWord1(e.target.value)}
            />
          </div>

          <div>
            <SelectStyled
              value={addWords.option2}
              onChange={(e) => setOption2(e.target.value)}
            >
              {languagesOptions.map((language) => (
                <option key={language.name} value={language.name}>
                  {language.name.toUpperCase()}
                </option>
              ))}
            </SelectStyled>
            <InputStyled
              value={addWords.word2}
              onChange={(e) => setWord2(e.target.value)}
            />
          </div>
          <ButtonStyled
            disabled={
              !addWords.word1 ||
              !addWords.word2 ||
              addWords.option1 === addWords.option2
            }
          >
            Add Words
          </ButtonStyled>
        </form>
        {addWords.error && <p>Error adding words</p>}
      </Wrapper>
    </WrapperPage>
  );
};

export default AddWords;
