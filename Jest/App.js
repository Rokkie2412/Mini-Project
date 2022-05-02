import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import reduxStore from './Redux/store'
import Home from './TodoList'
import Mentahan from './Mentahan'
import { PersistGate } from 'redux-persist/integration/react'

const stack = createNativeStackNavigator()

const App = () =>{
  const {store,persistor} = reduxStore()
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigators/>
      </PersistGate>
    </Provider>
  )
}

const Navigators = () => {
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName='Mentah' screenOptions={{headerShown:false}}>
        <stack.Screen name='Home' component={Home}/>
        <stack.Screen name='Mentah' component={Mentahan}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App