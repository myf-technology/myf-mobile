import { TouchableOpacity } from 'react-native';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import { ColorNames } from '../../../../constants';

interface pressableItensProps {
  onPress: () => void;
  content: any;
  color?: ColorNames;
}
export default ({ onPress, content, color }: pressableItensProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Spacer amount={1} />
      <Text textAlign="left" color={color}>
        {content}
      </Text>
    </TouchableOpacity>
  );
};
