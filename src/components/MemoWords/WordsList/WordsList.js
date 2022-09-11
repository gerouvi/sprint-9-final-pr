import { useCallback, useEffect, useRef, useState } from 'react';
import {
  handleGetListOfWords,
  handleGetOptionsSelect,
} from '../../../lib/firebase/firebase-handlers-firestore';
import useOptionsSelect from '../../../lib/hooks/useOptionsSelect';
import { SpinnerStyled } from '../../Extras/Spinner.styles';
import WrapperPage from '../Wrappers/WrapperPage';
import List from './List';
import { Wrapper } from './WordsList.styles';
import WordsListSelectMenu from './WordsListSelectMenu';

const WordsList = () => {
  console.log('wordList');
  const {
    optionsSelect,
    setAllOptionsSelect,
    setOption1Select,
    setOption2Select,
    setErrorSelect,
  } = useOptionsSelect();

  const [listOfWords, setListOfWords] = useState([]);

  const [moreWords, setMoreWords] = useState(false);

  const limit = 6;

  const lastItem = useRef(0);

  useEffect(() => {
    handleGetOptionsSelect(setAllOptionsSelect, setErrorSelect);
  }, []);

  useEffect(() => {
    if (optionsSelect.allOptions.length) {
      handleGetListOfWords(
        optionsSelect.option1,
        optionsSelect.option2,
        lastItem,
        limit,
        setListOfWords
      );
    }
  }, [
    optionsSelect.allOptions.length,
    optionsSelect.option1,
    optionsSelect.option2,
    moreWords,
  ]);

  const moreWordsFunction = useCallback(() => {
    setMoreWords((prev) => !prev);
  }, []);

  // const observerRef = useObserver(moreWordsFunction);

  return (
    <WrapperPage>
      <Wrapper>
        <h1>Words List</h1>
        {!optionsSelect.allOptions.length && !optionsSelect.error && (
          <SpinnerStyled />
        )}

        {optionsSelect.error && <h2>{optionsSelect.error}</h2>}

        {optionsSelect.allOptions.length && !optionsSelect.error && (
          <>
            <WordsListSelectMenu
              optionsSelect={optionsSelect}
              setOption1Select={setOption1Select}
              setOption2Select={setOption2Select}
              lastItem={lastItem}
            />
            <List
              listOfWords={listOfWords}
              optionsSelect={optionsSelect}
              // observerRef={observerRef}
              moreWordsFunction={moreWordsFunction}
              lastItem={lastItem.current}
              setListOfWords={setListOfWords}
            />
          </>
        )}
      </Wrapper>
    </WrapperPage>
  );
};
export default WordsList;
