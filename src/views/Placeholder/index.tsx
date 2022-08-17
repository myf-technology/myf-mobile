import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Icon } from '../../components/Icon';
import { Text } from '../../components/Text';
import Colors from '../../constants/Colors';

export const Placeholder = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.dark,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon name='ArrowBack' />
      <Text color='blue' font='title2'>
        Placeholder Screen
      </Text>
    </View>
  );
};
