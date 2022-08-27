import { View } from 'react-native';
import { Input } from '../../components';
import { styles } from './styles';
import React, { useState } from 'react';

export const Login = () => {
  return (
    <View style={styles.loginContainer}>
      <Input placeholder="Entre com email..." />
    </View>
  );
};
