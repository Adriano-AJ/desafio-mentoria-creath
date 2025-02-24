import CardBox from '@/components/CardBox';
import CardTitle from '@/components/CardTitle';
import Button from '@/components/Button';
import CentralizedContainer from '@/components/CentralizedContainer';
import { auth, onAuthStateChanged } from '@/auth/firebase';
import { handleSignIn, handleSignUp, handleSignOut } from '@/utils/auth';
import { useEffect, useState } from 'react';
import Form from '@/components/Form';
import Text from '@/components/Text';
import InputPassword from '@/components/InputPassword';

const userEmail = 'user@someemail.com';
const userPassword = 'userpasswd';

export default function Register() {
  const [currentUser, setCurrentUser] = useState(auth.currentUser);

  useEffect(() => {
    const removeListener = onAuthStateChanged(auth, user => {
      setCurrentUser(user);

      return () => {
        removeListener();
      };
    });
  }, []);

  return (
    <CentralizedContainer>
      <CardBox>
        <CardTitle title="Create Account" />

        <Form label="Fullname" required/>
        <Form label="Email adress" required/>
        <InputPassword/>
        <Button
          label="Create Account"
          clickHandler={e => handleSignUp({ userEmail, userPassword })}
        />
        <Text text="Already have an account? Log in"></Text>
      </CardBox>
    </CentralizedContainer>
  );
}