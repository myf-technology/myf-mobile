import { View } from 'react-native';

import { Iprops } from './types';

import Colors from '../../../constants/Colors';
import { width } from '../../../constants/responsive';
import { Icon } from '../../Icon';

export const CircleIcon = ({ prefix, ...iconProps }: Iprops) => (
  <View
    style={{
      backgroundColor: Colors.white,
      width: width(9),
      height: width(9),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
    }}
  >
    <Icon name={prefix} {...iconProps} />
  </View>
);
