import React,{useState} from "react";
import { useSelector,useDispatch } from 'react-redux'
import { AddList,deleteList} from "./Redux/reducer";
import {View,StyleSheet,Text,StatusBar,SafeAreaView,TextInput,TouchableOpacity,KeyboardAvoidingView,FlatList,ToastAndroid} from 'react-native'
const TodoList = () => {
    const RandomID = Math.floor(Math.random() * 9789).toString();
    const [task,setTask] = useState('')
    const data = useSelector(state=>state.ArrayList)
    const dispatch = useDispatch()
    let object = {}
    const addList = (task) =>{
        dispatch(AddList(task))
    }

    const MyStatusBar = ({backgroundColor, ...props}) => (
        <View style={[styles.statusBar, { backgroundColor }]}>
            <SafeAreaView>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
            </SafeAreaView>
        </View>
    );

    return(
        <KeyboardAvoidingView style={styles.container}>
            <MyStatusBar backgroundColor="#DA0037" barStyle="light-content" />
            <View style={styles.header}>
                    <Text style={styles.headerTitle}>My ToDo</Text>
            </View>

            <View style={styles.body}>
             {data.length === 0 ? 
             <Text style={styles.bodyText}>No current task</Text> : 
             <FlatList
                data={data}
                keyExtractor={(data)=>data.dataID}
                renderItem={({item})=>{
                    return(
                        <>
                            <View>
                            <TouchableOpacity style={styles.listppreview}
                            onPress={()=>{
                                console.log(item.taskID)
                            }}
                            onLongPress={()=>{
                                dispatch(deleteList(item.taskID))
                                ToastAndroid.show("Task has been completed, Nice work!👍", ToastAndroid.SHORT,ToastAndroid.TOP)
                                
                            }}
                            >
                                    <TextInput style={styles.bodyText2} editable={false} value={item.taskName}/>
                            </TouchableOpacity>
                            </View>
                        </>
                    )
                }}

             />
             }
            </View>

            <View style={styles.AddSection}>
                <View style={styles.rowing}>
                    <View style={styles.inputSection}>
                        <TextInput
                            style={styles.inputText}
                            placeholder='Input task here'
                            placeholderTextColor={'#F1F3E4'}
                            value={task}
                            onChangeText={(newText)=>setTask(newText)}
                        />
                    </View>
                    <TouchableOpacity style={styles.touchSection}
                    onPress={()=>{
                        {if(task.length>2){
                            object.taskName = task
                            object.taskID = RandomID
                            console.log(object)
                            addList(object)
                            setTask('')
                        }else{
                            ToastAndroid.show('Character must be longer!',ToastAndroid.SHORT,ToastAndroid.TOP)
                        }}
                    }}>
                    <View>
                        <Text style={styles.addButton}>+</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#171717',
        flex:1,
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#DA0037',
        height:"14%",
    },
    headerTitle:{
        top:10,
        fontSize:23,
        fontWeight:'700',
        color:'#F7F3E9',
        backgroundColor:'#171717',
        borderRadius:30,
        marginHorizontal:15,
        marginVertical:10,
        width:120,
        height:40,
        textAlign:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    body:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        alignContent:'center'
    },
    bodyText:{
        color:'#F7F3E9',
        fontSize:16,
        top:'40%'
    },
    AddSection:{
        justifyContent: 'flex-end',
        marginBottom: 16
    },
    rowing:{
        flexDirection:'row'
    },
    inputSection:{
        borderWidth:1,
        borderColor:'#F1F3E4',
        width:'74%',
        borderRadius:40,
        marginHorizontal:10
    },
    touchSection:{
        marginHorizontal:10,
        width:'15%',
        height:60,
        backgroundColor:'#DA0037',
        borderRadius:50
    },
    addButton:{
        color:'#F7F3E9',
        fontSize:40,
        fontWeight:'600',
        alignItems:'center',
        alignSelf:'center',
    },
    inputText:{
        padding:15,
        paddingHorizontal:20,
        color:'#F7F3E9',
    },
    listppreview:{
        marginVertical:12,
        marginHorizontal:10,
        backgroundColor:'#333',
        width:350,
        borderRadius:30,
    },
    bodyText2:{
        color:'#F7F3E9',
        fontSize:16,
        alignContent:'center',
        paddingVertical:15,
        paddingHorizontal:17,
    },


})

export default TodoList