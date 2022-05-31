import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { Text } from '../../../../components/Text';
import { height, width } from '../../../../constants/responsive';

export const SquaredInput = ({ children }) => {
  const onBlur = () => {};

  return (
    <View style={{ flexDirection: 'row' }}>
      <TextInput
        maxLength={1}
        keyboardType="numeric"
        onBlur={onBlur}
        style={styles.input}
        placeholder="0"
      >
        <Text font="title">{children}</Text>
      </TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    elevation: 2,
    width: width(17),
    height: height(8),
    textAlign: 'center',
    borderRadius: 8,
    margin: 6,
  },
  inputReverse: {
    elevation: 2,
    width: width(17),
    height: height(8),
    textAlign: 'center',
    borderRadius: 8,
    margin: 6,
    backgroundColor: 'black',
  },
});
