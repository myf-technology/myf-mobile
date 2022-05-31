import React from 'react';
import { View } from 'react-native';

import { Text } from '../../../../components/Text';
import Colors from '../../../../constants/Colors';
import styles from '../Styles';

export const AppVersion = () => {
  const CurrentVersion = '2.35.96';

  return (
    <View style={styles.appVersion}>
      <Text color={Colors.white}>Versão {CurrentVersion}</Text>
    </View>
  );
};
