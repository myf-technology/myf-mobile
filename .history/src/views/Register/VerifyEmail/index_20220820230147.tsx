import { Text } from '../../../components/Text';
import { useState } from 'react';
import { Spacer } from '../../../components/Spacer';
// import { Countdown } from './_helpers/Countdown';
import styles from './styles';
import { Alert, View } from 'react-native';
import { Layout } from '../../../components';
import { Colors } from '../../../constants';
// import { useSelector } from 'react-redux';
import { KeyConfirm } from '../../../components/KeyConfirm';
// import { PathLink } from '../../../components/PathLink';
// import { Store } from '../../../store/types';
// import {
//   resendTokenService,
//   validateTokenService,
// } from '../../../services/register-service/registerUser';
// import { useNavigation } from '@react-navigation/native';
// import { PUBLIC } from '../../../navigation/Public/constants';

export const VerifyEmail = () => {
  // const { email } = useSelector(({ user }: Store) => user);

  const [digitOne, setDigitOne] = useState('');
  const [digitTwo, setDigitTwo] = useState('');
  const [digitThree, setDigitThree] = useState('');
  const [digitFour, setDigitFour] = useState('');
  const [resendDisabled, setResendDisabled] = useState(true);
  const [restartCountdown, setRestartCountdown] = useState(false);
  // const { navigate } = useNavigation();

  const onComplete = () => {
    setResendDisabled(false);
    setRestartCountdown(false);
  };

  const resendToken = () => {
    setResendDisabled(true);
    setRestartCountdown(true);
  };

  const onBlur = async () => {
    // const token = digitOne + digitTwo + digitThree + digitFour;

    // const res = await validateTokenService(token);

    console.log(res.data.mesasge);

    if (res.status !== 200) {
      Alert.alert(res.data.mesasge, 'tem que corrigir lá, ta escrito mesasge', [
        {
          text: 'Blz ?',
          onPress: () => {
            setDigitOne('');
            setDigitTwo('');
            setDigitThree('');
            setDigitFour('');
          },
        },
      ]);
    } else {
      Alert.alert('Parabéns', 'Agora vá fazer o login no app', [
        {
          text: 'Ok',
          onPress: () => {
            navigate(PUBLIC.LOGIN as never);
          },
        },
      ]);
    }
  };

  const onResendToken = async () => {
    const res = await resendTokenService(email);

    if (res.status !== 200) {
      Alert.alert(
        'Erro',
        'Houve um erro e sua verificação tera que esperar um pouco',
        [
          {
            text: 'Ok',
            onPress: () => {
              setDigitOne('');
              setDigitTwo('');
              setDigitThree('');
              setDigitFour('');
            },
          },
        ],
      );
    } else {
      Alert.alert('Sucesso', 'Sua nova verificação foi enviada', [
        {
          text: 'Ok',
          onPress: () => {
            setDigitOne('');
            setDigitTwo('');
            setDigitThree('');
            setDigitFour('');
          },
        },
      ]);
    }
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Spacer amount={18} />
        <Text textAlign="left" color="yellow">
          Please check the token sent to your E-mail.
        </Text>
        <Spacer amount={1} />
        <Text textAlign="left" font="footnote" color={Colors.yellow2}>
          {/* {email} */}
        </Text>
        <KeyConfirm
          onBlur={onBlur}
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
        {/* <PathLink
          disabled={resendDisabled}
          color={resendDisabled ? Colors.yellow4 : Colors.yellow}
          onPress={resendToken}>
          Resend Token
        </PathLink> */}
        {/* <Countdown
          restart={restartCountdown}
          from={60}
          onComplete={onComplete}
        /> */}
      </View>
    </Layout>
  );
};
