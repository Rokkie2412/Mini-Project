import React,{useState} from "react";
import {StyleSheet,View,Text,TouchableOpacity,TextInput} from 'react-native'
import Header from '../components/Header'
function AddNotes({navigation}){

    const [noteTitle,setnoteTitle] = useState('')
    const [noteDesc,setNoteDesc] = useState('')

    function saveNote(){
        navigation.state.params.addNote({noteTitle,noteValue})
        navigation.goBack()
    }

    return(
        <View style={styles.container}>
                <TextInput
                placeholder="Add Note Title Here"
                value={noteTitle}
                onChangeText={setnoteTitle}
                style={styles.title}
                />

                <TextInput
                placeholder="Add Note Title Here"
                value={noteTitle}
                onChangeText={setnoteTitle}
                style={styles.title}
                multiline={true}
                scrollEnabled={true}
                />
            <View style={styles.TitleContainer}>
                <Text style={styles.Title}>Add Notes Modal Screen</Text>
            </View>

            {/* Floating Button */}
            <View style={styles.touch}>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingVertical:20,
        paddingHorizontal:10
    },
    TitleContainer:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    Title:{
        fontSize:20
    },
    button:{
        backgroundColor:'#00ADB5',
        height:70,
        marginVertical:5,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        width:70,
        marginHorizontal:13
    },
    buttonText:{
        fontSize:30,
        paddingBottom:4,
        fontWeight:'bold',
        color:'#EEEEEE',
    },
    touch:{
        flexDirection:"row",
        justifyContent:'flex-end',
    }
})

export default AddNotes