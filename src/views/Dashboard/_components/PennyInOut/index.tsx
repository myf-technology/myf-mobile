/* eslint-disable react-native/no-inline-styles */
import { TouchableOpacity, View } from 'react-native';
import { Icon } from '../../../../components/Icon';
import { width } from '../../../../constants';
import styles from '../../styles';

interface pennyInOutProps {
  onPennyInPress?: () => void;
  onPennyOutPress?: () => void;
}

export const PennyInOut = ({
  onPennyInPress,
  onPennyOutPress,
}: pennyInOutProps) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <TouchableOpacity
        onPress={onPennyInPress}
        style={[styles.titleBox, { width: width(15) }]}>
        <Icon name="ArrowForward" fill="green" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.titleBox, width: width(15) }}
        onPress={onPennyOutPress}>
        <Icon name="ArrowForward" fill="red" />
      </TouchableOpacity>
    </View>
  );
};
