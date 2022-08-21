import { View } from 'react-native';

import { windowHeight } from '../../constants';

export const Spacer = ({ amount = 0 }: { amount?: number }) => (
  <View
    testID="spacer"
    style={{
      marginTop: windowHeight * (amount / 100),
    }}
  />
);
