import { TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { Colors } from '../../../../constants';

import { closeWarningProps } from '../../types';

export const CloseWarning = ({ onPress }: closeWarningProps) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Icon width={30} height={30} fill={Colors.black} name="close-outline" />
      </TouchableOpacity>
    </View>
  );
};
