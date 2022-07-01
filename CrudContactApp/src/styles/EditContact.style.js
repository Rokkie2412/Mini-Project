import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    mainContainer:{
        flex: 1,
        alignSelf:'center',
        backgroundColor: '#393E46',
        marginVertical: '25%',
        marginHorizontal: '10%',
        borderRadius: 30,
        position: 'absolute',
        width: '95%',
        height: '67%',
        justifyContent:'center'
    },
    header:{
        color:"#EEEEEE",
        fontSize:32,
        fontWeight:'bold',
        textAlign:'center',
    },
    imageView:{

    },
    personIcon:{
        alignSelf:'center',
        padding:15,
        fontSize:50,
        color:'#EEEEEE',
        backgroundColor:'#00ADB5',
        margin:'9%',
        borderRadius:50,
    },
    imagePerson:{
        width:80,   
        height:80,
        borderRadius:50,    
        alignSelf:'center',
    },
    inputsection:{
        marginHorizontal:"14%",
    },
    textinput:{
        borderBottomWidth:1,
        borderColor:'#eeeeee',
        marginBottom:'7%',
        color:'#EEEEEE'
    },
    textinputAge:{
        borderBottomWidth:1,
        borderColor:'#eeeeee',
        marginBottom:'7%',
        alignSelf:'center',
        width:'20%',
        textAlign:'center',
        color:'#EEEEEE'
    },
    buttonSection:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    button:{
        backgroundColor:'#00ADB5',
        color:'#EEEEEE',
        fontWeight:'bold',
        padding:15,
        fontSize:18,
        borderRadius:50
    },
    error:{
        color:'#EEEEEE',
        fontSize:7,
        alignSelf:'center'
    }
})