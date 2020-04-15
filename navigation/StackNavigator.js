import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from '../navigation/BottomTabNavigator'
import { SimpleLineIcons, } from '@expo/vector-icons'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeIcon = ()=>{
  return(
      <SimpleLineIcons name="home" color="black" size={20} />
  )
}

const DrawerScreens = () => {
    return(
      <Drawer.Navigator 
      drawerStyle={{
            width:280,
            backgroundColor: 'white',
        }}
        drawerContentOptions={{
            activeTintColor: '#e91e63',
            itemStyle: { marginVertical: 0, },
        }}
        drawerType="slide"
        >
          <Drawer.Screen name="Home" component={BottomTabNavigator}
             options={{
                        drawerIcon:HomeIcon,
                        gestureEnabled:true,
                        drawerLabel:"My Home",
                    }}/>
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