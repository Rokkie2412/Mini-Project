import React from 'react'
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native'
import Header from '../components/Header'
import { Appbar,Title } from "react-native-paper";
function ViewNotes(props){
    return(
        <>
            <Header titleText='Simple Taking App Note'/>
            <View style={styles.container}>
                <View style={styles.TitleContainer}>
                    <Text style={styles.Title}>You do not have any current notes</Text>
                </View>

                {/* Floating Button */}
                <View style={styles.touch}>
                    <TouchableOpacity onPress={()=>{
                        props.navigation.navigate('Add')
                    }}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingVertical:20,
        paddingHorizontal:10
    },
    TitleContainer:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    Title:{
        fontSize:20
    },
    button:{
        backgroundColor:'#00ADB5',
        height:70,
        marginVertical:5,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        width:70,
        marginHorizontal:13
    },
    buttonText:{
        fontSize:30,
        paddingBottom:4,
        fontWeight:'bold',
        color:'#EEEEEE',
    },
    touch:{
        flexDirection:"row",
        justifyContent:'flex-end',
    }
})

export default ViewNotes