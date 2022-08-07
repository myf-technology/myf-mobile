import { TouchableOpacity, View } from 'react-native';
import { Icon } from '../../../../../components/Icon';
import { Spacer } from '../../../../../components/Spacer';
import { Text } from '../../../../../components/Text';
import Colors from '../../../../../constants/Colors';
import { width } from '../../../../../constants/responsive';

export interface CategoryListProps {
  ExpensiveCategory: string;
}

export const ExpensiveCategory = ({ ExpensiveCategory }: CategoryListProps) => {
  return (
    <TouchableOpacity style={{ flexDirection: 'row' }}>
      <Text color={Colors.yellow3}>{ExpensiveCategory}</Text>
      <Icon style={{ marginLeft: width(2) }} name='Penny' fill='red' />
      <Spacer amount={4} />
    </TouchableOpacity>
  );
};
