import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PUBLIC } from './constants';
import views from './views';

export default () => {
  const Stack = createNativeStackNavigator();
  const dev = process.env.NODE_ENV === 'development';

  return (
    <Stack.Navigator
      initialRouteName={dev ? PUBLIC.DEV : PUBLIC.HOME}
      // initialRouteName={PUBLIC.SELFIEGUIDE}
      screenOptions={{ headerShown: false }}
    >
      {views.map(({ component, name }) => (
        <Stack.Screen key={name} {...{ component, name }} />
      ))}
    </Stack.Navigator>
  );
};
