import { TouchableOpacity, View } from 'react-native';

import { Icon } from '../../../../../../components/Icon';
import Colors from '../../../../../../constants/Colors';
import { width } from '../../../../../../constants/responsive';

export const Throwback = () => (
  <View>
    <TouchableOpacity>
      <View
        style={{
          width: width(8),
          height: width(8),
          borderRadius: width(100),
          backgroundColor: Colors.grey4,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View style={{ marginRight: width(0.8) }}>
          <Icon name="ArrowBack" />
        </View>
      </View>
    </TouchableOpacity>
  </View>
);
