import React, {Component} from 'react'
import {View,Text, TouchableOpacity} from 'react-native'

class Detail extends Component {
    state = { 

     }
    render() {
        return (
          <View>
              <Text>Detail</Text>
              <TouchableOpacity onPress={()=> this.props.navigation.pop()}>
                  <Text>Go To Home</Text>
              </TouchableOpacity>
          </View>  
        );
    }
}

export default Detail;