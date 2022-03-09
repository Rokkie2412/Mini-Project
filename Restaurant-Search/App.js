import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'

const navigator = createStackNavigator({
  MainScreen : SearchScreen
},{
  initialRouteName: 'MainScreen',
  defaultNavigationOptions :{
    title:'Restaurant Search'
  }
});

export default createAppContainer(navigator)