import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CARD } from './constants';
import views from './views';

export default () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={CARD.CARD}
      screenOptions={{ headerShown: false }}
    >
      {views.map(({ component, name }) => (
        <Stack.Screen key={name} {...{ component, name }} />
      ))}
    </Stack.Navigator>
  );
};
