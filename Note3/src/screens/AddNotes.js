import React,{useState} from 'react'
import {Text,View,StyleSheet,TouchableOpacity,TextInput} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const AddNotes = (props,judul,setJudul)=>{

    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    let paramNotes = props.route.params.notes;
    let paramObject = props.route.params.object;
    let paramJudul = props.route.params.setJudul;

    return(
        <View style={styles.mainContainer}>
            <View style={styles.ViewTitle}>
                <TextInput
                placeholder='Input note title here'
                multiline={true}
                numberOfLines={2}
                Value={title}
                onChangeText={(newTitle)=>{
                    setTitle(newTitle)
                }}
                />
            </View>

            <View style={styles.ViewBodyText}>
                <TextInput
                style={{textAlignVertical:'top'}}
                placeholder='Start writing your note here'
                multiline={true}
                numberOfLines={23}
                value={body}
                onChangeText={(newBody)=>{
                    setBody(newBody)
                }}
                />
            </View>

            <View style={styles.ViewButtonSave}>
                <TouchableOpacity 
                style={styles.ViewButtonSave}
                onPress={()=>{
                    props.navigation.navigate("Notes")
                    paramNotes.push(title)
                    
                }}
                >
                    <Text style={styles.TextButton}>
                        Save Note
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    },
    ViewTitle:{
        borderWidth:1,
        margin:30,
        borderRadius:100,
        paddingLeft:12
    },
    ViewBodyText:{
        borderWidth:1,
        borderRadius:20,
        marginHorizontal:30,
        padding:10,
    },
    ViewButtonSave:{
        margin:20,
        marginHorizontal:30,
        alignContent: 'center',
        justifyContent:'center',
        backgroundColor:'#333',
        borderRadius:50,
    },
    TextButton:{
        textAlign:'center',
        fontSize:20,
        color:'#fff'
    }
})


export default AddNotes;