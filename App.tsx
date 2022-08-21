import { NameEmail } from './src/views/Register/EmailName';
import { Register } from './src/views/Register';
import { Input } from './src/components';
import { View } from 'react-native';
import { useState } from 'react';
import { Dashboard } from './src/views/Dashboard';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default () => {
  const [state, setState] = useState('');
  return (
    <GestureHandlerRootView>
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Register>
          <Dashboard />
        </Register>
      </View>
    </GestureHandlerRootView>
  );
};
