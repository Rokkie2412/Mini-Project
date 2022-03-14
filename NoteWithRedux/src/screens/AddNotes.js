import React,{useState} from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,TextInput} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useSelector,useDispatch } from 'react-redux'
import { addArray } from '../redux/action'

const AddNotes= (props) => {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    let note ={}
    const data = useSelector(state => state)
    const {arr} = data
    const dispatch = useDispatch()
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                    <Text style={styles.haderText}>Add Notes</Text>
                    <TouchableOpacity
                    styles={styles.touchicon} 
                    onPress={()=>{
                        note.title={title}
                        note.body={body}
                        console.log(note);
                        dispatch(addArray(note))
                        console.log(arr)
                        props.navigation.goBack()
                    }}
                    >
                        <Feather name="check" style={styles.iconStyle} />
                    </TouchableOpacity>
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
                numberOfLines={29}
                value={body}
                onChangeText={(newBody)=>{
                    setBody(newBody)
                }}
                placeholder='Input body here'
                />
            </View>

            <View>
                <TouchableOpacity onPress={()=>{
                    note.title={title}
                    note.body={body}
                    console.log(note);
                    dispatch(addArray(note))
                    console.log(arr)
                    props.navigation.goBack()
                }}>
                    <Text>Add Note</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F1FFFF',
        flex:1,
        paddingTop:20
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
        marginLeft:30,
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
        maxWidth:135
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
        flex:1,
        padding:10
    },
    iconStyle:{
        fontSize:35,
        color:'#00ADB5',
        position:'absolute',
        right:10,
        bottom:2
    },
    touchicon:{
        alignItems:'flex-end',
        flexDirection:'row'
    }
})

export default AddNotes