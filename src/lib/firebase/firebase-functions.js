import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
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

//Firestore

// export const postFirestore = (user, data) => {
//   const collectionRef = collection(db, user);
//   return addDoc(collectionRef, data);
// };
