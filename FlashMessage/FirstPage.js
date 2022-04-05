import React from "react";
import {View,Text,StyleSheet,Pressable} from 'react-native'
import { showMessage, hideMessage } from "react-native-flash-message";
const FirstPage = ({navigation}) => {
    return(
        <View style={styles.mainContainer}>
      <View>
        <Pressable
        onPress={()=>{
          showMessage({
            hideStatusBar:true,
            message: "Second Page",
            description: "Press if you want go to Second Page",
            floating:true,
            type:'info',
            icon:'info',
            titleStyle:styles.titleStyle,
            animationDuration:300,
            onPress: ()=> {
                navigation.navigate('Second')
            }
          })
        }}
        ><Text style={styles.Press}>Press to go to Second Page</Text></Pressable>
      </View>
      
    </View>
    )
}

const styles = StyleSheet.create({
mainContainer:{
    backgroundColor:'#fff',
    flex:1,
    justifyContent:'center'
  },
  Press:{
    fontSize:28,
    fontWeight:'900',
    color:'white',
    padding:15,
    backgroundColor:'black',
    alignSelf:'center',
    borderRadius:25,
  },
  Flash:{
    fontSize:20,
  },
  titleStyle:{}
})

export default FirstPage