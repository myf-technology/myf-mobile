import { View } from 'react-native';
import PageLayout from '../../../components/PageLayout/PageLayout';
import { KeyConfirm } from '../../../components/KeyConfirm';
import { Text } from '../../../components/Text';
import { useState } from 'react';

export const ValidationToken = () => {
  const [digitOne, setDigitOne] = useState('');
  const [digitTwo, setDigitTwo] = useState('');
  const [digitThree, setDigitThree] = useState('');
  const [digitFour, setDigitFour] = useState('');

  console.log(
    'digitOne',
    digitOne,
    'digitTwo',
    digitTwo,
    'digitThree',
    digitThree,
    'digitFour',
    digitFour
  );

  return (
    <PageLayout>
      <Text color='white'>Token</Text>
      <KeyConfirm
        passwordMode={false}
        digitOne={setDigitOne}
        digitTwo={setDigitTwo}
        digitThree={setDigitThree}
        digitFour={setDigitFour}
      />
    </PageLayout>
  );
};
