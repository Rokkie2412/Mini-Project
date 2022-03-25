import React from 'react'
import Ion from 'react-native-vector-icons/Ionicons'
import {View,Text,StyleSheet,Pressable,Dimensions} from 'react-native'

const Infomation = ({navigation}) => {
    const SCREEN_HEIGHT = Dimensions.get('window').height

    return(
        <View style={styles.mainContainer}>
            <View style={styles.Header}>
                <Pressable onPress={()=>navigation.goBack()}><Ion style={styles.backIcon} name="arrow-back-outline"/></Pressable>
                <Text style={styles.help}>Help</Text>
            </View>
            <View style={styles.information}>
                <Text style={styles.h2}>How do I make a payment using Jenius QR?</Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.numbder}>1.</Text>
                    <Text style={styles.texthelp}>Make sure the merchant has QR Code Indonesia Standard (QRIS).</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.numbder}>2.</Text>
                    <Text style={styles.texthelp}>Place your camera at the QR code or upload the QE code from your gallery by tapping the gallery icon.</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.numbder}>3.</Text>
                    <Text style={styles.texthelp}>Input the pay ampount.</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.numbder}>4.</Text>
                    <Text style={styles.texthelp}>Input your Jenius password if the payment amount exceeds the transcation authentication amount.</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.numbder}>5.</Text>
                    <Text style={styles.texthelp}>Your payment will be processed immediately.</Text>
                </View>
            </View>
            <View style={styles.questionContainer}>
                <View style={styles.quest}><Text style={{fontSize:16}}>Have other question?</Text></View>
                <View style={styles.quest}><Text style={{fontSize:16,fontWeight:'bold',color:'#42C2FF'}}>Ask Jenius Help</Text></View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'#fff',
        flex:1,
    },
    Header:{
        flexDirection:'row',
        width:'100%',
        height: Dimensions.get('window').height * 0.1
    },
    backIcon:{
        fontSize:25,
        marginLeft:25,
        marginTop:25
    },
    help:{
        fontSize:24,
        marginLeft:10,
        marginTop:20,
        fontWeight:'bold',
        color:'black'
    },
    information:{
        height: Dimensions.get('window').height * 0.42,
        borderColor: 'rgba(214, 212, 212,0.8)',
        borderWidth:1,
        borderRadius:10,
        margin:20,
        marginTop:5,
    },
    h2:{
        fontSize:18,
        margin:10,
        color:'black',
        fontWeight:'bold'
    },
    numbder:{
        marginLeft:10,
        marginRight:3
    },
    texthelp:{
        paddingRight:20,
        fontSize:16,
        marginBottom:10,
    },
    questionContainer:{
        top: Dimensions.get('window').height * 0.3,
    },
    quest:{
        flexDirection:'row',
        justifyContent:'center'
    }
})
export default Infomation