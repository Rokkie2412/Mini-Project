import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Notes from './src/screens/Notes';
import AddNotes from './src/screens/AddNotes';
import EditNotes from './src/screens/EditNotes';

const stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName='Notes' screenOptions={{headerShown:false}}>
      <stack.Screen name='Notes' component={Notes}/>
      <stack.Screen name='AddNotes' component={AddNotes}/>
      <stack.Screen name='EditNotes' component={EditNotes}/>
      </stack.Navigator>  
    </NavigationContainer>
  )
}

export default App;