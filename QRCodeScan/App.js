import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Scanner from './Scanner'
import Infomation from './Infromation'
const stack = createNativeStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
    <stack.Navigator initialRouteName='Scanner' screenOptions={{headerShown:false}}>
      <stack.Screen name='Scanner' component={Scanner}/>
      <stack.Screen name='info' component={Infomation}/>
    </stack.Navigator>
  </NavigationContainer>
  )
}

export default App