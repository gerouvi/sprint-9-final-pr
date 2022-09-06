import { stringError } from '../functions/stringError';
import {
  createUserWithEmailAndPasswordFunction,
  deleteUserFunction,
  reauthenticateWithCredentialFunction,
  sendEmailVerificationFunction,
  sendPasswordResetEmailFunction,
  signInWithEmailAndPasswordFunction,
  updateEmailFunction,
  updatePasswordFunction,
} from './firebase-functions';

//Auth
export const handleCreateUserWithEmailAndPassword = async (
  email,
  password,
  setCredentialsUser
) => {
  setCredentialsUser((prev) => ({ ...prev, error: null }));
  try {
    await createUserWithEmailAndPasswordFunction(email, password);
    handleSendEmailVerification();
  } catch (err) {
    console.log(err.code);
    const strError = stringError(err.code);
    setCredentialsUser((prev) => ({ ...prev, error: strError }));
  }
};

export const handleSendEmailVerification = async () => {
  try {
    await sendEmailVerificationFunction();
  } catch (err) {
    console.log(err);
  }
};

export const handleSignInWithEmailAndPassword = async (
  email,
  password,
  setCredentialsUser
) => {
  setCredentialsUser((prev) => ({ ...prev, error: null }));
  try {
    await signInWithEmailAndPasswordFunction(email, password);
  } catch (err) {
    console.log(err.code);
    const strError = stringError(err.code);
    setCredentialsUser((prev) => ({ ...prev, error: strError }));
  }
};

export const handleUpdateEmail = async (
  newEmail,
  password,
  setModalMessageActionFinished
) => {
  try {
    await reauthenticateWithCredentialFunction(password);
    await updateEmailFunction(newEmail);

    setModalMessageActionFinished({
      isOpen: true,
      message:
        'Email changed, we have send you a link to your former email address to finish the process. Make sure you checked your spams!',
    });
  } catch (err) {
    console.log(err);
    const strError = stringError(err.code);

    setModalMessageActionFinished({
      isOpen: true,
      message: strError,
    });
  }
};

export const handleUpdatePassword = async (
  newPassword,
  password,
  setModalMessageActionFinished
) => {
  try {
    await reauthenticateWithCredentialFunction(password);
    await updatePasswordFunction(newPassword);

    setModalMessageActionFinished({
      isOpen: true,
      message: 'Password changed',
    });
  } catch (err) {
    console.log(err);
    const strError = stringError(err.code);

    setModalMessageActionFinished({
      isOpen: true,
      message: strError,
    });
  }
};

export const handleDeleteUser = async (
  uid,
  password,
  setModalMessageActionFinished
) => {
  try {
    await reauthenticateWithCredentialFunction(password);
    await deleteUserFunction(uid);
    localStorage.removeItem('emailMemoWords');
  } catch (err) {
    console.log(err);
    const strError = stringError(err.code);

    setModalMessageActionFinished({
      isOpen: true,
      message: strError,
    });
  }
};

export const handdleSendPasswordResetEmail = async (
  email,
  setModalMessageActionFinished
) => {
  try {
    await sendPasswordResetEmailFunction(email);
    setModalMessageActionFinished({
      isOpen: true,
      message: 'Email sended',
    });
  } catch (err) {
    console.log(err);
    const strError = stringError(err.code);
    setModalMessageActionFinished({
      isOpen: true,
      message: strError,
    });
  }
};
