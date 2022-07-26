import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

import { Button } from '../../components/Button';
import { Theme } from '../../components/Button/types';
import { Icon } from '../../components/Icon';
import { height, width } from '../../constants/responsive';
import useRegisterForPushNotifications from '../../hooks/useRegisterForPushNotifications';
import { PUBLIC } from '../../navigation/Public/constants';

export const Home = () => {
  useRegisterForPushNotifications();

  const { navigate } = useNavigation();

  const handleRegister = () => {
    navigate(PUBLIC.EMAILNAME as never);
  };

  const handleLogin = () => {
    navigate(PUBLIC.LOGIN as never);
  };

  return (
    // <ImageBackground
    //   testID="background"
    //   resizeMode="cover"
    //   style={styles.background}
    //   source={require('../../../assets/images/home.jpeg')}
    // >
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <StatusBar style={'light'} />
      <View style={styles.logo}>
        <Icon name='MyF' fill='white' height={height(15)} width={width(87)} />
      </View>
      <View style={styles.containerButton}>
        <View style={styles.registerButton}>
          <Button
            testID='"button'
            onPress={handleRegister}
            theme={Theme.white}
            title='Abrir conta'
          />
        </View>
        <Button onPress={handleLogin} testID='button' theme={Theme.transparent} title='Entrar' />
      </View>
    </SafeAreaView>
    // </ImageBackground>
  );
};
