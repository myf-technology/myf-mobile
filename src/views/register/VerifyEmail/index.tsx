import { Alert, View } from 'react-native';
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
import {
  resendTokenService,
  validateTokenService
} from '../../../services/register-service/registerUser';
import { useNavigation } from '@react-navigation/native';
import { PUBLIC } from '../../../navigation/Public/constants';

export const VerifyEmail = () => {
  const [digitOne, setDigitOne] = useState('');
  const [digitTwo, setDigitTwo] = useState('');
  const [digitThree, setDigitThree] = useState('');
  const [digitFour, setDigitFour] = useState('');
  const { navigate } = useNavigation();

  const { email } = useSelector(({ user }: Store) => user);

  const onBlur = async () => {
    const token = digitOne + digitTwo + digitThree + digitFour;

    const res = await validateTokenService(token);

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
          }
        }
      ]);
    } else {
      Alert.alert('Parabéns', 'Agora vá fazer o login no app', [
        {
          text: 'Ok',
          onPress: () => {
            navigate(PUBLIC.LOGIN as never);
          }
        }
      ]);
    }
  };

  const onResendToken = async () => {
    const res = await resendTokenService(email);

    if (res.status !== 200) {
      Alert.alert('Erro', 'Houve um erro e sua verificação tera que esperar um pouco', [
        {
          text: 'Ok',
          onPress: () => {
            setDigitOne('');
            setDigitTwo('');
            setDigitThree('');
            setDigitFour('');
          }
        }
      ]);
    } else {
      Alert.alert('Sucesso', 'Sua nova verificação foi enviada', [
        {
          text: 'Ok',
          onPress: () => {
            setDigitOne('');
            setDigitTwo('');
            setDigitThree('');
            setDigitFour('');
          }
        }
      ]);
    }
  };

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
        <PathLink onPress={onResendToken} color={Colors.yellow4}>
          Resend Token
        </PathLink>
      </View>
    </PageLayout>
  );
};
