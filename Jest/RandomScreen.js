import React,{useState} from "react";
import { View,Text,StyleSheet,TextInput,Button } from "react-native";

const RandomScreen = () =>{
    const [status,setStatus] = useState('')
    return(
        <View style={styles.mainCointariner}>
            <Text testID="myText">{status}</Text>
            <Button testID="myButton" title="PressMe" onPress={()=>setStatus('Button pressed')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainCointariner:{
        backgroundColor:'#fff',
        color:'#333',
        flex:1,
    }
})

export default RandomScreen