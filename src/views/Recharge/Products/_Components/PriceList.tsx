import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import styles from '../styles';

export const PriceList = ({ prices, onPress, selector }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.priceList}>
      <View>
        <Text textAlign="left">R$ {prices}</Text>
      </View>
      <View>
        <View
          style={
            // The specified price selected needs to set green on clicked
            // selector ? styles.selectorOn :
            styles.selectorOff
          }
        ></View>
      </View>
    </View>
    <Spacer amount={2.5} />
  </TouchableOpacity>
);
