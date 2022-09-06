import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  deleteUser,
  sendEmailVerification,
  sendPasswordResetEmail,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from 'firebase/auth';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { auth, db } from './firebase-config';

//Auth

export const isUserConnected = (setUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
};

export const createUserWithEmailAndPasswordFunction = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const sendEmailVerificationFunction = () => {
  return sendEmailVerification(auth.currentUser);
};

export const signInWithEmailAndPasswordFunction = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutFunction = () => {
  return signOut(auth);
};

export const updateEmailFunction = (newEmail) => {
  return updateEmail(auth.currentUser, newEmail);
};

export const updatePasswordFunction = (newPassword) => {
  return updatePassword(auth.currentUser, newPassword);
};

export const reauthenticateWithCredentialFunction = (password) => {
  const credential = EmailAuthProvider.credential(
    auth.currentUser.email,
    password
  );
  return reauthenticateWithCredential(auth.currentUser, credential);
};

export const deleteUserFunction = () => {
  return deleteUser(auth.currentUser);
};

export const sendPasswordResetEmailFunction = (email) => {
  return sendPasswordResetEmail(auth, email);
};

//Firestore

export const getUid = () => {
  return auth.currentUser.uid;
};

export const getServerTimestamp = () => {
  return serverTimestamp();
};

export const getDocsFunction = (path) => {
  const collectionRef = collection(db, path);
  return getDocs(collectionRef);
};

export const getDocFunction = (path) => {
  const docRef = doc(db, 'users', path);
  return getDoc(docRef);
};

export const setDocFunction = (path, newDoc) => {
  const docRef = doc(db, 'users', path);
  return setDoc(docRef, newDoc);
};

export const addDocFunction = (path, newData) => {
  const collectionRef = collection(db, path);
  return addDoc(collectionRef, { ...newData });
};

export const deletDocsFunction = (path) => {
  const docRef = doc(db, 'users', path);
  return deleteDoc(docRef);
};
