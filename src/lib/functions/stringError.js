export const stringError = (code) => {
  switch (code) {
    case 'auth/weak-password':
      return 'hePassword short, at least 6 charactersllo';
    case 'auth/email-already-in-use':
      return 'Email already in use';
    case 'auth/wrong-password':
      return 'Wrong password';
    case 'auth/user-not-found':
      return 'User not found';
    case 'auth/missing-email':
      return 'Missing email';
    default:
      return 'Error';
  }
};
