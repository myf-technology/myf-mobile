import { View } from 'react-native';
import PageLayout from '../../../components/PageLayout/PageLayout';
import { KeyConfirm } from '../../../components/KeyConfirm';
import { Text } from '../../../components/Text';
import { useState } from 'react';
import Colors from '../../../constants/Colors';
import { PathLink } from '../../../components/PathLink';
import { Spacer } from '../../../components/Spacer';
import { useSelector } from 'react-redux';
import { Store } from '../../../store/types';
import styles from './styles';
import { Countdown } from './_helpers/Countdown';

export const VerifyEmail = () => {
  const { email } = useSelector(({ user }: Store) => user);

  const [digitOne, setDigitOne] = useState('');
  const [digitTwo, setDigitTwo] = useState('');
  const [digitThree, setDigitThree] = useState('');
  const [digitFour, setDigitFour] = useState('');
  const [resendDisabled, setResendDisabled] = useState(true);
  const [restartCountdown, setRestartCountdown] = useState(false);

  const onComplete = () => {
    setResendDisabled(false);
    setRestartCountdown(false);
  };

  const resendToken = () => {
    setResendDisabled(true);
    setRestartCountdown(true);
  };

  return (
    <PageLayout>
      <View style={styles.container}>
        <Spacer amount={18} />
        <Text textAlign='left' color={Colors.white}>
          Please check the token sent to your E-mail.
        </Text>
        <Text textAlign='left' font='footnote' color={Colors.grey3}>
          {email}
        </Text>
        <KeyConfirm
          passwordMode={false}
          digitOne={setDigitOne}
          digitTwo={setDigitTwo}
          digitThree={setDigitThree}
          digitFour={setDigitFour}
        />
        <Spacer amount={6} />
        <PathLink
          disabled={resendDisabled}
          color={resendDisabled ? Colors.grey3 : Colors.yellow}
          onPress={resendToken}
        >
          Resend Token
        </PathLink>
        <Countdown
          restart={restartCountdown}
          from={60}
          onComplete={onComplete}
        />
      </View>
    </PageLayout>
  );
};
