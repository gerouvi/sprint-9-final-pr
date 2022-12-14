import { useRef } from 'react';
import {
  handleDeleteWords,
  handleUpdateWords,
} from '../../../lib/firebase/firebase-handlers-firestore';
import useObserver from '../../../lib/hooks/useObserver';
import usePortalUpdateWord from '../../../lib/hooks/usePortalUpdateWord';
import { ButtonStyled } from '../../Buttons/Button.styles';
import { SpinnerStyled } from '../../Extras/Spinner.styles';
import PortalUpdateWord from '../Portals/PortalUpdateWord';
import {
  LetterTitle,
  NoSelectedText,
  SelectedText,
  Word,
  WrapperWords,
} from './List.styles';

const List = ({
  listOfWords,
  setListOfWords,
  optionsSelect,
  lastItem,
  moreWordsFunction,
}) => {
  console.log('list');

  const letterTitle = useRef();
  const letterFlag = useRef(true);

  const {
    portalUpdateWords,
    setOpenPortalUpdateWords,
    setClosePortalUpdateWords,
    setWord1,
    setWord2,
    setSelectedForGames,
  } = usePortalUpdateWord();

  const updateFunction = (
    newData,
    option1,
    option2,
    numberOfWords,
    setListOfWords
  ) =>
    handleUpdateWords(newData, option1, option2, numberOfWords, setListOfWords);

  const ref = useObserver(moreWordsFunction);

  return (
    <>
      {listOfWords.map((el) => {
        if (!el[optionsSelect.option1]) return null;
        if (
          el[optionsSelect.option1][0].toUpperCase() !== letterTitle.current
        ) {
          letterTitle.current = el[optionsSelect.option1][0].toUpperCase();
          letterFlag.current = true;
        } else {
          letterFlag.current = false;
        }

        return (
          <div key={el.id}>
            {letterFlag.current && (
              <LetterTitle>
                {el[optionsSelect.option1][0].toUpperCase()}
              </LetterTitle>
            )}
            <WrapperWords>
              <Word>{el[optionsSelect.option1]}</Word>
              <Word>{el[optionsSelect.option2]}</Word>

              {el.selectedForGames ? (
                <SelectedText>Selected</SelectedText>
              ) : (
                <NoSelectedText>Not selected</NoSelectedText>
              )}
              <ButtonStyled
                onClick={() => {
                  setOpenPortalUpdateWords({
                    word1: el[optionsSelect.option1],
                    word2: el[optionsSelect.option2],
                    selectedForGames: el.selectedForGames,
                    option1: optionsSelect.option1,
                    option2: optionsSelect.option2,
                    idDoc: el.id,
                    createdAt: el.createdAt,
                  });
                }}
              >
                Modify / Select
              </ButtonStyled>
              <ButtonStyled
                onClick={() => {
                  handleDeleteWords(
                    optionsSelect.option1,
                    optionsSelect.option2,
                    el.id,
                    listOfWords.length,
                    setListOfWords
                  );
                }}
                color="red"
              >
                Delete
              </ButtonStyled>
            </WrapperWords>
          </div>
        );
      })}

      {lastItem !== undefined && (
        <>
          <div ref={ref} style={{ height: 1 }}></div>
          <SpinnerStyled />
        </>
      )}

      <PortalUpdateWord
        portalUpdateWords={portalUpdateWords}
        setClosePortalUpdateWords={setClosePortalUpdateWords}
        setSelectedForGames={setSelectedForGames}
        setWord1={setWord1}
        setWord2={setWord2}
        triggerFunction={updateFunction}
        numberOfWords={listOfWords.length}
        optionsSelect={optionsSelect}
        setListOfWords={setListOfWords}
      />
    </>
  );
};

export default List;
