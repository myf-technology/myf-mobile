import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View } from 'react-native';

import { Button } from '../../components/Button';
import { InvisibleInput } from '../../components/InvisibleInput';
import PageLayout from '../../components/PageLayout/PageLayout';
import { PathLink } from '../../components/PathLink';
import { Spacer } from '../../components/Spacer';
import { Text } from '../../components/Text';
import Colors from '../../constants/Colors';
import { NAVIGATORS } from '../../navigation/constants';

export const Login = () => {
  const { navigate } = useNavigation();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [flip, setFlip] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const onEmailSet = () => {
    setLoading(true);
    setFlip(true);
    setEmail('');
    setLoading(false);
  };
  const onPasswordSet = () => {
    setLoading(true);
    navigate(NAVIGATORS.PRIVATE as never);
    setEmail('');
    setLoading(false);
  };

  return (
    <PageLayout>
      <Spacer amount={25} />
      {!flip ? (
        <InvisibleInput
          arrowGo={email.match('@') ? true : false}
          placeholderTextColor='grey'
          onArrowPress={onEmailSet}
          onChangeText={setEmail}
          placeholder='Logue com email...'
          loading={loading}
          value={email}
          fontSize={20}
        />
      ) : (
        <InvisibleInput
          eyeIcon={password.length >= 1 ? (loading ? false : true) : false}
          toggleVisibility={() => setShowPassword(!showPassword)}
          passwordMode={showPassword}
          arrowGo={password.length >= 4 ? true : false}
          placeholderTextColor='grey'
          onArrowPress={onPasswordSet}
          onChangeText={setPassword}
          placeholder='Digite sua senha...'
          loading={loading}
          value={password}
          fontSize={20}
        />
      )}
      <Text color={Colors.red}>{error}</Text>

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
