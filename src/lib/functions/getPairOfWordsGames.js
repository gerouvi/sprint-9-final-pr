const getPairOfWordsGames = (initialWords) => {
  const indexRandom = Math.floor(Math.random() * initialWords.length);
  let indexRandom2;

  do {
    indexRandom2 = Math.floor(Math.random() * initialWords.length);
  } while (indexRandom === indexRandom2);

  const words = initialWords[indexRandom];
  const wordsFake = initialWords[indexRandom2];

  delete words.id;
  delete words.selectedForGames;
  delete words.createdAt;
  delete wordsFake.id;
  delete wordsFake.selectedForGames;
  delete wordsFake.createdAt;

  const languages = Object.keys(words);

  const indexAnswer = Math.floor(Math.random() * 2);
  const indexQuestion = indexAnswer ? 0 : 1;

  const languageAnswer = languages[indexAnswer];
  const languageQuestion = languages[indexQuestion];

  const randomColorAnswerCorrect = Math.floor(Math.random() * 2);

  const correctColorAnswer = randomColorAnswerCorrect ? 'blue' : 'green';

  const wrongColorAnswer = randomColorAnswerCorrect ? 'green' : 'blue';

  return {
    answer: words[languageAnswer],
    answerFake: wordsFake[languageAnswer],
    question: words[languageQuestion],
    correctColorAnswer,
    wrongColorAnswer,
  };
};

export default getPairOfWordsGames;
