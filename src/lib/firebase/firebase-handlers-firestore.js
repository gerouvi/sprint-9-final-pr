import { async } from '@firebase/util';
import { stringError } from '../functions/stringError';
import {
  addDocFunction,
  deletDocsFunction,
  deleteDocFunction,
  getDocFunction,
  getDocsFunction,
  getDocsSelectedForGame,
  getServerTimestamp,
  getUid,
  getWordsListDocsLimit,
  setDocFunction,
  updateDocFunction,
} from './firebase-functions';

//Post a words
const sortAndStringLanguages = (language1, language2) => {
  const sortLanguages = [];
  sortLanguages.push(language1);
  sortLanguages.push(language2);
  sortLanguages.sort();
  return sortLanguages[0] + '-' + sortLanguages[1];
};

const getUpdatedLanguagesResum = (doc, option1, option2) => {
  let languagesResum = [];

  if (doc.data()) languagesResum = doc.data().languagesResum;

  languagesResum.push(option1);
  languagesResum.push(option2);

  return languagesResum
    .filter((language, index) => {
      return languagesResum.indexOf(language) === index;
    })
    .sort();
};

const getUpdatedLanguagesPairOfLanguages = (doc, option1, option2) => {
  let pairOfLanguagesResum = [];

  const newPairOfLanguages = sortAndStringLanguages(option1, option2);

  if (doc.data()) pairOfLanguagesResum = doc.data().pairOfLanguagesResum;

  pairOfLanguagesResum.push(newPairOfLanguages);

  return pairOfLanguagesResum.filter((language, index) => {
    return pairOfLanguagesResum.indexOf(language) === index;
  });
};

const updateLanguagesResum = async (option1, option2, setError) => {
  const uid = getUid();
  try {
    const doc = await getDocFunction(uid);

    const languagesResum = getUpdatedLanguagesResum(doc, option1, option2);

    const pairOfLanguagesResum = getUpdatedLanguagesPairOfLanguages(
      doc,
      option1,
      option2
    );

    await setDocFunction(uid, { languagesResum, pairOfLanguagesResum });
  } catch (err) {
    console.log(err.message);
    setError(err.message);
  }
};

export const handlePostWords = async (
  word1,
  option1,
  word2,
  option2,
  setError
) => {
  const languagesCollectionName = sortAndStringLanguages(option1, option2);
  const uid = getUid();
  const path = `users/${uid}/${languagesCollectionName}`;

  const serverTimestamp = getServerTimestamp();
  try {
    await addDocFunction(path, {
      [option1]: word1.toLowerCase().trim(),
      [option2]: word2.toLowerCase().trim(),
      createdAt: serverTimestamp,
      selectedForGames: false,
    });
    updateLanguagesResum(option1, option2, setError);
  } catch (err) {
    setError(err.message);
  }
};

//Delete all collections and subcollections of some uid
export const handleDeleteCollectionsAndSubcollection = async () => {
  const uid = getUid();
  try {
    const docUserResums = await getDocFunction(uid);
    const pairOfLanguagesResum = docUserResums.data().pairOfLanguagesResum;
    pairOfLanguagesResum.forEach((pairOfLanguages) => {
      getDocsPairOfLanguages(uid, pairOfLanguages);
    });
    deleteDoc(uid);
  } catch (err) {
    console.log(err.message);
  }
};

const getDocsPairOfLanguages = async (uid, pairOfLanguages) => {
  try {
    const docsPairOfLanguages = await getDocsFunction(
      `users/${uid}/${pairOfLanguages}`
    );

    const idsPairOfLanguages = docsPairOfLanguages.docs.map((doc) => ({
      id: doc.id,
    }));

    idsPairOfLanguages.map((id) =>
      deleteDoc(`${uid}/${pairOfLanguages}/${id.id}`)
    );
  } catch (err) {
    console.log(err);
  }
};

const deleteDoc = async (path) => {
  try {
    await deletDocsFunction(path);
  } catch (err) {
    console.log(err);
  }
};

//Options select
export const handleGetOptionsSelect = async (
  setAllOptionsSelect,
  setErrorOptionsSelect
) => {
  const uid = getUid();

  try {
    const doc = await getDocFunction(uid);
    setAllOptionsSelect(
      doc.data().languagesResum,
      doc.data().languagesResum[0],
      doc.data().languagesResum[1]
    );
  } catch (err) {
    console.log(err.message);
    const strError = stringError(err.message);
    setErrorOptionsSelect(strError);
  }
};

//WordsList, List of words
export const handleGetListOfWords = async (
  option1,
  option2,
  lastItem,
  limit,
  setWords
) => {
  const uid = getUid();
  //order options
  const optionsOrder = sortAndStringLanguages(option1, option2);

  try {
    const data = await getWordsListDocsLimit(
      `users/${uid}/${optionsOrder}`,
      option1,
      lastItem.current,
      limit
    );

    const docs = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    if (lastItem.current === 0) setWords(docs);
    else if (lastItem.current !== undefined)
      setWords((prev) => [...prev, ...docs]);

    lastItem.current = data.docs[data.docs.length - 1];
  } catch (err) {
    console.log(err.message);
  }
};

//WordsList, List, Update words

export const handleUpdateWords = async (data) => {
  try {
    const uid = getUid();

    const newPairOfLanguages = sortAndStringLanguages(
      data.option1,
      data.option2
    );

    const path = `${uid}/${newPairOfLanguages}/${data.idDoc}`;
    const newData = {
      [data.option1]: data.word1,
      [data.option2]: data.word2,
      selectedForGames: data.selectedForGames,
      createdAt: data.createdAt,
    };

    await updateDocFunction(path, newData);
  } catch (err) {
    console.log(err);
  }
};

//Delete doc

export const handleDeleteWords = async (option1, option2, id) => {
  console.log('here', id);
  try {
    const uid = getUid();
    const pairOfLanguages = sortAndStringLanguages(option1, option2);
    const path = `${uid}/${pairOfLanguages}/${id}`;

    console.log(path);

    await deleteDocFunction(path);
  } catch (err) {
    console.log(err);
  }
};

//Get all words filtered for the games
export const handleGetWordsFilteredGames = async (
  setWords,
  option1,
  option2,
  wordsOptions
) => {
  const uid = getUid();
  const newPairOfLanguages = sortAndStringLanguages(option1, option2);
  let data;

  try {
    if (wordsOptions.allWords)
      data = await getDocsFunction(`users/${uid}/${newPairOfLanguages}`);
    else
      data = await getDocsSelectedForGame(`users/${uid}/${newPairOfLanguages}`);

    const docs = data.docs.map((el) => ({ ...el.data(), id: el.id }));
    setWords(docs);
  } catch (err) {
    console.log(err);
  }
};
