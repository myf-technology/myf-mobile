import { TouchableOpacity, View } from 'react-native';

import { Icon } from '../../../../components/Icon';
import { Spacer } from '../../../../components/Spacer';
import { width } from '../../../../constants/responsive';

export const Throwback = () => (
  <View style={{ marginLeft: width(5) }}>
    <Spacer amount={2} />
    <TouchableOpacity>
      <Icon fill='white' name="ArrowBack" />
    </TouchableOpacity>
    <Spacer amount={2} />
  </View>
);
