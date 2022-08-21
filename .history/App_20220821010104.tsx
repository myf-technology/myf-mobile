import { View } from 'react-native';
<<<<<<< HEAD
import { useState } from 'react';
import { Dashboard } from './src/views/Dashboard';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
=======
import { VerifyEmail } from './src/views/Register/VerifyEmail';
>>>>>>> e5fbb7c8fad8fb503919aba3940a03d2b9b3ba57

export default () => {
  return (
<<<<<<< HEAD
    <GestureHandlerRootView>
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Register>
          <Dashboard />
        </Register>
      </View>
    </GestureHandlerRootView>
=======
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <VerifyEmail />
    </View>
>>>>>>> e5fbb7c8fad8fb503919aba3940a03d2b9b3ba57
  );
};
