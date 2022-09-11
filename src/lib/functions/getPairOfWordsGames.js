const getPairOfWordsGames = (initialWords) => {
  //   const indexRandom = Math.floor(Math.random() * initialWords.length);
  //   const words = initialWords[indexRandom];
  //   const wordsCopied = JSON.parse(JSON.stringify(words));

  //   delete wordsCopied.id;
  //   delete wordsCopied.selectedForGames;
  //   delete wordsCopied.createdAt;

  //   const wordsValues = Object.values(wordsCopied);
  //   const binaryRandom = Math.floor(Math.random() * 2);
  //   const question = wordsValues[binaryRandom];
  //   const answer = wordsValues[binaryRandom ? 0 : 1];

  const indexRandom = Math.floor(Math.random() * initialWords.length);
  const wordsSelected = initialWords[indexRandom];

  delete wordsSelected.id;
  delete wordsSelected.selectedForGames;
  delete wordsSelected.createdAt;

  const wordsValues = Object.values(wordsSelected);
  const binaryRandom = Math.floor(Math.random() * 2);
  const question = wordsValues[binaryRandom];
  const answer = wordsValues[binaryRandom ? 0 : 1];

  return {
    question,
    answer,
  };
};

export default getPairOfWordsGames;
