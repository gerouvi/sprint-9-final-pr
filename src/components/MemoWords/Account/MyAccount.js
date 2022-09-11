import { useContext } from 'react';
import { ACCOUNT_OPTIONS } from '../../../lib/constants/accountOptions';
import { UserAuthContext } from '../../../lib/contexts/UserAuthContext';
import ButtonDeleteAccount from './ButtonDeleteAccount';
import ChangeEmailForm from './ChangeEmailForm';
import ChangePasswordForm from './ChangePasswordForm';
import { Wrapper, WrapperForms } from './MyAccount.styles';

const MyAccount = ({ view }) => {
  const { user } = useContext(UserAuthContext);

  if (view !== ACCOUNT_OPTIONS.MY_ACCOUNT) return null;

  if (!user)
    return (
      <Wrapper>
        <h1>No user</h1>
      </Wrapper>
    );

  return (
    <Wrapper>
      <h1>My Account</h1>
      <p>{user.email}</p>
      <WrapperForms>
        <ChangeEmailForm />
        <ChangePasswordForm />
      </WrapperForms>
      <ButtonDeleteAccount />
    </Wrapper>
  );
};

export default MyAccount;
