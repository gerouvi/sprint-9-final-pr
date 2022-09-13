export const translateWordsApi = async (opt1, opt2, word1, setWord2) => {
  console.log('here');
  try {
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${word1}e&langpair=${opt1}|${opt2}`
    );
    const data = await res.json();

    setWord2(data.responseData.translatedText);
  } catch (err) {
    console.log(err.message);
  }
};
