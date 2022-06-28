import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    mainContainer:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#222831',
    },
    HeaderView:{
        flexDirection:'row',
        justifyContent:'center'
    },
    Header:{
        color:'#EEEEEE',
        fontSize:32,
        fontWeight:'bold',
        margin:'4%'
    },
    contactList:{
        backgroundColor:'#00ADB5',
        padding:'5%',
        margin:'3%',
        borderRadius:30,
        paddingLeft:20,
        flexDirection:'row',
        maxHeight:"77%"
    },
    nameList:{
        color:'#EEEEEE',
        fontSize:24,
        alignSelf:'center',
        paddingLeft:12,                    
        fontWeight:'500'
    },
    body:{
        flex:1
    },
    personIcon:{
        fontSize:30,
        borderRadius:50,    
        alignSelf:'center',
        color:'#EEEEEE',
        padding:10,
        backgroundColor:'#222831', 
    },
    imagesPerson:{
        width:52,   
        height:52,
        borderRadius:50,    
        alignSelf:'center', 
    },
    addIcon:{
        fontSize:40,
        color:"#EEEEEE",
        backgroundColor:"#44865a",
        padding:15,
        borderRadius:50,
        margin:10,
        position:'absolute',
        bottom: 0,
        alignSelf: "flex-end",
    },
    addContainer:{
        // alignItems:'flex-end'
    }
})