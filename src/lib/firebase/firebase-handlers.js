import {
  logInFunction,
  postWordsFunction,
  signUpFunction,
} from './firebase-functions';

//Auth

export const handleLogIn = async (email, password, setCredentialsUser) => {
  setCredentialsUser((prev) => ({ ...prev, error: null }));
  try {
    await logInFunction(email, password);
  } catch (err) {
    setCredentialsUser((prev) => ({ ...prev, error: err.code }));
  }
};

export const handleSignUp = async (email, password, setCredentialsUser) => {
  setCredentialsUser((prev) => ({ ...prev, error: null }));
  try {
    await signUpFunction(email, password);
    console.log('ok');
  } catch (err) {
    setCredentialsUser((prev) => ({ ...prev, error: err.code }));
  }
};

//Firestore

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
