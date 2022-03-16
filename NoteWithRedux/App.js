import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddNotes from './src/screens/AddNotes';
import ViewNotes from './src/screens/ViewNotes';


const stack = createNativeStackNavigator()

function App (){
  return(
      <NavigationContainer >
        <stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false} }>
          <stack.Screen name="Home" component={ViewNotes}/>
          <stack.Screen name="Add" component={AddNotes}/>
        </stack.Navigator>
      </NavigationContainer>
  )
}

export default App;