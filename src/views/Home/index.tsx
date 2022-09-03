/* eslint-disable react-native/no-inline-styles */
import { SafeAreaView } from 'react-native-safe-area-context';

import { Icon } from '../../components/Icon';
import { Spacer } from '../../components/Spacer';

import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { PUBLIC } from '../../navigation/Public/constants';

export const Home = () => {
  const { navigate } = useNavigation();
  const onLogin = () => {
    navigate(PUBLIC.LOGIN as never);
  };

  const onRegister = () => {
    navigate(PUBLIC.NAMEEMAIL as never);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: 'black', alignItems: 'center' }}>
      <Spacer amount={15} />
      <Icon width={100} height={100} name="MyF" />
      <Spacer amount={35} />
      <Button onPress={onRegister} title="Criar conta" />
      <Spacer amount={5} />
      <Button onPress={onLogin} title="Logar" />
    </SafeAreaView>
  );
};
