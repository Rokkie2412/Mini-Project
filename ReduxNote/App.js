import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import reduxStore from './src/redux/store'
import Home from './src/screens/Home'
import { PersistGate } from 'redux-persist/integration/react'
import AddNotes from './src/screens/AddNotes'

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
      <stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <stack.Screen name='Home' component={Home}/>
        <stack.Screen name='AddNotes' component={AddNotes}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App