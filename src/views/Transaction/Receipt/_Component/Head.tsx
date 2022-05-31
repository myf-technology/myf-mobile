import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Icon } from '../../../../components/Icon';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import { width } from '../../../../constants/responsive';
import styles from '../styles';

export const Head = ({ onCrossPress }) => (
  <View>
    <View style={styles.icons}>
      <Icon width={width(30)} name="Valepay" />
      <TouchableOpacity onPress={onCrossPress}>
        <Icon name="Cross" />
      </TouchableOpacity>
    </View>
    <Spacer amount={2} />
    <View style={styles.title}>
      <Text textAlign="left" font="title">
        Comprovante de pagamento
      </Text>
    </View>
    <Spacer amount={2} />
  </View>
);
