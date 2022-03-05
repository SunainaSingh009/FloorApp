import React, { Component } from "react";
import {Text,View} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//screen imports
import Home from "./Screens/Home";
import Search from "./Screens/Search";


const Stack = createStackNavigator();

class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />

          <Stack.Screen name="Search" component={Search} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;