import { View } from 'react-native';
import { Login } from './src/views/Login';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

export default () => {
  return (
    <Provider store={store}>
      <View
        style={{
          backgroundColor: 'black',
          flex: 1,
        }}>
        <Login />
      </View>
    </Provider>
  );
};
