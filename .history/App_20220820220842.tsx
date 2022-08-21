import { NameEmail } from './src/views/Register/EmailName';
import { Register } from './src/views/Register';
import { Input } from './src/components';
import { View } from 'react-native';
import { useState } from 'react';
import { Password } from './src/views/Register/Password';

export default () => {
  const [state, setState] = useState('');
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Password />
    </View>
  );
};
