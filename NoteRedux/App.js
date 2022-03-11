import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/Home'
import AddNotes from './src/screens/AddNotes'


const stack = createNativeStackNavigator()

function App (){
  return(
    <NavigationContainer >
      <stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <stack.Screen name="Home" component={Home}/>
        <stack.Screen name="AddNotes" component={AddNotes}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;