/* eslint-disable react-native/no-inline-styles */
import { TouchableOpacity, View } from 'react-native';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import { ColorNames } from '../../../../constants';

export interface inCategoryProps {
  Category?: string;
  onPress?: () => void;
  pennyColor?: ColorNames;
}

export const InCategory = ({ Category, onPress }: inCategoryProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Text color="green">{Category}</Text>
      </View>
      <Spacer amount={2} />
    </TouchableOpacity>
  );
};
