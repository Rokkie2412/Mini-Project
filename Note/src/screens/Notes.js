import React,{useState} from 'react'
import {Text,View,StyleSheet,TouchableOpacity,FlatList,TextInput,ScrollView} from 'react-native'
const Notes = ({navigation})=>{
    
    const [temp,tempnotes] = useState([]);
    const [editNote,setEditNotes] = useState([]);
    let temptitle=""
    let tempbody=""
    const onDelete = (title) => {
        let filterArray = temp.filter((val)=>{
            if(val.title !== title){
                return val
            }
        })
        console.log("Filter Array : ",filterArray);
        tempnotes(filterArray)
    }

    const onEdit = (title,body) => {
        
        temp.filter((val)=>{
            if(val.title === title)
                temptitle = val.title
        })

        temp.filter((val)=>{
            if(val.body === body)
                tempbody = val.body
        })
        
        console.log(temptitle,tempbody);
    }
    return(
        <View style={styles.maincontainer}>
            <View style={styles.header}>
                <Text style={styles.headertext}>Notes App</Text>
            </View>
            <View style={styles.main}>
                <FlatList
                keyExtractor={(data)=>data.title}
                data={temp}
                renderItem={({item,index})=>{
                    return(
                        <View >
                            <TouchableOpacity 
                            onLongPress={()=>{
                                onDelete(item.title)
                                alert('Notes Deleted')
                            }}
                            onPress={()=>{
                                onEdit(item.title,item.body)
                                onDelete(item.title)
                                navigation.navigate("EditNotes",{TempTitle:temptitle,TempBody:tempbody,setTemp:tempnotes})
                                }}>
                                <View style={styles.FlatView}>
                                    <Text style={styles.FlatText}>{item.title}</Text>
                                    <Text style={styles.FlatText}>{item.body}</Text>
                                    
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }}
                />
                {/* <ScrollView>
                    {temp.map((item,index)=>(
                        <View key={item.title}>
                            <TouchableOpacity>
                                <Text style={styles.FlatText}>{item.title}</Text>
                            </TouchableOpacity>
                            
                        </View>
                    ))}
                </ScrollView> */}
            </View>
            <View style={styles.AddButton}>
                <TouchableOpacity 
                style={styles.AddButton}
                onPress={()=>{ 
                    navigation.navigate('AddNotes',{setTemp:tempnotes})
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
        backgroundColor:"#EEEDDE"
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
        marginLeft:10
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
        backgroundColor:'#203239',
        marginHorizontal:40,
        height:50,
        borderRadius:40
    },
    AddText:{
        color:"white",
        fontSize:20,
        paddingLeft:76,
        color:'#EEEDDE'
    },
    FlatView:{
        textAlign:'center',
        backgroundColor:"#E0DDAA",
        margin:10,
        borderRadius:5,
        width:350,
        alignItems:'flex-start',
        paddingLeft:20,
        maxHeight:'90%'
    },
    FlatText:{
        fontSize:18,
        color:'#141E27',
        marginVertical:10,
    }
})

export default Notes;