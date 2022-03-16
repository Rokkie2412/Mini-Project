import React,{useState} from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,TextInput} from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import { useSelector,useDispatch } from 'react-redux'
import { addArray } from '../redux/reduxs';


const AddNotes= ({navigation}) => {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const object ={};
    const data = useSelector(state=>state)
    const dispatch = useDispatch()


    const addNote = () => {
        object.title=title
        object.body = body
        dispatch(addArray(object))
        console.log(data);
        navigation.goBack()
    }


    return(
        <View style={styles.container}>
            <View style={styles.header}>
                    <Text style={styles.haderText}>Add Notes</Text>
            </View>
            <View style={styles.Viewinput}>
                <TextInput
                style={styles.inputTitle}
                value={title}
                onChangeText={(newTitle)=>{
                    setTitle(newTitle)
                }}
                placeholder='Input title here'
                />
            </View>

            <View style={styles.Viewinput}>
                <TextInput
                style={styles.inputbody}
                multiline={true}
                numberOfLines={18}
                value={body}
                onChangeText={(newBody)=>{
                    setBody(newBody)
                }}
                placeholder='Input body here'
                />
            </View>

            <View style={styles.touchicon}>
                <TouchableOpacity onPress={()=>{
                    addNote()
                }}>
                    <View style={styles.button}>
                        <Entypo style={styles.iconStyle} name="check" size={24} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F1FFFF',
        flex:1,
        paddingTop:22
    },
    headerImage:{
        width:25,
        height:25,
        marginLeft:14,
        marginRight:5
    },
    header:{
        borderRadius:50,
        maxHeight:70,
        marginLeft:20,
        marginVertical:15,
        alignItems:'stretch'
    },
    haderText:{
        fontSize:22,
        padding:10,
        backgroundColor:"#00ADB5",
        color:"#222831",
        fontWeight:'bold',
        borderLeftWidth:2,
        borderColor:'#F1FFFF',
        marginVertical:8,
        borderRadius:50,
        maxWidth:135,
        textAlign:'center'
    },
    inputTitle:{
        borderWidth:1,
    },
    Viewinput:{
        marginHorizontal:30,
        marginVertical:20,
    },
    inputTitle:{
        fontSize:18,
        borderBottomWidth:1,
        borderColor:"#00ADB5",
        padding:10
    },
    inputbody:{
        fontSize:20,
        padding:10,
        textAlignVertical:'top',
    },
    iconStyle:{
        fontSize:30,
        color:'#EEEEEE'
    },
    touchicon:{
        flexDirection:"row",
        justifyContent:'flex-end',
    },
    button : {
        backgroundColor:'#00ADB5',
        height:70,
        marginVertical:2,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        width:70,
        marginHorizontal:13
    }
})

export default AddNotes