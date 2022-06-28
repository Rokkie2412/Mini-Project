/**
 * @flow
 */

import * as React from 'react';
import ContactApp from './src/screens/ContactApp'
import {Provider} from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = ():React.Node =>{
  const Stack = createNativeStackNavigator();
  return(
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={ContactApp} />
          </Stack.Navigator>
        </NavigationContainer>
  )
}

export default App
