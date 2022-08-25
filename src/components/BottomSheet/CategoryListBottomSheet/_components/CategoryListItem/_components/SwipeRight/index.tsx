import { View } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { RectButton } from 'react-native-gesture-handler';
import { Colors } from '../../../../../../../constants';
import styles from './styles';
import { ISwipeRightProps } from './types';

export const SwipeRight = ({ onDelete, onEdit }: ISwipeRightProps) => (
  <View style={styles.container}>
    <RectButton onPress={() => onEdit('edit')} style={styles.menuButton}>
      <Icon fill={Colors.white} width={20} height={20} name="edit-2-outline" />
    </RectButton>
    <RectButton onPress={() => onDelete('delete')} style={styles.menuButton}>
      <Icon fill={Colors.red} width={20} height={20} name="trash-outline" />
    </RectButton>
  </View>
);
