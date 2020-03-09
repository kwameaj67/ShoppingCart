import * as React from 'react';
import { Ionicons,Feather,SimpleLineIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
 if(props.icon === "home"){
  return (
    <SimpleLineIcons
      name={props.name}
      size={24}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
 }else if(props.icon === "cart"){
  return (
    <SimpleLineIcons
      name={props.name}
      size={24}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
 }
}
