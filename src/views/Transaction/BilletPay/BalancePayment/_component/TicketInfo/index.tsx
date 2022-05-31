import { View } from 'react-native';

import { Text } from '../../../../../../components/Text';

export const TicketInfo = ({ title, content }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View>
      <Text textAlign="left">{title}</Text>
    </View>
    <View>
      <Text textAlign="left" font="subhead">
        {content}
      </Text>
    </View>
  </View>
);
