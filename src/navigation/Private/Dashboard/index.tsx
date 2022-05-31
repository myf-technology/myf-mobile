import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { DASHBOARD } from './constants';
import views from './views';

import { height } from '../../../constants/responsive';
import Colors from '../../../constants/Colors';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    initialRouteName={DASHBOARD.DASHBOARD}
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
      unmountOnBlur: true,
    }}
  >
    {views.map(({ name, Icon, component }) => (
      <Tab.Screen
        options={{
          tabBarIcon: () => <Icon />,

          tabBarStyle: {
            paddingBottom: height(3),
            paddingTop: height(1),
            backgroundColor: Colors.grey2,
          },
        }}
        key={name}
        {...{ name, component }}
      />
    ))}
  </Tab.Navigator>
);
