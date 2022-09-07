import { stringError } from '../functions/stringError';
import {
  addDocFunction,
  deletDocsFunction,
  getDocFunction,
  getDocsFunction,
  getServerTimestamp,
  getUid,
  setDocFunction,
} from './firebase-functions';

//Post a words
const sortAndStringLanguages = (language1, language2) => {
  const sortLanguages = [];
  sortLanguages.push(language1);
  sortLanguages.push(language2);
  sortLanguages.sort();
  return sortLanguages[0] + '-' + sortLanguages[1];
};

const getLanguagesResum = (doc, option1, option2) => {
  let languagesResum = [];

  if (doc.data()) languagesResum = doc.data().languagesResum;

  languagesResum.push(option1);
  languagesResum.push(option2);

  return languagesResum.filter((language, index) => {
    return languagesResum.indexOf(language) === index;
  });
};

const getLanguagesPairOfLanguages = (doc, option1, option2) => {
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

    const languagesResum = getLanguagesResum(doc, option1, option2);

    const pairOfLanguagesResum = getLanguagesPairOfLanguages(
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
      [option1]: word1,
      [option2]: word2,
      createdAt: serverTimestamp,
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
