import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from '../navigation/BottomTabNavigator'
import Orders from '../navigation/Drawer/Orders';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const DrawerScreens = () => {
    return(
      <Drawer.Navigator >
          <Drawer.Screen name="Home" component={BottomTabNavigator} headerMode="none"/>
          <Drawer.Screen name="Orders" component={Orders}/>
      </Drawer.Navigator>
    )
}
export default function MyStack({navigation}) {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="App" component={DrawerScreens} />
    </Stack.Navigator>
  );
}