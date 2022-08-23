import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CreateCategorySheet } from './src/components/CreateCategorySheet';

export default () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CreateCategorySheet />
    </GestureHandlerRootView>
  );
};
