import { useNavigation } from '@react-navigation/native';
import { Alert, View } from 'react-native';
import { useState } from 'react';

import { loginUserService } from '../../services/register-service/registerUser';
import { InvisibleInput } from '../../components/InvisibleInput';
import PageLayout from '../../components/PageLayout/PageLayout';
import { NAVIGATORS } from '../../navigation/constants';
import { storeToken } from '../../storage/storageToken';
import { PathLink } from '../../components/PathLink';
import { Spacer } from '../../components/Spacer';
import { Text } from '../../components/Text';
import Colors from '../../constants/Colors';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [flip, setFlip] = useState(false);
  const [email, setEmail] = useState('');
  const { navigate } = useNavigation();

  const onEmailSet = () => {
    setLoading(true);
    setFlip(true);
    setLoading(false);
  };
  const onPasswordSet = async () => {
    const data = {
      email,
      password
    };

    const res = await loginUserService(data);

    if (res.status === 400) {
      Alert.alert('Error', res.data.message, [
        {
          text: 'OK',
          onPress: () => {
            setFlip(false);
            setEmail('');
            setPassword('');
          }
        }
      ]);
    }
    if (res.status === 201) {
      const token = res.data.data.token;

      await storeToken(token);
      setLoading(true);
      navigate(NAVIGATORS.PRIVATE as never);
      setEmail('');
      setPassword('');
      setLoading(false);
    }
  };

  return (
    <PageLayout>
      <Spacer amount={25} />
      {!flip ? (
        <InvisibleInput
          arrowGo={email.match('@') ? true : false}
          placeholder='Logue com email...'
          placeholderTextColor='grey'
          onArrowPress={onEmailSet}
          onChangeText={setEmail}
          loading={loading}
          value={email}
          fontSize={20}
        />
      ) : (
        <InvisibleInput
          eyeIcon={password.length >= 1 ? (loading ? false : true) : false}
          toggleVisibility={() => setShowPassword(!showPassword)}
          arrowGo={password.length >= 4 ? true : false}
          placeholder='Digite sua senha...'
          onArrowPress={onPasswordSet}
          passwordMode={showPassword}
          placeholderTextColor='grey'
          onChangeText={setPassword}
          loading={loading}
          value={password}
          fontSize={20}
        />
      )}

      <Spacer amount={36} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <PathLink color={Colors.yellow4} textColor='yellow4' destination={''}>
          Esqueci a senha
        </PathLink>
        <Text color={Colors.yellow4} textAlign='center' font='footnote'>
          Entre com a digital
        </Text>
      </View>
    </PageLayout>
  );
};
