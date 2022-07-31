import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert } from 'react-native';
import PageLayout from '../../../components/PageLayout/PageLayout';
import Colors from '../../../constants/Colors';
import { PUBLIC } from '../../../navigation/Public/constants';
import { FlashInput } from './_components/FlashInput';

export const Password = () => {
  const { navigate } = useNavigation();
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [res, setRes] = useState(0);
  const onArrowPress = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRes(200);
    }, 3000);
  };

  const onSendEmail = () => {
    setLoading(true);
    console.log(password, passwordCheck);
    if (password !== passwordCheck) {
      Alert.alert('Senhas não conferem', 'Tente novamente', [
        {
          text: 'Ok',
          onPress: () => {
            setLoading(false);
            setPassword('');
            setPasswordCheck('');
            setRes(0);
          },
        },
      ]);
      return;
    }
    setTimeout(() => {
      setPasswordCheck('');
      setLoading(false);
      setRes(200);
      navigate(PUBLIC.VERIFY_EMAIL as never);
    }, 3000);
  };

  return (
    <PageLayout>
      {res !== 200 ? (
        <FlashInput
          eyeIcon={password.length >= 1 ? (loading ? false : true) : false}
          toggleVisibility={() => setShowPassword(!showPassword)}
          arrowForward={password.length >= 4 ? true : false}
          placeholder='Senha, crie uma.'
          placeholderTextColor={Colors.grey2}
          passwordMode={showPassword}
          onArrowPress={onArrowPress}
          onChangeText={setPassword}
          loading={loading}
          value={password}
          fontSize={20}
        />
      ) : (
        <FlashInput
          eyeIcon={passwordCheck.length >= 1 ? (loading ? false : true) : false}
          toggleVisibility={() => setShowPassword(!showPassword)}
          arrowForward={passwordCheck.length >= 1 ? true : false}
          placeholderTextColor={Colors.grey2}
          placeholder='Sua senha, repita.'
          onChangeText={setPasswordCheck}
          passwordMode={showPassword}
          onArrowPress={onSendEmail}
          value={passwordCheck}
          loading={loading}
          fontSize={20}
        />
      )}
    </PageLayout>
  );
};
