import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Scanner from './Scanner'
import Ion from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import Infomation from './Infromation'
import {StyleSheet,Pressable} from 'react-native'
const stack = createNativeStackNavigator()

const App = ({navigation}) => {
  return(
    <NavigationContainer>
    <stack.Navigator initialRouteName='Scanner'>
      <stack.Screen name='Scanner' component={Scanner} options={({navigation,route})=>({
        headerLeft: () => <Pressable><Feather name='x' style={styles.cancleLogo}/></Pressable>,
        headerRight: () => <Pressable onPress={()=>navigation.navigate('info')}><Ion name='help-circle-outline' style={styles.infoLogo}/></Pressable>,
        title:'Scan QR',
        headerTitleStyle:{
          fontWeight:'bold'
        }
      })}/>
      <stack.Screen name='info' component={Infomation} options={{headerShown: false}}/>
    </stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  cancleLogo : {
    fontSize:25,
    fontWeight:'bold',
    color:'#adb2ba',
    marginRight:10,
  },
  headerheight:{
    height:100
  },
  infoLogo:{
    fontSize:30,
    color:'#adb2ba',
  }
})

export default App