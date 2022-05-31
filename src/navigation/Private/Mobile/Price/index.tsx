import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PRICE } from './constants';
import views from './views';

export default () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={PRICE.PRICE}
      screenOptions={{
        headerShown: false,
      }}
    >
      {views.map(({ component, name }) => (
        <Stack.Screen key={name} {...{ component, name }} />
      ))}
    </Stack.Navigator>
  );
};

//stack destiny needs review !!!
