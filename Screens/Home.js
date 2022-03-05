import React, { Component } from "react";
import { Platform, Pressable, SafeAreaView,
   StyleSheet, Text,TouchableOpacity,
   View, Image} from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { RFValue } from "react-native-responsive-fontsize";


const styles = require('../Components/Style.js');

class Home extends Component{

   constructor(props){
      super(props);
   }

   render(){
      return(
      <SafeAreaView style={{flex: 1, backgroundColor: "#151415" }}>
         <View style={[styles.container,{backgroundColor:Platform.OS == "ios" ? "#F8F8F8" : "#fff"}]}>
            <View>

               {/* view for search button */}
               <Pressable style={styles.searchButton}
               onPress={()=>this.props.navigation.navigate("Search")}>
                  <View style={{width:"50%",}}>
                     <Text style={style.textSearch}>Search</Text>
                  </View>
                  <View style={{flexDirection:"row",alignSelf:"center",width:"40%",
                     paddingVertical:Platform.OS == "ios" ? 12 :13,
                     paddingRight:15,justifyContent:"space-evenly",}}>
                     <Icon name="camera" size={25} type="ionicon" color="#000"/>

                     <Icon name="pricetags" type="ionicon" color="#000"/>

                     <Icon name="notifications" type="ionicon" color="#000"/>

                     <Icon name="ellipsis-vertical" color="#C0B9B7" type="ionicon"/>
                  </View>
               </Pressable>

               {/* view for content */}
               <View style={[styles.whiteView,{marginTop:20}]}>
                  <View style={{padding:10,flexDirection:"row",marginLeft:10}}>
                     <Image source={require('../Images/index.jpg')} style={styles.profileImg}/>

                     <View style={{padding:10}}>
                        <Text style={{fontWeight:"600",color:"#000",fontSize:Platform.OS == "ios" ? RFValue(15,580) : RFValue(12,580)}}>Good morning, 
                           <Text style={{color:"#FF7C4A"}}> Amy jones!</Text>
                        </Text>

                        <Text style={{marginTop:10,color:"#000",fontSize:Platform.OS == "ios" ? RFValue(15,580) : RFValue(12,580)}}>You have 
                        <Text style={{color:"#FF7C4A",fontWeight:"600"}}> 2</Text> new visitors</Text>
                     </View>
                  </View>

                  <View style={[styles.orangeView,{padding:10,marginBottom:15,marginTop:10}]}>
                     {/* view for image and name */}
                    <View style={{flexDirection:"row"}}>
                        <Image source={require('../Images/dummy-profile.png')} style={style.profileImg}/>

                        <View style={{padding:10}}>
                           <Text style={{fontWeight:"400",color:"#000",fontSize:Platform.OS == "ios" ? RFValue(15,580) : RFValue(12,580)}}>
                              Peter Bonner
                           </Text>

                           <Text style={{marginTop:5,color:"#FF7C4A",fontSize:Platform.OS == "ios" ? RFValue(13,580) : RFValue(12,580)}}>
                              See Profile
                           </Text>
                        </View>
                    </View>

                    {/* buttons accept and ignore */}
                    <View style={{flexDirection:"row",marginBottom:10,marginTop:10,justifyContent:"space-evenly"}}>
                       <TouchableOpacity style={styles.acceptButton}>
                          <Text style={{alignSelf:"center",color:"#fff",fontWeight:"bold",
                        fontSize:Platform.OS == "ios" ? RFValue(15,580) : RFValue(13,580)}}>Accept</Text>
                       </TouchableOpacity>

                       <TouchableOpacity style={styles.ignoreButton}>
                          <Text style={{alignSelf:"center",color:"#FF7C4A",fontWeight:"bold",
                        fontSize:Platform.OS == "ios" ? RFValue(15,580) : RFValue(13,580)}}>Ignore</Text>
                       </TouchableOpacity>
                    </View>

                    <View>
                       <Text style={{fontWeight:"600",alignSelf:"center",marginBottom:10,color:"#C2BBB7",fontSize:Platform.OS == "ios" ? RFValue(14,580) : RFValue(12,580)}}>The request will expire in 
                          <Text style={{color:"#FF7C4A",fontWeight:"600"}}> 09:55</Text>
                       </Text>
                    </View>
                  </View>

                  
               </View>
            </View>
         </View>
      </SafeAreaView>
      )
   }
}

export default Home;

const style=StyleSheet.create({
   textSearch:{
      fontSize:Platform.OS == "ios" ? RFValue(14,580) : RFValue(12,580),
      alignSelf:"flex-start",
      paddingVertical:Platform.OS == "ios" ? 17 :13,
      paddingLeft:15,
      color:"#C0B9B7"
   },
   profileImg:{
      height:60,
      width:60,
      borderRadius:15
   }
})