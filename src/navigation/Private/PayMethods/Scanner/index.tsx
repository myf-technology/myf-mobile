import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCANNER } from './constants';
import views from './views';

export default () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={SCANNER.SCANNER}
      screenOptions={{ headerShown: false }}
    >
      {views.map(({ component, name }) => (
        <Stack.Screen key={name} {...{ component, name }} />
      ))}
    </Stack.Navigator>
  );
};
