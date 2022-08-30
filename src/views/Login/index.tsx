import { View } from 'react-native';
import { Input, Layout, Spacer, Text } from '../../components';
import { useState } from 'react';
import { Icon } from 'react-native-eva-icons';

import { styles } from './styles';
import { PathLink } from '../../components/PathLink';
import { placeholderValue } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { verifyEmailAsync } from './store/reducers/verifyEmail';
import { IStore } from '../../store/types';
import { loginAsync } from './store/reducers/login';

export const Login = () => {
  const [stage, setStage] = useState<'EMAIL' | 'PASSWORD'>('EMAIL');
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const selector = useSelector((store: IStore) => store.login);

  const isEmailStage = stage === 'EMAIL';

  const handleChangeText = (value: string) => {
    isEmailStage
      ? setForm({
          ...form,
          email: value,
        })
      : setForm({
          ...form,
          password: value,
        });
  };

  const handleNextStep = async () => {
    if (isEmailStage) {
      const returnDispatch = await dispatch(
        verifyEmailAsync({ email: form.email }) as any,
      );

      if (returnDispatch.meta.requestStatus === 'fulfilled') {
        setStage('PASSWORD');
      }
      return;
    }

    dispatch(loginAsync({ email: form.email, password: form.password }) as any);
  };

  const onPress = () => 'esqueci a senha';

  return (
    <Layout style={styles.loginContainer}>
      <Spacer amount={1} />
      <Input
        suffixIcon={() => (
          <Icon
            name="arrow-forward-outline"
            width={25}
            height={25}
            fill="white"
            onPress={handleNextStep}
          />
        )}
        placeholder={
          isEmailStage
            ? placeholderValue.PLACEHOLDER_EMAIL
            : placeholderValue.PLACEHOLDER_PASSWORD
        }
        onChangeText={handleChangeText}
        value={isEmailStage ? form.email : form.password}
      />
      <Text color="red">{selector.controls.message}</Text>
      <View style={styles.linksContainer}>
        {!isEmailStage && (
          <PathLink onPress={onPress}>
            <Text typography="footnote">Esqueci a senha</Text>
          </PathLink>
        )}
      </View>
    </Layout>
  );
};
