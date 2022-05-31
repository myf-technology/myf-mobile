import React from 'react';
import { View } from 'react-native';

import { ShareIcon } from './ShareIcon';

import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import Colors from '../../../../constants/Colors';
import styles from '../Styles';

export const BankData = () => (
  <View style={styles.bankData}>
    <View style={styles.title}>
      <Text textAlign="left" color={Colors.white}>
        Banco:
      </Text>
      <Spacer amount={1} />
      <Text textAlign="left" color={Colors.white}>
        Agência:
      </Text>
      <Spacer amount={1} />
      <Text textAlign="left" color={Colors.white}>
        Conta:
      </Text>
    </View>

    <View>
      <Text textAlign="left" color={Colors.white2}>
        333-9 XX BANCO
      </Text>
      <Spacer amount={1} />
      <Text textAlign="left" color={Colors.white2}>
        0056
      </Text>
      <Spacer amount={1} />
      <Text textAlign="left" color={Colors.white2}>
        55589654-9
      </Text>
    </View>
    <ShareIcon />
  </View>
);
