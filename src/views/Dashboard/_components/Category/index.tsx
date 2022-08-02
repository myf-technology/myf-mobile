import { TouchableOpacity } from 'react-native';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import Colors, { colorTypes } from '../../../../constants/Colors';
import { width } from '../../../../constants/responsive';

interface pressableItensProps {
  onPress: () => void;
  content: string;
  color?: colorTypes;
}
export default ({ onPress, content, color }: pressableItensProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Spacer amount={1} />
      <Text textAlign='left' color={color}>
        {content}
      </Text>
    </TouchableOpacity>
  );
};
