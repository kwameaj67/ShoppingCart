import React, { useState,useEffect } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, FlatList,StatusBar,Dimensions,ScrollView} from 'react-native';
import Colors from '../constants/Colors';
import { SimpleLineIcons,Feather } from '@expo/vector-icons';

const products = [
  {id:0,name:"iPhone 11 ",description:"256GB,Yellow - Fully Unlocked (Renewed)",image:require("../assets/images/11-yellow.jpg"),price:799},
  {id:1,name:"iPhone 11 ",description:"Purple in color.128Gb Fully Locked.",image:require("../assets/images/11-purple.jpg"),price:649},
  {id:2,name:"iPhone 11 pro ",description:"Fully Unlocked. Gold. 256Gb",image:require("../assets/images/11pro-gold.png"),price:1499},
  {id:3,name:"iPhone Xs-Max",description:"64GB, Black - Fully Unlocked (Renewed)Fully Black",image:require("../assets/images/iPhoneXs-Max.jpg"),price:999},
  {id:4,name:"iPhone 11 black",description:"Fully Unlocked. Gold in color,64GB",image:require("../assets/images/11-black.jpg"),price:599},
  {id:5,name:"iPhone 11 pro",description:"128GB, Purple - Fully Locked - Fully Unlocked",image:require("../assets/images/11pro.png"),price:499},
  {id:6,name:"iPhone Xs-Max",description:"64GB, Black - Fully Unlocked (Renewed)Fully Black",image:require("../assets/images/iPhoneXs-Max.jpg"),price:999},
  {id:7,name:"iPhone 11 ",description:"256GB,Yellow - Fully Unlocked (Renewed)",image:require("../assets/images/11-yellow.jpg"),price:799},
  {id:8,name:"iPhone 11 black",description:"Fully Unlocked. Gold in color,64GB",image:require("../assets/images/11-black.jpg"),price:599},
  {id:9,name:"iPhone 11 pro",description:"128GB, Purple - Fully Locked - Fully Unlocked",image:require("../assets/images/11pro.png"),price:499}
]

 function HomeScreen({navigation}) {
   
  const [product, setProducts] = useState([]);


  


  return (
    <View style={styles.container}>
       <View style={{paddingTop:30}}>
          {/* <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
              <View style={{paddingLeft:20}}>
                <Text style={{fontSize:18,fontFamily:'Medium',letterSpacing:-2,color:'grey'}}>Our</Text>
                <Text style={{fontSize:20,fontFamily:'Medium',letterSpacing:-1}}>Products</Text>
              </View>
               <View style={{flexDirection:'column',alignItems:'center',paddingRight:20}}>
                  <Text style={{fontSize:20,fontFamily:'Medium',letterSpacing:-1}}>Cart: {product.length}</Text>
                  <TouchableOpacity onPress={()=>{setProducts([])}} accessible={true}  accessibilityLabel="Tap me!">
                        <View  style={{borderRadius:2,backgroundColor:Colors.black,padding:10}}>
                            <Text style={styles.btnText}>Clear</Text>
                        </View>
                    </TouchableOpacity>
              </View>
          </View> */}
          <View style={{paddingHorizontal:30,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
             <TouchableOpacity onPress={()=>{navigation.openDrawer()}}>
                <Feather name="menu" size={20} color="black"/>
             </TouchableOpacity>
              <View>
                <TouchableOpacity onPress={()=>{ navigation.navigate("Orders",{product});}}>
                 <View  style={{flexDirection:'row',alignItems:'center'}}>
                  <SimpleLineIcons name="basket" size={24} color="black"/>
                    <Text style={{fontSize:16,fontFamily:'Regular',letterSpacing:-1,paddingLeft:10}}>{product.length}</Text>
                 </View>
              </TouchableOpacity>
              </View>
          </View>
          <FlatList
            data={products}
           // extraData={products}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item)=> item.id.toString()}
            renderItem={({item})=>(
              <View style={{paddingHorizontal:8,paddingVertical:2}}>
                    <View key={item.id} style={{flexDirection:'column',paddingBottom:5}}>
                      <View style={{flexDirection:'row',}}>
                        <View>
                          <Image source={item.image} style={{width:120,height:120}} resizeMode="contain"/>
                        </View>
                          <View  style={{flexDirection:'column',flex:1}} accessible={true}>
                              <Text style={[styles.name,{paddingTop:25}]}>{item.name}</Text>
                              <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
                              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingTop:-10}}>
                                <Text style={[styles.price,{paddingVertical:0}]}>${item.price}</Text>
                                <View style={{}}>
                                  { product.includes(item) ?
                                      <TouchableOpacity onPress={()=> {
                                        setProducts(product.filter(product1 => item !== product1));
                                      }}  activeOpacity={0.6} accessible={true}  accessibilityLabel="Tap me!">
                                          <View style={styles.btn}>
                                                <Text style={styles.btnText} accessibilityLabel="click me">Remove</Text>
                                          </View>
                                    </TouchableOpacity>
                                  : 
                                  <TouchableOpacity onPress={()=>{
                                    
                                    setProducts([...product, item])
                                    console.log(product)
                                    }
                                   
                                    } activeOpacity={0.6} accessible={true}  accessibilityLabel="Tap me!">
                                          <View style={styles.btn} >
                                                <Text style={styles.btnText} accessibilityLabel="click me">Add to cart</Text>
                                          </View>
                                    </TouchableOpacity>
                                  }
                                </View>
                            </View>
                          </View>
                         
                      </View>
                    </View>
                </View>
            )}
          />
       </View>
    </View>
  );
}
export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  btn:{
    borderRadius:3,
    backgroundColor:Colors.black,
    padding:10
  },
  btnText:{
    fontSize:12,
    fontFamily:'Medium',
    letterSpacing:-0.6,
    color:'white'
  }
  
});
