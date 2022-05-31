import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Icon } from '../../../../components/Icon';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import styles from '../styles';

export const Head = ({ onPress, priceChossen }) => (
  <View style={styles.head}>
    <Text>Qual valor deseja recarregar?</Text>
    <Spacer amount={1} />
    <TouchableOpacity onPress={onPress}>
      <View style={styles.order}>
        <Text textAlign="left" font="title4">
          R$ {priceChossen}
        </Text>
        <Icon fill="white" name="ArrowDown" />
      </View>
    </TouchableOpacity>
  </View>
);
