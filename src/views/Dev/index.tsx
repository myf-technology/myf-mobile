import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import StorybookSVG from './_icons/StorybookSVG';
import styles from './styles';

import { Icon } from '../../components/Icon';
import { Spacer } from '../../components/Spacer';
import { Text } from '../../components/Text';
import { PUBLIC } from '../../navigation/Public/constants';

export const Dev = () => {
  const { navigate } = useNavigation();
  const screens = [
    {
      screen: PUBLIC.STORYBOOK,
      title: 'Go to Storybook',
      Icon: <StorybookSVG style={styles.storybookSVG} />
    },
    {
      screen: PUBLIC.HOME,
      title: 'Go to App',
      Icon: (
        <Icon
          name='MyF'
          fill='dark'
          style={{ position: 'absolute', right: 20 }}
          width={50}
          height={30}
        />
      )
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      <Spacer amount={23} />
      <Icon name='MyF' fill='white' />
      <Spacer amount={25} />
      {screens.map(({ screen, title, Icon }) => (
        <View key={title}>
          <Spacer amount={3} />
          <TouchableOpacity
            style={styles.button}
            key={title}
            onPress={() => navigate(screen as never)}
          >
            <Text font='body'>{title}</Text>
            {Icon}
          </TouchableOpacity>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default Dev;
