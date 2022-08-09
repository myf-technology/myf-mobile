import { TouchableOpacity, View } from 'react-native';
import { Icon } from '../../../../components/Icon';
import Colors from '../../../../constants/Colors';
import { width } from '../../../../constants/responsive';
import styles from '../../styles';

interface pennyInOutProps {
  onPennyInPress?: () => void;
  onPennyOutPress?: () => void;
}

export const PennyInOut = ({ onPennyInPress, onPennyOutPress }: pennyInOutProps) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <TouchableOpacity onPress={onPennyInPress} style={[styles.titleBox, { width: width(15) }]}>
        <Icon name='DollarSign' fill='green' />
      </TouchableOpacity>
      <TouchableOpacity style={{ ...styles.titleBox, width: width(15) }} onPress={onPennyOutPress}>
        <Icon name='DollarSign' fill='red' />
      </TouchableOpacity>
    </View>
  );
};
