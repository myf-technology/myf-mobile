import { TouchableOpacity, View } from 'react-native';

import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';

export const Operator = ({ company, onPress }) => (
  <View>
    <Spacer amount={2} />
    <TouchableOpacity onPress={onPress}>
      <Text>{company}</Text>
    </TouchableOpacity>
  </View>
);
