import React, { Component } from "react";
import { Platform, Pressable, SafeAreaView,
   StyleSheet, Text,TouchableOpacity,ScrollView,Image,
   View } from "react-native";
import { Icon,Input } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";


const styles = require('../Components/Style.js');

class Search extends Component{

   constructor(props){
      super(props);
   }

   render(){
      return(
      <SafeAreaView style={{flex: 1, backgroundColor: "#151415" }}>
         <View style={[styles.container,{backgroundColor:"#EEF2FB"}]}>
            <View>
            <Input  
             placeholder='Search'
             placeholderTextColor="#000"
             keyboardType="default"
             placeholderTextColor="#000"
             autoFocus={true}
             leftIcon={
             <Text onPress={()=>this.props.navigation.goBack()}>
                <Icon
                name='arrow-back-outline'
                size={25}
                type='ionicon'
                color='#000'
                style ={{marginTop:Platform.OS == "android" ? 16 :20,paddingRight:5}}
            />
             </Text>
            }
            rightIcon={
               <Icon
                name='camera'
                size={25}
                type='ionicon'
                color='#000'
                style ={{marginTop:15,paddingRight:10}}
            />
            }
            style ={{marginTop:20,fontSize:RFValue(15,580),marginLeft:15,color:'#eee',borderBottomColor:'#eee'}}
           />
           
            </View>

            {/* view for category buttons */}
            <View>
               <View style={{marginBottom:10,marginTop:5}}>
                  <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={{justifyContent:"space-evenly"}}>
                           <TouchableOpacity style={style.categoryButton}>
                              <Text style={style.categoryButtonText}>
                                 Number
                              </Text>
                           </TouchableOpacity>

                           <TouchableOpacity style={style.categoryButton}>
                              <Text style={style.categoryButtonText}>
                                 Name
                              </Text>
                           </TouchableOpacity>

                           <TouchableOpacity style={style.categoryButton}>
                              <Text style={style.categoryButtonText}>
                                 Phone/Email
                              </Text>
                           </TouchableOpacity>

                           <TouchableOpacity style={style.categoryButton}>
                              <Text style={style.categoryButtonText}>
                                 Promotions
                              </Text>
                           </TouchableOpacity>

                           <TouchableOpacity style={style.categoryButton}>
                              <Text style={style.categoryButtonText}>
                                 Name
                              </Text>
                           </TouchableOpacity>

                           <TouchableOpacity style={style.categoryButton}>
                              <Text style={style.categoryButtonText}>
                                 Phone/Email
                              </Text>
                           </TouchableOpacity>

                           <TouchableOpacity style={style.categoryButton}>
                              <Text style={style.categoryButtonText}>
                                 Promotions
                              </Text>
                           </TouchableOpacity>


                           
                  </ScrollView>
               </View>
            </View>
            
            <View>
               <Text style={{paddingHorizontal:15,
               marginTop:10,color:"#000",fontSize:Platform.OS == "android" ? RFValue(11,580) : RFValue(13,580)}}>
                  Quick Results
               </Text>
            </View>
            {/* view for content */}
            <View style={[styles.whiteView,{marginTop:20}]}>
                  <View style={{padding:10,flexDirection:"row",marginLeft:10,width:"100%"}}>
                     <View style={{width:"20%"}}>
                        <Image source={require('../Images/dummy-profile.png')} style={style.profileImg}/>
                     </View>

                     <View style={{padding:10,width:"45%"}}>
                        <Text style={{fontWeight:"600",color:"#000",fontSize:Platform.OS == "ios" ? RFValue(15,580) : RFValue(12,580)}}>
                           Peter Bonner 
                        </Text>

                        <Text style={{marginTop:0,color:"#B3B8C0",fontSize:Platform.OS == "ios" ? RFValue(15,580) : RFValue(12,580)}}>
                           +44 211 782</Text>
                     </View>

                     <View style={{width:"35%"}}>
                        <TouchableOpacity style={styles.button}>
                           <Text style={styles.text1}>Check-in</Text>
                        </TouchableOpacity>
                     </View>
                  </View>

                  <View style={styles.horizontalLine}></View>

                  <View style={{padding:10,flexDirection:"row",marginLeft:10,width:"100%"}}>
                     <View style={{width:"20%"}}>
                        <Image source={require('../Images/index.jpg')} style={style.profileImg}/>
                     </View>

                     <View style={{padding:10,width:"45%"}}>
                        <Text style={{fontWeight:"600",color:"#000",fontSize:Platform.OS == "ios" ? RFValue(15,580) : RFValue(12,580)}}>
                           Amy Jones
                        </Text>

                        <Text style={{marginTop:0,color:"#B3B8C0",fontSize:Platform.OS == "ios" ? RFValue(15,580) : RFValue(12,580)}}>
                           +44 211 782</Text>
                     </View>

                     <View style={{width:"35%"}}>
                        <TouchableOpacity style={styles.button}>
                           <Text style={styles.text1}>Check-in</Text>
                        </TouchableOpacity>
                     </View>
                  </View>

                  
               </View>
         </View>
      </SafeAreaView>
      )
   }
}

export default Search;

const style=StyleSheet.create({
   textSearch:{
      fontSize:Platform.OS == "ios" ? RFValue(14,580) : RFValue(12,580),
      alignSelf:"flex-start",
      paddingVertical:Platform.OS == "ios" ? 17 :13,
      paddingLeft:15,
      color:"#C0B9B7"
   },
   categoryButton:{
      padding:10,
      borderColor:"#B3B8C0",
      borderRadius:10,
      borderWidth:2,
      marginLeft:20
    },
    categoryButtonText:{
      fontSize:RFValue(12,580),
      color:"#000",
      fontWeight:"700"
    },
    profileImg:{
      height:60,
      width:60,
      borderRadius:100,
      borderColor:"#FF7C4A",
      borderWidth:1
    }
})