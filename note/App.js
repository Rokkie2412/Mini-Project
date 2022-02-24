import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class App extends Component {
  constructor(props) {
    super(props);
    this._retrieveData();
    this.state = { 
      editText:"",
     };
  }
_storeData = async () => {
  try {
    await AsyncStorage.setItem('editText', this.state.editText);
  } catch (error) {
    // Error saving data
  }
};

_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('editText');
    if (value !== null) {
      // We have data!!
      this.setState({editText})
    }
  } catch (error) {
    // Error retrieving data
  }
};

  render() {
    return (
      <View style={style.body}>
        <Text style={style.title}>Notes</Text>
        <View>

        <ScrollView>
          <TextInput placeholder='Input text here'
          style={{borderWidth:2,marginVertical:10,padding:20,marginHorizontal:10,borderColor:'#151D3B',maxHeight:300}}
          multiline={true}
          numberOfLines={20}
          textAlignVertical={'top'}
          value={this.state.editText}
          onChangeText={(value)=>this.setState({editText:value})}
          />
        </ScrollView>
        </View>
        <View style={{alignContent:'center',alignItems:'center'}}>
        <View>
          <TouchableOpacity style={style.TouchButton}
          onPress={()=> this._storeData()}
          >
            <View>
              <Text style={{fontWeight:'bold',fontSize:22,color:'white'}}>
                Save
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  body:{
    backgroundColor : '#DADBBD',
    flex: 1,
  },
  title:{
    fontSize:22,
    fontWeight:'bold',
    margin:16,
  },
  button:{
    marginHorizontal:30,
  },
  TouchButton:{
    backgroundColor:'#D82148',
    padding:20,
    paddingHorizontal:70,
    borderRadius:25,
  }
})

export default App;