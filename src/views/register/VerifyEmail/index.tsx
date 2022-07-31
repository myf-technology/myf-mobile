import { View } from 'react-native';
import PageLayout from '../../../components/PageLayout/PageLayout';
import { KeyConfirm } from '../../../components/KeyConfirm';
import { Text } from '../../../components/Text';
import { forwardRef, useState } from 'react';
import Colors from '../../../constants/Colors';
import { PathLink } from '../../../components/PathLink';
import { Spacer } from '../../../components/Spacer';
import { useSelector } from 'react-redux';
import { Store } from '../../../store/types';
import styles from './styles';

export const VerifyEmail = () => {
  const [digitOne, setDigitOne] = useState('');
  const [digitTwo, setDigitTwo] = useState('');
  const [digitThree, setDigitThree] = useState('');
  const [digitFour, setDigitFour] = useState('');

  const { email } = useSelector(({ user }: Store) => user);

  return (
    <PageLayout>
      <View style={styles.container}>
        <Spacer amount={18} />
        <Text textAlign='left' color={Colors.yellow4}>
          Please check the token sent to your E-mail.
        </Text>
        <Spacer amount={1} />
        <Text textAlign='left' font='footnote' color={Colors.yellow3}>
          {email}
        </Text>
        <KeyConfirm
          digitOneValue={digitOne}
          digitTwoValue={digitTwo}
          digitThreeValue={digitThree}
          digitFourValue={digitFour}
          passwordMode={false}
          digitOne={setDigitOne}
          digitTwo={setDigitTwo}
          digitThree={setDigitThree}
          digitFour={setDigitFour}
        />
        <Spacer amount={6} />
        <PathLink color={Colors.yellow4}>Resend Token</PathLink>
      </View>
    </PageLayout>
  );
};
