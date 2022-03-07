import React,{useState} from 'react'
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'
import ManageState from './ManageState';
const Notes = ({navigation,title,setTitle})=>{
    

    const [judul,setJudul] = useState([])
    const [body,setBody] = useState([])

    return(
        <View style={styles.maincontainer}>
            <View style={styles.main}>
                
            </View>
            <View style={styles.AddButton}>
                <TouchableOpacity 
                style={styles.AddButton}
                onPress={()=>{ 
                    navigation.navigate('AddNotes')
                }}>
                    <Text style={styles.AddText}>Add Note</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
    },
    main:{
        flex:0.95,
        alignItems:'center',
        justifyContent:'center'
    },
    TextButton:{
        fontSize:25,
    },
    AddButton:{
        alignContent:'center',
        justifyContent:'center',
        backgroundColor:'#333',
        marginHorizontal:40,
        height:50,
        borderRadius:40
    },
    AddText:{
        color:"white",
        fontSize:20,
        paddingLeft:76,
    }
})

export default Notes;