import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors, height } from '../../../constants';

import { DASHBOARD } from './constants';
import views from './views';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    initialRouteName={DASHBOARD.DASHBOARD}
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
      unmountOnBlur: true,
    }}>
    {views.map(({ name, Icon, component }) => (
      <Tab.Screen
        options={{
          tabBarIcon: () => <Icon />,

          tabBarStyle: {
            paddingBottom: height(3),
            paddingTop: height(1),
            backgroundColor: Colors.grey,
          },
        }}
        key={name}
        {...{ name, component }}
      />
    ))}
  </Tab.Navigator>
);
