import React,{useState} from 'react'
import {Text,View,StyleSheet,TouchableOpacity,FlatList} from 'react-native'
const Notes = ({navigation})=>{
    
    const [judul,setJudul] = useState([])
    const [body,setBody] = useState([])

    const removeitem = (id) =>{
        let arr = data.filter(function(item) {
        return item.id !== id
        })
        setData(arr);
        }

    return(
        <View style={styles.maincontainer}>
            <View style={styles.main}>
                <FlatList
                keyExtractor={(judul)=>judul}
                data={judul}
                renderItem={({item})=>{
                    return(
                        <View style={styles.FlatView}>
                            <TouchableOpacity>
                                <Text style={styles.FlatText}>{item}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
                />
            </View>
            <View style={styles.AddButton}>
                <TouchableOpacity 
                style={styles.AddButton}
                onPress={()=>{ 
                    navigation.navigate('AddNotes',{SetJudul:setJudul,SetIsi:setBody})
                    // setJudul((oldArray)=>[...oldArray,'aku'])
                    console.log(body);
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
        backgroundColor:'#6EBF8B',
        marginHorizontal:40,
        height:50,
        borderRadius:40
    },
    AddText:{
        color:"white",
        fontSize:20,
        paddingLeft:76,
    },
    FlatView:{
        textAlign:'center',
        backgroundColor:"#151D3B",
        margin:10,
        padding: 20,
        borderRadius:50,
        width:300,
        alignItems:'center'
    },
    FlatText:{
        fontSize:22,
        color:'#DADBBD'
    }
})

export default Notes;