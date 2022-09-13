import { useState } from 'react';

const getInitialStateTranslateWords = () => ({
  option1: localStorage.getItem('translateOpt1') || 'english',
  word1: '',
  option2: localStorage.getItem('translateOpt2') || 'spanish',
  word2: '',
  error: undefined,
  correct: undefined,
});

export const useTranslateWords = () => {
  const [translateWords, setTranslateWords] = useState(
    getInitialStateTranslateWords
  );

  const setOption1 = (newOption) => {
    setTranslateWords((prev) => ({
      ...prev,
      option1: newOption,
    }));
    localStorage.setItem('translateOpt1', newOption);
  };
  const setWord1 = (newOption) => {
    setTranslateWords((prev) => ({
      ...prev,
      word1: newOption,
    }));
  };
  const setOption2 = (newOption) => {
    setTranslateWords((prev) => ({
      ...prev,
      option2: newOption,
    }));
    localStorage.setItem('translateOpt2', newOption);
  };
  const setWord2 = (newOption) => {
    setTranslateWords((prev) => ({
      ...prev,
      word2: newOption,
    }));
  };
  const setError = (error) => {
    setTranslateWords((prev) => ({
      ...prev,
      option1: error,
    }));
  };

  const setInitialStateTranslateWords = () => {
    setTranslateWords(getInitialStateTranslateWords());
  };

  return {
    translateWords,
    setOption1,
    setWord1,
    setOption2,
    setWord2,
    setError,
    setInitialStateTranslateWords,
  };
};
