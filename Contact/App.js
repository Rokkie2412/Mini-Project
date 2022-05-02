import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Home from "./src/screens/Home";
import AddContact from "./src/screens/AddContact";


const Navigasi = () =>{
  const stack = createNativeStackNavigator()
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <stack.Screen name="Home" component={Home}/>
        <stack.Screen name="Add" component={AddContact}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

const App = () =>{
  return(
    <Navigasi/>
  )
}

export default App