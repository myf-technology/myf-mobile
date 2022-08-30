import { Provider } from 'react-redux';
import { store } from './src/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Login } from './src/views/Login';

export default () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider
          style={{
            flex: 1,
            backgroundColor: 'black',
            justifyContent: 'center',
          }}>
          <Login />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </Provider>
  );
};
