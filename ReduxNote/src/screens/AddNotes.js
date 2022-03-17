import React,{useState} from "react";
import {View,Text,StyleSheet,TouchableOpacity,TextInput} from 'react-native'
import { useSelector,useDispatch } from "react-redux";
import { addArray } from "../redux/reduxs";

const AddNotes = ({navigation}) => {

    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const object={}
    const data = useSelector(state=>state.arr)
    const dispatch = useDispatch()

    const addNote = () => {
        object.title=title
        object.body = body
        dispatch(addArray(object))
        console.log(data)
        navigation.goBack()
    }

    return(
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.haderText}>Add Notes</Text>
            </View>

            {/* TextInput */}
            <View style={styles.Viewinput}>
                <TextInput
                style={styles.inputTitle}
                placeholder='Your note title here'
                value={title}
                autoCorrect={false}
                onChangeText={(newTitle)=>{
                    setTitle(newTitle)
                }}
            /> 
            </View>
            <View style={styles.Viewinput}>
                <TextInput
                style={styles.inputbody}
                placeholder='Start write note here'
                value={body}
                multiline={true}
                numberOfLines={18}
                autoCorrect={false}
                onChangeText={(newBody)=>{
                    setBody(newBody)
                }}
                />
            </View>

            {/* ButtonAdd */}
            <View style={styles.touchicon}>
                <TouchableOpacity
                onPress={()=>{
                    addNote()
                }}
                >
                    <View style={styles.button}>
                        <Text style={styles.iconStyle}>+</Text>
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
    header:{
        borderRadius:50,
        maxHeight:70,
        marginLeft:20,
        marginVertical:1,
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
    },
    iconStyle:{
        fontSize:30,
        color:'#EEEEEE'
    }
})

export default AddNotes