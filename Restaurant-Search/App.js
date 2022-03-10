import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import ResultSearchScreen from './src/screens/ResultSearchScreen';
const navigator = createStackNavigator({
  MainScreen : SearchScreen,
  ResultShow : ResultSearchScreen
},{
  initialRouteName: 'MainScreen',
  defaultNavigationOptions :{
    title:'Restaurant Search'
  }
});

export default createAppContainer(navigator)