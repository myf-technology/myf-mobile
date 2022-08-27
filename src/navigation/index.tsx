import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Private from './Private';
import { NAVIGATORS } from './constants';
import Public from './Public';

const Stack = createNativeStackNavigator();

const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={NAVIGATORS.PUBLIC} component={Public} />
      <Stack.Screen name={NAVIGATORS.PRIVATE} component={Private} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
