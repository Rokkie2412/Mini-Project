import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import Home from './src/screens/Home'
import AddNotes from './src/screens/AddNotes'
import { store } from './src/redux/store'


const stack = createNativeStackNavigator()

function App (){
  return(
    <Provider store={store}>
      <NavigationContainer >
        <stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
          <stack.Screen name="Home" component={Home}/>
          <stack.Screen name="AddNotes" component={AddNotes}/>
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;