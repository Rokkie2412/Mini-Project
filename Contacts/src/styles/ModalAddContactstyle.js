import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    modalContainer:{
        flex:1,
        justifyContent:'center'
    },
    container:{
        backgroundColor:'#125B50',
        width:'78%',
        height:'25%',
        alignSelf:'center',
        borderRadius:20,
    },
    title:{
        color:'#F1EEE9',
        textAlign:'center',
        marginVertical:10,
        fontWeight:'bold',
        fontSize:18
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-around'
    },
    button:{
        color:'#F7FF93',
        textAlign:'center',
        marginVertical:10,
        fontWeight:'bold',
        fontSize:18,
        padding:10,
        marginTop:30,
        backgroundColor:'#069A8E',
        borderRadius:30
    },
    cancel:{
        textAlign:'center',
        color:'#F1EEE9',
        fontWeight:'bold',
        fontSize:16,
        padding:10,
        backgroundColor:'#069A8E',
        borderRadius:30
    },
    
})