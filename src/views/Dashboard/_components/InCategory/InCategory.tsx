import { TouchableOpacity, View } from 'react-native';
import { Icon } from '../../../../components/Icon';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import Colors, { colorTypes } from '../../../../constants/Colors';
import { width } from '../../../../constants/responsive';

export interface inCategoryProps {
  Category?: string;
  onPress?: () => void;
  // pennyColor?: colorTypes;
}

export const InCategory = ({ Category, onPress }: inCategoryProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'space-evenly'
        }}
      >
        <Text color={Colors.yellow3}>{Category}</Text>
        {/* <Icon style={{ marginLeft: width(2) }} name='Penny' fill={pennyColor} /> */}
      </View>
      <Spacer amount={2} />
    </TouchableOpacity>
  );
};
