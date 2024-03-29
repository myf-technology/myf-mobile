import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PRIVATE } from './constants';
import views from './views';

export default () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={PRIVATE.DASHBOARD}
      screenOptions={{
        headerShown: false,
      }}>
      {views.map(({ component, name }) => (
        <Stack.Screen key={name} {...{ component, name }} />
      ))}
    </Stack.Navigator>
  );
};
