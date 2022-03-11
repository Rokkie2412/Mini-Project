import React from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'

const AddNotes= () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image style={styles.headerImage} source={require('../Assets/Back-Left.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F1FFFF',
        flex:1
    },
    headerImage:{
        width:25,
        height:25,
        marginLeft:14,
        marginRight:5
    },
    header:{
        flexDirection:'row',
        borderRadius:50,
        width:150,
        maxHeight:70,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20,
        marginVertical:15
    },
    haderText:{
        fontSize:22,
        padding:10,
        color:"#222831",
        fontWeight:'bold',
        borderLeftWidth:2,
        borderColor:'#F1FFFF',
        marginVertical:8,
        borderRadius:3
    }
})

export default AddNotes