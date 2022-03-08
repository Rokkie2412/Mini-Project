import React,{useState} from 'react'
import {Text,View,StyleSheet,TouchableOpacity,TextInput,BackHandler} from 'react-native'
import { useEffect } from 'react/cjs/react.production.min'

const EditNotes = (props)=>{

    const temptitle = props.route.params.TempTitle
    const tempbody = props.route.params.TempBody
    const setTemp = props.route.params.setTemp;
    const [title,setTitle] = useState(temptitle);
    const [body,setBody] = useState(tempbody);
    const object = {};

    return(
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <Text style={styles.headertext}>Edit Note</Text>
            </View>
            <View style={styles.ViewTitle}>
                <TextInput
                style={{textAlignVertical:'top',fontSize:20}}
                placeholder='Title Notes'
                multiline={true}
                numberOfLines={2}
                autoCorrect={false}
                autoComplete={'off'}
                value={title}
                onChangeText={(newBody)=>{
                    setTitle(newBody)
                }}
                />
            </View>

            <View style={styles.ViewBodyText}>
                <TextInput
                style={{textAlignVertical:'top',fontSize:15}}
                placeholder='Start writing your note here'
                multiline={true}
                numberOfLines={29}
                autoCorrect={false}
                autoComplete={'off'}
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
                    console.log(temptitle);
                    console.log(tempbody);
                }}
                >
                    <Text style={styles.TextButton}>
                        Edit Note
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
        color:"#141E27",
        fontSize:20
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


export default EditNotes;