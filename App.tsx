import { View } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Button } from './src/components/Button';

export default () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Button
          onPress={() => ''}
          suffixIcon={<Icon name="trash" fill="white" width={20} height={20} />}
          title="hey ho"
        />
      </View>
    </GestureHandlerRootView>
  );
};
