import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#222831',
    },
    Header:{
        color:'#EEEEEE',
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold',
        marginVertical:10,
        marginTop:30,   
    },
    TimerSection:{
        flex:1,
        justifyContent:'center'
    },
    time:{
        textAlign:'center',
        padding:10,
        backgroundColor:'#00ADB5',
        color:'#EEEEEE',
        fontSize:65,
        fontWeight:'bold',
        paddingVertical:100,
        marginHorizontal:'5%',
        borderRadius:30,
    },
    iconSection:{
        flexDirection:'row',
        justifyContent:'center'
    },
    icon:{
        backgroundColor:'#393E46',
        padding:24,
        fontSize:35,
        color:'#fff',
        margin:10,
        borderRadius:50,
        marginTop:15
    },
    buttonSection:{
        flexDirection:'row',
        justifyContent:'center'
    },
    button:{
        color:'#EEEEEE',
        backgroundColor:'#393E46',
        fontSize:20,
        fontWeight:'bold',
        padding:15,
        borderRadius:50,
        marginBottom:10,

    }
    
})