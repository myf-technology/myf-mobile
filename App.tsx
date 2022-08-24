import { View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Dashboard } from './src/views/Dashboard';

export default () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'black' }}>
          <Dashboard />
        </View>
      </GestureHandlerRootView>
    </Provider>
  );
};
