import { View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Dashboard } from './src/views/Dashboard';
import Navigation from './src/views/Dashboard/navigation';
import { NavigationContainer } from '@react-navigation/native';

export default () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </Provider>
    </NavigationContainer>
  );
};
