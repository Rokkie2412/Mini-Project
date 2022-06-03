import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import Pomodoro from "./src/screens/Pomodoro"
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import reduxStore from './src/redux/store'
const App = () =>{
  const {store,persistor} = reduxStore()
  // console.log(store)
  const stack = createNativeStackNavigator()
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home">
            <stack.Screen name="Home" component={Pomodoro}/>
          </stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App