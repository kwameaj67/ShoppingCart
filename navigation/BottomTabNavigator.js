import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import Orders from '../screens/Orders';
import Colors from '../constants/Colors'
import { createStackNavigator } from '@react-navigation/stack';
import MenuIcon from '../components/MenuIcon';
import CartIcon from '../components/CartIcon';
import BackIcon from '../components/BackIcon';

const BottomTab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Home';
export const cartContext = React.createContext();
const menuIcon = ()=>{
  return(
    <MenuIcon/>
  )
}

function cartIcon({}){
  const data = <CartIcon/>
  return data
}
const backIcon = ()=> {
  return(
    <BackIcon/>
  )
}
const data = ({route})=>{
  console.log(route.params)
}

const HomeStackScreens = ()=> {
    return(
      <HomeStack.Navigator>
          <HomeStack.Screen name="Home" component={HomeScreen} 
           options={{
            title:"Shopping",
            headerLeft:menuIcon,
            headerLeftContainerStyle:{
                  padding:10
                },
            headerTitleAlign:"center",
            headerRight:cartIcon,
            headerRightContainerStyle:{
              paddingRight:10
            }
            }}
          />
          <HomeStack.Screen name="Orders" component={Orders} 
            options={{
            title:"My items",
            headerLeft:backIcon,
            headerLeftContainerStyle:{
                  padding:10
                },
            headerTitleAlign:"center",
            }}
          />
      </HomeStack.Navigator>
    )
}

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
        component={HomeStackScreens}
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
