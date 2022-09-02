//https://firebase.google.com/docs/auth/web/email-link-auth?authuser=0&hl=es

import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
} from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from './firebase-config';

//Auth

export const isUserConnected = (setUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
};

export const signUpFunction = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logInFunction = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logOutFunction = () => {
  return signOut(auth);
};

export const updateEmailFunction = (newEmail) => {
  return updateEmail(auth.currentUser, newEmail);
};

export const updatePasswordFunction = (newPassword) => {
  return updatePassword(auth.currentUser, newPassword);
};

//Firestore

const getCollection = () => {
  return collection(db, auth.currentUser.uid);
};

export const postWordsFunction = (newWords) => {
  const collectionRef = getCollection();
  return addDoc(collectionRef, newWords);
};
