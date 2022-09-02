import { postWordsFunction } from './firebase-functions';

export const handlePostWords = async (addWords, setError) => {
  try {
    await postWordsFunction({
      [addWords.option1]: addWords.word1,
      [addWords.option2]: addWords.word2,
      dateInHours: Math.floor(Date.now() / 1000 / 60 / 60),
    });
  } catch (err) {
    setError(err.message);
  }
};
