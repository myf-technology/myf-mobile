import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Icon } from '../../../../components/Icon';
import { width } from '../../../../constants/responsive';

export const IconButton = ({ icon }: any) => (
  <TouchableOpacity>
    <View
      style={{
        backgroundColor: 'white',
        width: width(12),
        height: width(12),
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: width(2),
        margin: width(3),
      }}
    >
      <Icon name={icon} fill="dark" />
    </View>
  </TouchableOpacity>
);
