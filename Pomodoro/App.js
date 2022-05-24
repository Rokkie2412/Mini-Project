import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import Pomodoro from "./src/screens/Pomodoro"
const App = () =>{
  const stack = createNativeStackNavigator()
  return(
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home">
        <stack.Screen name="Home" component={Pomodoro}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App