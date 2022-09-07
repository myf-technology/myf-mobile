/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { Spacer, Text } from '../../../../components';
import { Colors, width } from '../../../../constants';
import { FilterIconsProps } from '../../types';

export const FilterIcons = ({
  icon = 'flag-outline',
  name = 'name',
  onPress,
}: FilterIconsProps) => (
  <View
    style={{
      justifyContent: 'center',
      width: width(20),
      alignItems: 'center',
    }}>
    <Spacer amount={3} />
    <Icon
      onPress={name => onPress(name)}
      fill={Colors.white}
      name={icon}
      width={30}
      height={30}
    />
    <Text color="yellow1">{name}</Text>
  </View>
);
