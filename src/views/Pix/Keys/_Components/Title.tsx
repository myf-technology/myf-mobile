import React from 'react';
import { View } from 'react-native';

import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import styles from '../styles';

export const Title = () => (
  <View style={styles.title}>
    <View>
      <Text font="title" textAlign="left">
        Minhas Chaves
      </Text>
    </View>
    <Spacer amount={1} />

    <View style={styles.subTitle}>
      <Text textAlign="left">
        Gerencie suas chaves para receber transferencias pelo Pix.
      </Text>
    </View>
  </View>
);
