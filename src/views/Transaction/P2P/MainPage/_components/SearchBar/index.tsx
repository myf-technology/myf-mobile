import { TextInput, View } from 'react-native';

import Colors from '../../../../../../constants/Colors';

export const SearchBar = () => (
  <View>
    <TextInput
      placeholderTextColor={Colors.grey2}
      placeholder="  Quem você quer cobrar ?"
    />
  </View>
);
