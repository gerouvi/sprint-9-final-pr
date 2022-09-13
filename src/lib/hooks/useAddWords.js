import { useState } from 'react';

const getInitialStateAddWords = () => ({
  option1: localStorage.getItem('addWordsOpt1') || 'english',
  word1: '',
  option2: localStorage.getItem('addWordsOpt2') || 'spanish',
  word2: '',
  error: undefined,
  correct: undefined,
});

export const useAddWords = () => {
  const [addWords, setAddWords] = useState(getInitialStateAddWords);

  const setOption1 = (newOption) => {
    setAddWords((prev) => ({
      ...prev,
      option1: newOption,
    }));
    localStorage.setItem('addWordsOpt1', newOption);
  };
  const setWord1 = (newOption) => {
    setAddWords((prev) => ({
      ...prev,
      word1: newOption,
    }));
  };
  const setOption2 = (newOption) => {
    setAddWords((prev) => ({
      ...prev,
      option2: newOption,
    }));
    localStorage.setItem('addWordsOpt2', newOption);
  };
  const setWord2 = (newOption) => {
    setAddWords((prev) => ({
      ...prev,
      word2: newOption,
    }));
  };
  const setError = (error) => {
    setAddWords((prev) => ({
      ...prev,
      option1: error,
    }));
  };

  const setInitialStateAddWords = () => {
    setAddWords(getInitialStateAddWords());
  };

  return {
    addWords,
    setOption1,
    setWord1,
    setOption2,
    setWord2,
    setError,
    setInitialStateAddWords,
  };
};
