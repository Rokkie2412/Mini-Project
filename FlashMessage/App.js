import React from "react";
import {StyleSheet} from 'react-native'
import FlashMessage from "react-native-flash-message";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
function App() {
  const stack = createNativeStackNavigator()
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName="First" screenOptions={{headerShown:false}}>
        <stack.Screen name="First" component={FirstPage}/>
        <stack.Screen name="Second" component={SecondPage}/>
      </stack.Navigator>
      <FlashMessage position='top'/>
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({

})

export default App