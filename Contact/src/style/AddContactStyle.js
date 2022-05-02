import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#fff'
    },
    Header:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between'

    },
    IconBack:{
        fontSize:30,
        fontWeight:'bold',
        color:'#383838',
        marginVertical:20,
        left:10,
    },
    HeaderText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#383838',
        marginVertical:20,
        borderColor:'#333',
        alignSelf: 'flex-start',
    }
})