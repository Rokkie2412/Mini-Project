import React,{useState} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,FlatList,Alert, Modal, Pressable,TextInput} from 'react-native'
import { useSelector,useDispatch } from 'react-redux'
import { Entypo } from '@expo/vector-icons'; 
import { deleteFromArray,EditNote,addArray } from '../redux/reduxs';
import { AntDesign } from '@expo/vector-icons'; 
const Home = ({navigation}) => {

    const [modal,setModal] = useState(false)
    let object={}
    const [TitleModal,setTitleModal] = useState('')
    const [BodyModal,setBodyModal] = useState('')
    const data = useSelector(state => state)
    const dispatch = useDispatch()
    let tempTitleModal = ''
    let tempBodyModal = ''
    const removeNote = (title) => {
        dispatch(deleteFromArray(title))
    }

    // const editNote = (title) => {
    //     dispatch(EditNote(title))
    // }

    const editFilter = (title,body) => {
        data.filter((val)=>{
            if(val.title === title)
                setTitleModal(val.title)
                tempTitleModal = val.title
                
        })
        data.filter((val)=>{
            if(val.body === body)
                setBodyModal(val.body)
                tempBodyModal = val.body
                
        })
    }

    const addNote = () => {
        object.title=TitleModal
        object.body = BodyModal
        dispatch(addArray(object))
        console.log(data);
    }


    return(
        <View style={styles.container}>

            {/* //MODAL VIEW */}

            {/* MAIN VIEW */}
            <View style={styles.header}>
                <Text style={styles.haderText}>Note App</Text>
            </View>
            {/* FLATLIST */}
            <View style={styles.body}>
                <FlatList
                data={data}
                keyExtractor={(data)=>data.title}
                renderItem={({item})=>{
                    return(
                        <View>
                            <Modal
                            animationType='slide'
                            transparent={true}
                            visible={modal}
                            onRequestClose={()=>{
                                setModal(!modal)
                            }}
                            >
                                <View style={styles.modalContainer}>
                                    <View style={styles.modalnav}>
                                        <TouchableOpacity 
                                        onPress={()=>{
                                                    
                                                    addNote()
                                                    removeNote(item.title)
                                                    setModal(false)
                                                }}
                                        >
                                                <AntDesign style={styles.modalBackIcon} name="back" size={24} color="black" /></TouchableOpacity>
                                        <Text style={styles.ModalTitle}>Edit Note</Text>
                                    </View>
                                    <View style={styles.modalInput}>
                                        <TextInput
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        placeholder='Edit Title Here'
                                        style={styles.editTitle}
                                        value={TitleModal}
                                        onChangeText={(newTitle)=>{
                                            setTitleModal(newTitle)
                                        }}
                                        />

                                        <TextInput
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        placeholder='Edit Body Here'
                                        style={styles.editBody}
                                        multiline={true}
                                        numberOfLines={15}
                                        value={BodyModal}
                                        onChangeText={(newBody)=>{
                                            setBodyModal(newBody)
                                        }}
                                        />

                                    </View>
                                </View>
                            </Modal>
                            <Text>
                            <TouchableOpacity
                                onPress={()=>{
                                    editFilter(item.title,item.body)
                                    setModal(true)
                                }}
                                onLongPress={()=>{
                                    removeNote(item.title)
                                }}
                            >
                                <View style={styles.flatview}>
                                    <Text style={styles.flattexttitle}>{item.title}</Text>
                                    <Text style={styles.flattextbody}>{item.body}</Text>
                                </View>
                            </TouchableOpacity>
                        </Text>
                        </View>
                    )
                }}
                />
            </View>
            <View style={styles.touch}>
                <TouchableOpacity onPress={()=>{
                    setModal(false)
                    navigation.navigate('AddNotes')
                    console.log(data);
                }}>

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
        backgroundColor:'#F1FFFF',
        flex:1,
        paddingTop:22
    },
    header:{
        backgroundColor:"#00ADB5",
        borderRadius:50,
        width:130,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20,
        marginVertical:15
    },
    haderText:{
        fontSize:22,
        padding:10,
        color:"#222831",
        fontWeight:'bold'
    },
    body:{
        flex:1,

    },
    textBody:{
        fontSize:17,
    },
    button:{
        backgroundColor:'#00ADB5',
        height:70,
        marginVertical:20,
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
        color:'#EEEEEE'
    },
    touch:{
        flexDirection:"row",
        justifyContent:'flex-end',
    },
    flatview:{
        marginHorizontal:30,
        backgroundColor:'#00ADB5',
        width:350,
        maxHeight:'90%',
        borderRadius:50,
        paddingVertical:10,
        paddingHorizontal:20,
        marginVertical:5
    },
    flattexttitle:{
        color: '#EEEEEE',
        fontSize:18,
        fontWeight:'500',
        padding:5,
        paddingLeft:10
    },
    flattextbody:{
        color:'#EEEEEE',
        fontSize:14,
        fontWeight:'300',
        paddingLeft:8
    },
    modalContainer:{
        flex:1,
        margin: 20,
        marginVertical:30,
        borderRadius:30,
        backgroundColor:'#A6E3E9'
    },
    modalnav:{
        padding:10,
        flexDirection:'row'
    },
    modalBackIcon:{
        fontSize:26,
        padding:10,
        color:'#062C30'
    },
    ModalTitle:{
        paddingHorizontal:20,
        paddingVertical:10,
        backgroundColor:'#CBF1F5',
        borderRadius:40,
        fontSize:20,
        color:'#062C30',
        fontWeight:'700'
    },
    editTitle:{
        fontSize:18,
        marginVertical:10,
        marginHorizontal:22,
        borderBottomWidth:1,
        padding:4,
        borderColor:'#00ADB5'
    },
    editBody:{
        marginVertical:10,
        marginHorizontal:22,
        textAlignVertical:'top',
        fontSize:16,
    }
})

export default Home