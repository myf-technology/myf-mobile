/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { CreateCategorySheet } from './src/components/CreateCategorySheet';
import { Dashboard } from './src/views/Dashboard';

export default () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Dashboard />
      </View>
    </GestureHandlerRootView>
  );
};
