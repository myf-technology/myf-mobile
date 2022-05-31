import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Example } from './Example';

import { WithProvider } from './src/hoc/WithProvider';
import useCachedResources from './src/hooks/useCachedResources';
import Navigator from './src/navigation';
import store from './src/store';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <View
          style={{
            backgroundColor: '#222',
            flex: 1
            // padding: 20
          }}
        >
          <Example />
        </View>
      </SafeAreaProvider>
    );
  }
}
