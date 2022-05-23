import React from 'react';
import Contacts from './src/screen/Contacts';
import AddContacts from './src/screen/AddContacts';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const stack = createNativeStackNavigator()
function Navigators(){
  return(
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home">
        <stack.Screen name="Home" component={Contacts}/>
        <stack.Screen name="Add" component={AddContacts}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

function App(){
  return(
    <Navigators/>
  )
}

export default App