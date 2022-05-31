import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import { Iprops } from './types';

import Colors from '../../../../../constants/Colors';
import styles from '../../../../Input/styles';
import { Text } from '../../../../Text';

// [TODO]: animate the texts inside each input
// **[TODO]: check if the root view layout still ok (view mother wasn't a view, it was < ></ >
// changing to a view may break layout)**
export const IosDatePicker = ({ label, inputs, testID, onPress }: Iprops) => (
  <View testID={testID}>
    <Text textAlign="left" font="callout" testID="ios-label-datepicker">
      {label}
    </Text>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      {inputs?.map(({ value, placeholder }, index: number) => (
        <TouchableWithoutFeedback key={index} onPress={onPress}>
          <View style={[styles.input, style.fakeInput]}>
            <Text
              testID="ios-input-placeholder"
              color={value ? Colors.dark : Colors.white2}
              font="body"
            >
              {value ? value : placeholder}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  </View>
);

const style = StyleSheet.create({
  fakeInput: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
