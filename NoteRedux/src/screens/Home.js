import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

const Home = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.haderText}>Note App</Text>
            </View>
            <View style={styles.body}>
                <Text>
                    There is no note right now
                </Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                onPress={()=>{ 
                    props.navigation.navigate('AddNotes')
                }}
                >
                    <Text style={styles.buttonText}>+</Text>
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
    header:{
        backgroundColor:"#00ADB5",
        borderRadius:50,
        width:130,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20,
        marginVertical:15
    },
    haderText:{
        fontSize:22,
        padding:10,
        color:"#222831",
        fontWeight:'bold'
    },
    body:{
        alignItems:'center',
        alignSelf:'center',
        flex:1,
        alignContent:'center',
        justifyContent:'center'
    },
    textBody:{
        fontSize:17,
    },
    button:{
        flexDirection:"row",
        backgroundColor:'#00ADB5',
        height:60,
        marginVertical:20,
        justifyContent:'flex-end',
        marginLeft:320,
        justifyContent:'center',
        borderRadius:100,
        alignItems:'center',
        marginRight:10
        
    },
    buttonText:{
        fontSize:30,
        paddingBottom:4
    }
})

export default Home