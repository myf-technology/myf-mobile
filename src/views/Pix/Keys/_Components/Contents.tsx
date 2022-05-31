import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Icon } from '../../../../components/Icon';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import Colors from '../../../../constants/Colors';
import { height, width } from '../../../../constants/responsive';

export const Contents = ({ title, text }) => (
  <View
    style={{
      height: height(100),
    }}
  >
    <View
      style={{
        width: width(90),
        marginLeft: width(5),
      }}
    >
      <Text textAlign="left" font="subhead">
        {title}
      </Text>
      <Spacer amount={2} />
      <Text textAlign="left">{text}</Text>
      <Spacer amount={3} />
      <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row' }}>
        <View
          style={{
            backgroundColor: Colors.grey4,
            width: width(10),
            height: width(10),
            borderRadius: width(100),
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="Import" />
        </View>
        <View style={{ marginLeft: width(3) }}>
          <Text textAlign="left">Compartilhar chave</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);
