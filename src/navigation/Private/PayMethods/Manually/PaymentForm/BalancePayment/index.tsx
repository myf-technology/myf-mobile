import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BALANCEPAYMENT } from './constants';
import views from './views';

export default () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={BALANCEPAYMENT.BALANCEPAYMENT}
      screenOptions={{ headerShown: false }}
    >
      {views.map(({ component, name }) => (
        <Stack.Screen key={name} {...{ component, name }} />
      ))}
    </Stack.Navigator>
  );
};
