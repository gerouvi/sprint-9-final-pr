import { async } from '@firebase/util';
import { doc } from 'firebase/firestore';
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
  getWordsListDocsLimiAfterUpdate,
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

const updateLanguagesResum = async (option1, option2) => {
  const uid = getUid();
  try {
    const doc = await getDocFunction(uid);

    const languagesResum = postUpdatedLanguagesResum(doc, option1, option2);

    await setDocFunction(uid, { languagesResum });
  } catch (err) {
    console.log(err.message);
  }
};

export const handlePostWords = async (word1, option1, word2, option2) => {
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
    updateLanguagesResum(option1, option2);
  } catch (err) {}
};

//Delete all collections and subcollections of some uid
export const handleDeleteCollectionsAndSubcollection = async () => {
  const uid = getUid();
  try {
    const docUserResums = await getDocFunction(uid);
    const languagesResum = docUserResums.data().languagesResum;
    languagesResum.forEach((pairOfLanguages) => {
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

//Get options select
export const handleGetOptionsSelect = async (
  setAllOptionsSelect,
  setErrorOptionsSelect
) => {
  console.log('handleGetOptionsSelect');
  const uid = getUid();

  try {
    const doc = await getDocFunction(uid);

    const options = [];

    doc.data().languagesResum.forEach((el) => {
      const split = el.split('-');
      options.push(split[0]);
      options.push(split[1]);
    });

    const optionsFiltered = options.filter((el, index) => {
      return options.indexOf(el) === index;
    });

    optionsFiltered.sort();

    const option1LocalStorage = localStorage.getItem('option1');
    const option2LocalStorage = localStorage.getItem('option2');

    if (option1LocalStorage && !optionsFiltered.includes(option1LocalStorage))
      localStorage.removeItem('option1');
    if (option2LocalStorage && !optionsFiltered.includes(option2LocalStorage))
      localStorage.removeItem('option2');

    setAllOptionsSelect(
      optionsFiltered,
      optionsFiltered[0],
      optionsFiltered[1]
    );
  } catch (err) {
    console.log(err.message);
    const strError = stringError(err.message);
    setErrorOptionsSelect(strError);
  }
};

//Post options select
const postUpdatedLanguagesResum = (doc, option1, option2) => {
  let languagesResum = [];

  const newPairOfLanguages = sortAndStringLanguages(option1, option2);

  if (doc.data()) languagesResum = doc.data().languagesResum;

  languagesResum.push(newPairOfLanguages);

  return languagesResum.filter((language, index) => {
    return languagesResum.indexOf(language) === index;
  });
};

//Delete options select
const deleteLanguagesResum = async (option1, option2) => {
  const uid = getUid();

  try {
    const newPairOfLanguages = sortAndStringLanguages(option1, option2);
    const docs = await getDocsFunction(`users/${uid}/${newPairOfLanguages}`);
    const arrayDocs = docs.docs.map((el) => ({ ...el.data() }));
    if (!arrayDocs.length) {
      const doc = await getDocFunction(uid);
      const result = doc.data();
      result.languagesResum = result.languagesResum.filter(
        (el) => el !== newPairOfLanguages
      );
      await updateDocFunction(uid, result);
    }
  } catch (err) {
    console.log(err);
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
  console.log('handleGetListOfWords');
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

export const handleGetListOfWordsAfterUpdate = async (
  option1,
  option2,
  accLimit,
  setWords
) => {
  console.log('handleGetListOfWordsAfterUpdate');
  const uid = getUid();
  //order options
  const optionsOrder = sortAndStringLanguages(option1, option2);

  try {
    const data = await getWordsListDocsLimiAfterUpdate(
      `users/${uid}/${optionsOrder}`,
      option1,
      accLimit
    );

    const docs = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    setWords(docs);
  } catch (err) {
    console.log(err.message);
  }
};

//WordsList, List, Update words
export const handleUpdateWords = async (
  data,
  option1,
  option2,
  numberOfWords,
  setListOfWords
) => {
  console.log('handleUpdateWords');
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
    handleGetListOfWordsAfterUpdate(
      option1,
      option2,
      numberOfWords,
      setListOfWords
    );
  } catch (err) {
    console.log(err);
  }
};

//Delete doc
export const handleDeleteWords = async (
  option1,
  option2,
  id,
  accLimit,
  setWords
) => {
  console.log('handleDeleteWords');
  try {
    const uid = getUid();
    const pairOfLanguages = sortAndStringLanguages(option1, option2);
    const path = `${uid}/${pairOfLanguages}/${id}`;

    await deleteDocFunction(path);
    handleGetListOfWordsAfterUpdate(option1, option2, accLimit, setWords);
    deleteLanguagesResum(option1, option2);
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
  console.log('handleGetWordsFilteredGames');
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
