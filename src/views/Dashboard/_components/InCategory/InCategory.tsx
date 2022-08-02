import { TouchableOpacity, View } from 'react-native';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import Colors from '../../../../constants/Colors';

export interface inCategoryProps {
  Category?: string;
  onPress?: () => void;
}

export const InCategory = ({ Category, onPress }: inCategoryProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text color={Colors.yellow}>{Category}</Text>
      </View>
      <Spacer amount={2} />
    </TouchableOpacity>
  );
};
