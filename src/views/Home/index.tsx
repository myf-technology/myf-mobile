// import { useNavigation } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
import { StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

import { Icon } from '../../components/Icon';
import { Spacer } from '../../components/Spacer';
import { PathLink } from '../../components/PathLink';
import { Colors, height, width } from '../../constants';
import { Text } from '../../components';

export const Home = () => {
  // const { navigate } = useNavigation();

  const handleRegister = () => {
    console.log('handleRegister');
  };

  const handleLogin = () => {
    console.log('handleRegister');
  };

  return (
    // <ImageBackground
    //   testID="background"
    //   resizeMode="cover"
    //   style={styles.background}
    //   source={require('../../../assets/images/home.jpeg')}
    // >
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <Text>Home</Text>
      <Icon name="ArrowForward" />
    </SafeAreaView>
    // </ImageBackground>
  );
};
