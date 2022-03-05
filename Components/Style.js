import { Platform } from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

module.exports = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#ffffff'
   },
   searchButton:{
      backgroundColor:"#FFEFE9",
      height:50,
      width:"90%",
      alignSelf:"center",
      marginTop:20,
      borderRadius:25,
      flexDirection:"row",
      justifyContent:"space-between"
   },
   whiteView:{
      backgroundColor:"#fff",
      borderRadius:10,
      elevation:5,
      shadowColor:"#C0B9B7",
      shadowOffset:{width:1,height:1},
      width:Dimensions.get('window').width/1.05,
      alignSelf:"center"
   },
   profileImg:{
      height:80,
      width:80,
      borderRadius:15
   },
   orangeView:{
      backgroundColor:"#FFEFE9",
      borderRadius:10,
      width:Dimensions.get('window').width/1.2,
      alignSelf:"center"
   },
   acceptButton:{
      backgroundColor:"#FF7C4A",
      width:"40%",
      justifyContent:"center",
      height:45,
      borderRadius:10
   },
   ignoreButton:{
      borderWidth:1,
      borderColor:"#FF7C4A",
      width:"40%",
      justifyContent:"center",
      height:45,
      borderRadius:10
   },
   button:{
      backgroundColor:"#FF7C4A",
      width:"85%",
      justifyContent:"center",
      height:40,
      borderRadius:8,
      marginTop:15,
      alignSelf:"flex-start"
   },
   text1:{
      color:"#fff",
      fontWeight:"bold",
      alignSelf:"center",
      fontSize:Platform.OS == "android" ? RFValue(12,580) :RFValue(15,580)
   },
   horizontalLine:{
      height:1,
      backgroundColor:"#F9F9F9",
      width:"100%"
   }
}) 