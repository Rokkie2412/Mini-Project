import React,{useState} from 'react'
import {Text,View,StyleSheet,TouchableOpacity,TextInput} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const AddNotes = (props)=>{
    const [body,setBody] = useState("");
    const [title,setTitle] = useState("");
    // const setJudul = props.route.params.SetJudul;
    // const setIsi = props.route.params.SetIsi;
    const setTemp = props.route.params.setTemp;
    const object = {};
    return(
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <Text style={styles.headertext}>Add Note</Text>
            </View>
            <View style={styles.ViewTitle}>
                <TextInput
                style={{textAlignVertical:'top',fontSize:20}}
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
                style={{textAlignVertical:'top',fontSize:15}}
                placeholder='Start writing your note here'
                multiline={true}
                numberOfLines={29}
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
                    object.title = title
                    object.body = body
                    setTemp((oldArray)=>[...oldArray,object])
                    props.navigation.navigate("Notes")
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
        flex:1,
        backgroundColor:"#EEEDDE",
    },
    ViewTitle:{
        borderWidth:1,
        marginHorizontal:30,
        marginBottom:20,
        borderRadius:100,
        paddingLeft:12,
        borderColor:'#203239',
        color:"#141E27"
    },
    header:{
        marginTop:"12%",
        marginHorizontal:30,
        marginVertical:20,
        backgroundColor:"#E0DDAA",
        width:130,
        height:50,
        justifyContent:'center',
        borderRadius:30
    },
    headertext:{
        fontSize:22,
        fontWeight:'bold',
        color:'#141E27',
        marginLeft:15
    },
    ViewBodyText:{
        borderWidth:1,
        borderRadius:20,
        marginHorizontal:30,
        padding:10,
        color:"#141E27"
    },
    ViewButtonSave:{
        margin:20,
        marginHorizontal:30,
        alignContent: 'center',
        justifyContent:'center',
        backgroundColor:'#203239',
        borderRadius:50,
    },
    TextButton:{
        textAlign:'center',
        fontSize:20,
        color:'#EEEDDE'
    },

})


export default AddNotes;