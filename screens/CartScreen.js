import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList,ScrollView,Image,TouchableOpacity,TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { Feather,AntDesign,FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors'

const stories = [
  {id:1,image:require('../assets/images/11-black.jpg')},
  {id:2,image:require('../assets/images/11-purple.jpg')},
  {id:3,image:require('../assets/images/11-yellow.jpg')},
  {id:4,image:require('../assets/images/11pro-gold.png')},
  {id:5,image:require('../assets/images/11pro.png')},
  {id:6,image:require('../assets/images/11-yellow.jpg')},
  {id:7,image:require('../assets/images/11pro-gold.png')},
  {id:8,image:require('../assets/images/11pro.png')},
]
const posts = [
    {key:1,name:'Fiifi_Daaku',location:"Kumasi, Ghana",mainImage:require('../assets/images/beautiful-girl.jpg',),image:require('../assets/images/11-black.jpg',)},
    {key:2,name:"KB",location:"Accra, Ghana",mainImage:require("../assets/images/party.jpg"),image:require('../assets/images/11-black.jpg')},
    {key:3,name:"queenie-sosu",location:"Legon, Ghana",mainImage:require("../assets/images/party.jpg"),image:require('../assets/images/11-black.jpg')},
    {key:4,name:'joseph_daa',location:"Adenta, Ghana",mainImage:require("../assets/images/party.jpg"),image:require('../assets/images/11-black.jpg')},
    {key:5,name:'mush-papa',location:"Ho, Ghana",mainImage:require("../assets/images/party.jpg"),image:require('../assets/images/11-black.jpg')},
]

const RenderStoryButton = (props)=> {
   return(
    <View style={{paddingHorizontal:5}}>
        <View style={{flexDirection:'column',alignItems:'center'}}>
          <TouchableOpacity activeOpacity={0.5}>
                <View style={{borderColor:Colors.ash,borderWidth:2,padding:8,margin:10,borderRadius:40}}>
                  <Image source={props.image} style={{width:40,height:40,}} resizeMode="contain"/>
                </View>
                <Text style={styles.storytxt}>Your Story</Text>
        </TouchableOpacity>
        </View>
    </View>
   )
}
// color={["#c13584","#f56040","#fcaf45"]}
const ListItem = (props) => {
    return(
      <View style={{flexDirection:'column',alignItems:'center'}}>
          <View style={{borderColor:Colors.ash,borderWidth:2,padding:8,margin:10,borderRadius:40}}>
            <Image source={props.image} style={{width:40,height:40,}} resizeMode="contain"/>
          </View>
       </View>
    )
}
const PostHeader = (props)=> {
  return(
    <View style={{}}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{borderColor:Colors.ash,borderWidth:2,padding:8,margin:10,borderRadius:40}}>
                  <Image source={props.imageheader} style={{width:40,height:40,}} resizeMode="contain"/>
                </View>
                <View style={{flexDirection:'column',alignItems:'flex-start'}}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.location}>{props.location}</Text>
                </View>
            </View>
            <View>
                <AntDesign name="ellipsis1" size={20} color="black"/>
            </View>
          </View>
    </View>
  )
}
function onChangeText (target){

}
const RenderTextInput = ()=> {
  return(
    <View>
      <TextInput
        placeholder="Add a comment"
        fontSize={15}
        style={styles.input}
        onChangeText={(value)=>{onChangeText(value)}}
      />
    </View>
  )
}
const RenderPost = (props)=> {
  return(
    <View style={{}}>
         <View>
            <Image source={props.mainImage} style={{width:500,height:300,}} resizeMode="cover"/>
        </View>
        <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',paddingHorizontal:10,}}>
            <View style={{alignItems:'center',flexDirection:'row',paddingVertical:8,}}>
              <FontAwesome name="heart-o" size={20} color="black" style={{margin:5}}/>
              <FontAwesome name="commenting-o" size={20} color="black"  style={{margin:5}} />
              <Feather name="send" size={20} color="black"  style={{margin:5}} />
            </View>
            <View>
              <FontAwesome name="bookmark-o" size={20} color="black"/>
            </View>
        </View>
        <View style={{paddingLeft:20,}}>
            <RenderTextInput/>
        </View>
    </View>
  )
}

export default function CartScreen() {
  const [text,setText] =  useState([]);
  return (
      <View style={styles.container}>
          <View style={styles.header}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Feather name="camera" size={24} color="black"/>
              </View>
              <View>
                <Text style={styles.headertxt}>Instagram</Text>
              </View>
              <View>
                <Feather name="send" size={24} color="black"/>
              </View>
          </View>
          <View style={styles.story}>
              <View>
                  <FlatList
                    data={stories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item)=> item.id.toString()}
                    renderItem={({item})=>(
                      <View>
                           {item.id === 1 ? 
                          <RenderStoryButton image={item.image}/>
                           :
                           <ListItem image={item.image}/>
                           }
                       </View>
                        
                    )}
                  />
              </View>
          </View>
         <ScrollView showsVerticalScrollIndicator={false}>
          <View>
                  <FlatList
                    data={posts}
                    keyExtractor={(item)=> item.key.toString()}
                    renderItem={({item})=>(
                      <View>
                          <PostHeader imageheader={item.image} name={item.name} location={item.location}/>
                          <View>
                            <RenderPost mainImage={item.mainImage}/>
                          </View>
                         
                      </View>
                    )}
                  />
                
            </View>
         </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:10,
    paddingTop:30,
    paddingHorizontal:10
  },
  headertxt:{
    fontSize:25,
    color:Colors.black,
    fontFamily:'Instagram',
  },
  storytxt:{
    fontSize:15,
    color:Colors.ash,
    fontFamily:'Medium',
    letterSpacing:-1,
    paddingTop:-5
  },
  name:{
    fontSize:15,
    color:Colors.black,
    fontFamily:'Medium',
    letterSpacing:-0.6,
  },
  location:{
    fontSize:14,
    color:Colors.ash,
    fontFamily:'Medium',
    letterSpacing:-0.6,
  },
  input:{
    fontFamily:'Medium',
    letterSpacing:-0.6,
    color:Colors.ash,
    fontSize:14,
  }
  
});
