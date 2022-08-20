import {View} from 'react-native';
import React from 'react';

import {windowHeight} from '../../constants';

export const Spacer = ({amount = 0}: {amount?: number}) => (
  <View
    testID="spacer"
    style={{
      marginTop: windowHeight * (amount / 100),
    }}
  />
);
