import { SafeAreaProvider } from 'react-native-safe-area-context';

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
        <WithProvider store={store}>
          <Navigator />
        </WithProvider>
      </SafeAreaProvider>
    );
  }
}
