import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Icon } from '../../../../components/Icon';
import styles from '../Styles';

export const Throwback = () => {
  const { goBack } = useNavigation();

  return (
    <View style={styles.throwback}>
      <TouchableOpacity onPress={() => goBack()}>
        <Icon name="ArrowDown" />
      </TouchableOpacity>
    </View>
  );
};
