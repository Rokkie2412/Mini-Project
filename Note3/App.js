import React from 'react'
import {Text,View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Notes from './src/screens/Notes';
import AddNotes from './src/screens/AddNotes';

const stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName='Notes' screenOptions={{headershown:false}}>
      <stack.Screen name='Notes' component={Notes}/>
      <stack.Screen name='AddNotes' component={AddNotes}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;