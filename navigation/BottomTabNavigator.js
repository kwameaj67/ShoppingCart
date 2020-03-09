import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen'
import Colors from '../constants/Colors'

const BottomTab = createBottomTabNavigator();

const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
 

  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        showLabel:true,
        activeTintColor:Colors.yellow,
        inactiveTintColor:Colors.ash,
        style:{
          backgroundColor:Colors.black,
        }
      }}
      >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Discover',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" icon="home" />,
        }}
      />
      <BottomTab.Screen
        name="Carts"
        component={CartScreen}
        options={{
          title: 'My Carts',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="basket" icon="cart" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Links':
      return 'Links to learn more';
  }
}
