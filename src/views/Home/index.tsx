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
import { Spacer } from '../../components/Spacer';
import { PathLink } from '../../components/PathLink';
import Colors from '../../constants/Colors';

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
      <Spacer amount={2} />
      <PathLink
        color={Colors.yellow3}
        testID='"button'
        onPress={handleRegister}
        // theme={Theme.transparent}
        // title='sing up'
      >
        sing up
      </PathLink>
      <StatusBar style={'light'} />
      <View style={styles.logo}>
        <Icon name='MyF' fill='white' height={height(15)} width={width(87)} />
      </View>
      <View style={styles.containerButton}>
        <View style={styles.registerButton}>
          <PathLink
            color={Colors.yellow3}
            testID='"button'
            onPress={handleLogin}
            // theme={Theme.transparent}
            // title='sing up'
          >
            login
          </PathLink>
          <Spacer amount={5} />
        </View>
      </View>
    </SafeAreaView>
    // </ImageBackground>
  );
};
