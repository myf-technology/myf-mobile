import { TouchableWithoutFeedback, View } from 'react-native';

import styles from './styles';
import { Iprops } from './types';

import Colors from '../../constants/Colors';
import { width } from '../../constants/responsive';
import { Text } from '../Text';

export const Toggle = ({ testID, onPress, text, on = true }: Iprops) => {
  const marginLeft = on ? width(5) : width(1);

  const backgroundColor = on ? Colors.grey2 : Colors.yellow4;

  return (
    <TouchableWithoutFeedback testID={testID ? testID : 'touchable-button'} onPress={onPress}>
      <View style={styles.container}>
        <View>
          <Text testID='text-button' font='callout' textAlign='left'>
            {text}
          </Text>
        </View>

        <View testID='toggle-view' style={[styles.toggle, { backgroundColor }]}>
          <View testID='switch-view' style={[styles.switch, { marginLeft }]}></View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
