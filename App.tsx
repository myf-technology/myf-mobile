import { ActivityIndicator, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Button } from './src/components/Button';

export default () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Button
          onPress={() => ''}
          suffixIcon={() => <ActivityIndicator />}
          title="hey ho"
        />
      </View>
    </GestureHandlerRootView>
  );
};
