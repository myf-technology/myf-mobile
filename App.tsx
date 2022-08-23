import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Colors } from './src/constants';
import { Dashboard } from './src/views/Dashboard';

export default () => {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor: Colors.black,
      }}>
      <Dashboard />
    </GestureHandlerRootView>
  );
};
