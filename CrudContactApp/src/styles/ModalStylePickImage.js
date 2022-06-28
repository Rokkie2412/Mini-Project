import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    mainContainer:{
        flex: 1,
        alignSelf:'center',
        backgroundColor: '#EEEEEE',
        borderRadius: 30,
        position: 'absolute',
        width: '60%',
        height: '10%',
        marginVertical:'50%',
        // padding:0
    },
    Header:{
        color:'#222831',
        textAlign:'center',
        fontSize:18,
        fontWeight:'600'
    },
    icon:{
        padding:'10%',
        color:"#EEEEEE",
        backgroundColor:'#222831',
        margin:10,
        borderRadius:50,
        fontSize:24
    },
    iconView:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    close:{
        backgroundColor:'#222831',
        padding:8,
        color:"#EEEEEE",
        alignSelf:'flex-end',
        borderRadius:50,
        marginRight:10,
        marginBottom:20,
    }
})