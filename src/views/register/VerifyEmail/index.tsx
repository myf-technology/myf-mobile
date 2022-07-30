import { View } from 'react-native';
import PageLayout from '../../../components/PageLayout/PageLayout';
import { KeyConfirm } from '../../../components/KeyConfirm';
import { Text } from '../../../components/Text';
import { forwardRef, useState } from 'react';
import Colors from '../../../constants/Colors';
import { PathLink } from '../../../components/PathLink';
import { Spacer } from '../../../components/Spacer';

export const VerifyEmail = () => {
  const [digitOne, setDigitOne] = useState('');
  const [digitTwo, setDigitTwo] = useState('');
  const [digitThree, setDigitThree] = useState('');
  const [digitFour, setDigitFour] = useState('');

  return (
    <PageLayout>
      <Text textAlign='left' color={Colors.white}>Please check the token sent to your E-mail.</Text>
      <Text textAlign='left' color={Colors.grey3}>your@email.com</Text>
      <KeyConfirm
        passwordMode={false}
        digitOne={setDigitOne}
        digitTwo={setDigitTwo}
        digitThree={setDigitThree}
        digitFour={setDigitFour}
      />
      <Spacer amount={6} />
      <PathLink color={Colors.grey3}>Resend Token</PathLink>
    </PageLayout>
  );
};
