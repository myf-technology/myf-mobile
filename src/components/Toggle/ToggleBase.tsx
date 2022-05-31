import { TouchableWithoutFeedback, View } from 'react-native';

import styles from './styles';
import { Iprops } from './types';

import Colors from '../../constants/Colors';
import { width } from '../../constants/responsive';

export const ToggleBase = ({ testID, onPress, on = true }: Iprops) => {
  const marginLeft = on ? width(5) : width(1);

  const backgroundColor = on ? Colors.yellow : Colors.white2;

  return (
    <TouchableWithoutFeedback
      testID={testID ? testID : 'touchable-button'}
      onPress={onPress}
    >
      <View testID="toggle-view" style={[styles.toggle, { backgroundColor }]}>
        <View testID="switch-view" style={[styles.switch, { marginLeft }]} />
      </View>
    </TouchableWithoutFeedback>
  );
};
