import React,{useState} from 'react'
import { useNavigation,} from '@react-navigation/native'
import { TouchableNativeFeedback,View,Text } from 'react-native'
import { Feather ,SimpleLineIcons} from '@expo/vector-icons'

function CartIcon(props){
    const navigation = useNavigation(); 
    return(
      <TouchableNativeFeedback onPress={()=>{ navigation.navigate("Orders",)}} background={TouchableNativeFeedback.SelectableBackgroundBorderless()}  >
                 <View  style={{flexDirection:'row',alignItems:'center'}}>
                  <SimpleLineIcons name="basket" size={24} color="black"/>
                    <Text style={{fontSize:16,fontFamily:'Regular',letterSpacing:-1,paddingLeft:5}}>{props.length}</Text>
                 </View>
      </TouchableNativeFeedback>
  )
  }
  export default CartIcon;