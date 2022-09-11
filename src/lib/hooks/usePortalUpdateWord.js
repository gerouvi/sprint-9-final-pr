import { useState } from 'react';

const usePortalUpdateWord = () => {
  const [portalUpdateWords, setPortalUpdateWords] = useState(() =>
    initialState()
  );

  const setOpenPortalUpdateWords = ({
    word1,
    word2,
    selectedForGames,
    option1,
    option2,
    idDoc,
    createdAt,
  }) =>
    setPortalUpdateWords({
      word1,
      word2,
      selectedForGames,
      option1,
      option2,
      isOpen: true,
      idDoc,
      createdAt,
    });

  const setClosePortalUpdateWords = () =>
    setPortalUpdateWords(() => initialState());

  const setWord1 = (newWord) =>
    setPortalUpdateWords((prev) => ({ ...prev, word1: newWord }));

  const setWord2 = (newWord) =>
    setPortalUpdateWords((prev) => ({ ...prev, word2: newWord }));

  const setSelectedForGames = () =>
    setPortalUpdateWords((prev) => ({
      ...prev,
      selectedForGames: !prev.selectedForGames,
    }));

  return {
    portalUpdateWords,
    setOpenPortalUpdateWords,
    setClosePortalUpdateWords,
    setWord1,
    setWord2,
    setSelectedForGames,
  };
};

const initialState = () => ({
  isOpen: false,
  word1: '',
  word2: '',
  selectedForGames: '',
  idDoc: undefined,
  option1: undefined,
  option2: undefined,
  createdAt: undefined,
});

export default usePortalUpdateWord;
