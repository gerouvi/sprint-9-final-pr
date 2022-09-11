import { useRef } from 'react';
import {
  handleDeleteWords,
  handleUpdateWords,
} from '../../../lib/firebase/firebase-handlers-firestore';
import usePortalUpdateWord from '../../../lib/hooks/usePortalUpdateWord';
import { ButtonStyled } from '../../Buttons/Button.styles';
import { SpinnerStyled } from '../../Extras/Spinner.styles';
import PortalUpdateWord from '../Portals/PortalUpdateWord';
import {
  NoSelectedText,
  SelectedText,
  Word,
  WrapperWords,
} from './List.styles';

const List = ({ listOfWords, optionsSelect, moreWordsFunction }) => {
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

  const updateFunction = (newData) => handleUpdateWords(newData);

  if (!listOfWords.length) return <h2>No Words</h2>;

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
              <h4>{el[optionsSelect.option1][0].toUpperCase()}</h4>
            )}
            <WrapperWords>
              <Word>{el[optionsSelect.option1]}</Word>
              <Word>{el[optionsSelect.option2]}</Word>

              {el.selectedForGames ? (
                <SelectedText>Selected for the games</SelectedText>
              ) : (
                <NoSelectedText>Not selected for the games</NoSelectedText>
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
                    el.id
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
      {/* {lastItem && (
        <>
          {' '}

        </>
      )} */}
      <div
        onClick={() => {
          moreWordsFunction();
        }}
      >
        Observer
      </div>
      <SpinnerStyled />
      <PortalUpdateWord
        portalUpdateWords={portalUpdateWords}
        setClosePortalUpdateWords={setClosePortalUpdateWords}
        setSelectedForGames={setSelectedForGames}
        setWord1={setWord1}
        setWord2={setWord2}
        triggerFunction={updateFunction}
      />
    </>
  );
};

export default List;
