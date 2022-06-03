import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#393E46',
        margin:'auto',
        marginVertical:'25%',
        marginHorizontal:'5%',
        borderRadius:30,
        position:'absolute',
        width:'90%',
        height:'70%',
    },
    headerSection:{
        flexDirection:'row',
        justifyContent:'center'
    },
    header:{
        color:'#EEEEEE',
        fontWeight:'bold',
        fontSize:22,
        margin: 10,
    },
    SectionSetWorkTimer:{
        backgroundColor:'#222831',
        marginVertical:20,
        marginHorizontal:20,
        borderRadius:20,
    },
    setTimerWork:{
        margin:10,
        textAlign:'center',
        fontSize:18,
        borderBottomColor:'#eeeeee',
        borderBottomWidth:2,
        marginHorizontal:8,
        padding:10,
        color:'#EEEEEE',
    },
    set:{
        color:'#EEEEEE',
        fontWeight:'bold',
        fontSize:16,
        textAlign:'center',
        marginTop:7
    },
    inputSection:{
        flexDirection:'row',
        justifyContent:'center'
    },
    buttonSection:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    button:{
        color:'#EEEEEE',
        padding:15,
        borderRadius:50,
        backgroundColor:'#00ADB5',
        fontWeight:'bold',
        fontSize:20,
        marginTop:30,
    }
})