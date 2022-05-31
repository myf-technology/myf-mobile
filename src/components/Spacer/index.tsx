import { View } from 'react-native';

import Layout from '../../constants/Layout';

export const Spacer = ({ amount = 0 }: { amount?: number }) => (
  <View
    testID="spacer"
    style={{
      marginTop: Layout.window.height * (amount / 100),
    }}
  />
);
