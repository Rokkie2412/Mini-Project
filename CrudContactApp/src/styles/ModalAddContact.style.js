import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    mainContainer:{
        flex: 1,
        alignSelf:'center',
        backgroundColor: '#393E46',
        marginVertical: '20%',
        marginHorizontal: '5%',
        borderRadius: 30,
        position: 'absolute',
        width: '95%',
        height: '60%',
        justifyContent:'center'
    },
    personIconView:{

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
    TextInputSection:{
        marginHorizontal:"10%",
    },
    textinput:{
        borderBottomWidth:1,
        borderColor:'#eeeeee',
        marginBottom:'7%'
    },
    textinputAge:{
        borderBottomWidth:1,
        borderColor:'#eeeeee',
        marginBottom:'7%',
        alignSelf:'center',
        width:'20%',
        textAlign:'center'
    },
    ButtonSection:{
        flexDirection:'row',
        marginTop:'4%',
        // alignSelf:'center',
        justifyContent:'space-evenly'
    },
    Container:{
        justifyContent:'space-evenly'
    },
    Button:{
        color:'#EEEEEE',
        fontSize:20,
        backgroundColor:'#00ADB5',
        textAlign:'center',
        borderRadius:50,
        fontWeight:'bold',
        padding:10,
        width:"120%",
        maxWidth:'110%'
    },
    imagesPerson:{
        width:80,   
        height:80,
        borderRadius:50,    
        alignSelf:'center', 
    },
    error:{
        color:'#EEEEEE',
        fontSize:7,
        alignSelf:'center'
    }
})