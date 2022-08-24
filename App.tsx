import { View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { Dashboard } from './src/views/Dashboard';

export default () => {
  return (
    <Provider store={store}>
      <View
        style={{
          backgroundColor: 'black',
          flex: 1,
        }}>
        <Dashboard />
      </View>
    </Provider>
  );
};
