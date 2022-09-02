import { useContext, useState } from 'react';
import { UserAuthContext } from '../../../lib/contexts/UserAuthContext';
import {
  updateEmailFunction,
  updatePasswordFunction,
} from '../../../lib/firebase/firebase-functions';

const MyAccount = () => {
  const { user } = useContext(UserAuthContext);

  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  if (!user) return <h1>No user</h1>;
  return (
    <>
      <h1>My Account</h1>
      <p>{user.email}</p>
      <form
        onSubmit={(e) => {
          console.log('here');
          e.preventDefault();
          handleUpdateEmail(newEmail);
        }}
      >
        <label>Cambiar email:</label>
        <input onChange={(e) => setNewEmail(e.target.value)} />
        <button>Update!</button>
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdatePassword(newPassword);
        }}
      >
        <label>Cambiar password:</label>
        <input onChange={(e) => setNewEmail(e.target.value)} />
        <button>Update!</button>
      </form>
    </>
  );
};

const handleUpdateEmail = async (newEmail) => {
  try {
    await updateEmailFunction(newEmail);
    console.log('ok');
  } catch (err) {
    console.log(err);
  }
};

const handleUpdatePassword = async (newEmail) => {
  try {
    await updatePasswordFunction(newEmail);
    console.log('ok');
  } catch (err) {
    console.log(err);
  }
};

export default MyAccount;
