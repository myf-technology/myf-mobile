import React from 'react';
import {View} from 'react-native';
import {Login} from './src/views/Login';

export default () => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
      }}>
      <Login />
    </View>
  );
};
