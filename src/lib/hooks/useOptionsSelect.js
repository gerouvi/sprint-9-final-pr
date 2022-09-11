import { useState } from 'react';

const useOptionsSelect = () => {
  const [optionsSelect, setOptionsSelect] = useState({
    allOptions: [],
    option1: undefined,
    option2: undefined,
    error: null,
  });

  const setAllOptionsSelect = (allOptions, option1, option2) =>
    setOptionsSelect((prev) => ({ ...prev, allOptions, option1, option2 }));

  const setOption1Select = (option1) =>
    setOptionsSelect((prev) => ({ ...prev, option1 }));
  const setOption2Select = (option2) =>
    setOptionsSelect((prev) => ({ ...prev, option2 }));

  const setErrorSelect = (error) =>
    setOption1Select((prev) => ({ ...prev, error }));

  return {
    optionsSelect,
    setAllOptionsSelect,
    setOption1Select,
    setOption2Select,
    setErrorSelect,
  };
};

export default useOptionsSelect;
