import React from 'react'
import { useNavigation,DrawerActions  } from '@react-navigation/native'
import { TouchableNativeFeedback,View } from 'react-native'
import { Feather } from '@expo/vector-icons'

function MenuIcon(){
    const navigation = useNavigation() 
    return(
      <TouchableNativeFeedback onPress={()=>{navigation.dispatch(DrawerActions.openDrawer())}} background={TouchableNativeFeedback.SelectableBackgroundBorderless()}  >
        <View>
         <Feather name="menu" color="black" size={20} />
        </View>
      </TouchableNativeFeedback>
  )
  }
  export default MenuIcon;