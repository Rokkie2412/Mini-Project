import React from "react";
import { View,StyleSheet,Text,Pressable } from "react-native";

const Mentahan = ({navigation}) => {
    
    return(
        <View style={styles.main}>
            <Pressable testID="myButton" style={styles.press} 
            onPress={()=>navigation.navigate('Home')}>
                <Text style={{padding:20,color:'#fff',backgroundColor:'#333',borderRadius:50}}>Press Me</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center'
    },
    press:{
        alignSelf:'center'
    }
})

export default Mentahan