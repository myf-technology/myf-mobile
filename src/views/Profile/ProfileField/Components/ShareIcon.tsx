import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Icon } from '../../../../components/Icon';
import styles from '../Styles';

export const ShareIcon = () => (
  <View style={styles.icon}>
    <TouchableOpacity
      onPress={() => {
        console.log('hello');
      }}
    >
      <View>
        <Icon name="Share" fill="white" />
      </View>
    </TouchableOpacity>
  </View>
);
