import React from 'react'
import { View,Text,StyleSheet,FlatList,Image,TouchableOpacity } from 'react-native'
import Colors from '../../constants/Colors'
import Header from '../../components/Header'
import { AntDesign } from '@expo/vector-icons'

export default function Orders({route,navigation}){

    const { product } = route.params;

    // console.log(route.params)

    function getTotalAmount(){
        let amount = 0;

        product.forEach(element => {
            amount += element.price
        })
        return amount;
    }
    function renderLeftAction(){
        return (
			<TouchableOpacity onPress={() =>navigation.pop()}>
				<View style={{ padding: 7 }}>
					<AntDesign name='left' color='black' size={20} />
				</View>
			</TouchableOpacity>
		);
    }
    return(
            <View style={styles.container}>
             {/* <Header leftAction={renderLeftAction()}/> */}
                <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:20,justifyContent:'space-between'}}>
                    <Text style={styles.NumOfItems}>Items : {product.length}</Text>
                    <Text style={styles.totalPrice}>Total Price : ${getTotalAmount()}</Text>
                </View>
                <View>
                    <FlatList
                        data={product}
                        keyExtractor={(item)=> item.id.toString()}
                        renderItem={({item})=>(
                            <View style={{paddingHorizontal:8,paddingVertical:2}}>
                                     <View key={item.id} style={{flexDirection:'column',paddingBottom:5}}>
                                <View style={{flexDirection:'row',}}>
                                    <View>
                                    <Image source={item.image} style={{width:120,height:120}} resizeMode="contain"/>
                                    </View>
                                    <View style={{flexDirection:'column',flex:1}} accessible={true}>
                                        <Text style={[styles.name,{paddingTop:25}]}>{item.name}</Text>
                                        <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
                                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingTop:-10}}>
                                            <Text style={[styles.price,{paddingVertical:0}]}>${item.price}</Text>
                                        </View>
                                    </View>
                                    
                                </View>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:30,
        backgroundColor: '#fff',
    },
    totalPrice:{
        fontSize:14,
        color:Colors.ash,
        fontFamily:'Medium'
    },
    NumOfItems:{
        fontSize:14,
        color:Colors.black,
        fontFamily:'Medium'
    },
    price:{
        fontSize:14,
        color:Colors.black,
        fontFamily:'Medium'
      },
      description:{
        fontSize:14,
        color:'grey',
        fontFamily:'Medium',
        letterSpacing:-0.4
      },
      name:{
        fontSize:16,
        fontFamily:'Medium',
        letterSpacing:-0.8
      },
})