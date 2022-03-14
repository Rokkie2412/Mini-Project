import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

const Home = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.haderText}>Note App</Text>
            </View>
            <View style={styles.body}>
                <Text>
                    No Notes Here
                </Text>
            </View>
            <View style={styles.touch}>
                <TouchableOpacity onPress={()=>navigation.navigate('AddNotes')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F1FFFF',
        flex:1,
        paddingTop:20
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
        backgroundColor:'#00ADB5',
        height:70,
        marginVertical:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        width:70,
        marginHorizontal:13
    },
    buttonText:{
        fontSize:30,
        paddingBottom:4
    },
    touch:{
        flexDirection:"row",
        justifyContent:'flex-end',
    }
})

export default Home