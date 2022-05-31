import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RECEIVE } from './constants';
import views from './views';

export default () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={RECEIVE.RECEIVE}
      screenOptions={{ headerShown: false }}
    >
      {views.map(({ component, name }) => (
        <Stack.Screen key={name} {...{ component, name }} />
      ))}
    </Stack.Navigator>
  );
};
