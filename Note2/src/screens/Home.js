import React, {Component} from 'react'
import {View,Text, TouchableOpacity,StyleSheet,ScrollView} from 'react-native'
import {FAB} from 'react-native-elements'

class Home extends Component {
    state = { 
        objectData:{

        }
     }
    render() {
        return (
          <View style={styles.mainContainer}>
              <View>
                  <Text style={styles.title}>Notes</Text>
              </View>
              <View style={styles.body}>
                  <Text style={{color:'#333',fontSize:14}}>You don't have any Notes</Text>
              </View>
              <View style={{alignItems:'flex-end'}}>
                <TouchableOpacity style={styles.FAB} onPress={()=> this.props.navigation.navigate('AddNotes')}>
                    <Text style={{color:'#fff',fontSize:26}}>+</Text>
                </TouchableOpacity>
              </View>  
          </View>  
        );
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        paddingVertical:30,
        paddingHorizontal:30,
        backgroundColor: '#fff',
        flex:1,

    },
    body:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:26,
        color:'#333',
        fontWeight:'bold',
        alignContent:'center'
    },
    FAB:{
        alignContent:'center',
        alignItems:'center',
        backgroundColor:'#333',
        fontSize:30,
        color:'#fff',
        padding:12, 
        borderRadius:100,
        width:60,
    }
})

export default Home;