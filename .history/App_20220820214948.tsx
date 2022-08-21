import { NameEmail } from './src/views/Register/EmailName';
import { Register } from './src/views/Register';
import { Input } from './src/components';
import { View } from 'react-native';
import { useState } from 'react';

export default () => {
  const [state, setState] = useState('');
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Register>
        <Input value={state} onChangeText={setState} />
      </Register>
    </View>
  );
};
