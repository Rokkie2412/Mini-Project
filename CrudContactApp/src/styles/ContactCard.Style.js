import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    mainContainer:{
        flex: 1,
        alignSelf:'center',
        backgroundColor: '#393E46',
        borderRadius: 30,
        position: 'absolute',
        width: '70%',
        marginVertical:'50%',
    },
    Header:{
        textAlign:'center',
        fontSize:24,
        fontWeight:'bold',
        color:'#EEEEEE'
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
        width:65,   
        height:65,
        borderRadius:50,
        margin:10,    
        alignSelf:'center', 
    },
    name:{
        flexDirection:'row',
        alignSelf:'center',
        width:"40%"
    },
    text:{
        color:'#EEEEEE',
        fontWeight:'bold'
    },
    textName:{
        color:'#EEEEEE',
        borderBottomWidth : 1,
        borderColor:'#00ADB5'
    },
    button:{
        flexDirection:'row',
        justifyContent :'space-evenly'
    },
    editButton:{
        padding:12,
        marginTop:20,
        borderRadius:30,
        color:'#EEEEEE',
        backgroundColor:'#00ADB5',
        alignSelf:'center',
        fontSize:16,
        fontWeight:'bold'
    }
})