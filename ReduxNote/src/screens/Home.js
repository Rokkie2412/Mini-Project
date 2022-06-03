import React,{useState} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,FlatList,Modal,TextInput} from 'react-native'
import { useSelector,useDispatch } from 'react-redux'
import { deleteFromArray,addArray } from '../redux/reduxs'
const Home = ({navigation}) => {
    const [modal,setModal] = useState(false)
    const [TitleModal,setTitleModal] = useState('')
    const [BodyModal, setBodyModal] = useState('')
    const datasets = useSelector((state) => state.resultWorkinSecond)
    const dispatch = useDispatch()
    let object={}
    let tempTitleModal = ''
    let tempBodyModal = ''

    const removeNote = (title) => {
        dispatch(deleteFromArray(title))
    }

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

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.haderText}>Add Note</Text>
            </View>
            
            {/* body */}
            <View style={styles.body}>
                <FlatList
                data={data}
                keyExtractor={(data)=>data.title}
                renderItem={({item})=>{
                    return(
                        <View>
                            {/* Modal */}
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
                                        setModal(!modal)
                                    }}
                                    >
                                        <Text style={styles.modalBackIcon}>Back</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.ModalTitle}>Edit Note</Text>
                                </View>
                                {/* Modal Input */}
                                <View style={styles.modalInput}>
                                    <TextInput
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    placeholder='Edit your title here'
                                    style={styles.editTitle}
                                    value={TitleModal}
                                    onChangeText={(newTitle)=>{
                                        setTitleModal(newTitle)
                                    }}
                                    />
                                    <TextInput
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    placeholder='Edit your note here'
                                    style={styles.editBody}
                                    value={BodyModal}
                                    onChangeText={(newbody)=>{
                                        setBodyModal(newbody)
                                    }}
                                    />
                                </View>
                            </View>
                        </Modal>
                        <TouchableOpacity
                        onLongPress={()=>{
                            removeNote(item.title)
                        }}
                        onPress={()=>{
                            editFilter(item.title,item.body)
                            setModal(true)
                        }}
                        >
                            <View style={styles.flatview}>
                                <Text style={styles.flattexttitle}>{item.title}</Text>
                                <Text style={styles.flattextbody}>{item.body}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    )
                }}
                />
            </View>

            {/* Button */}
            <View style={styles.touch}>
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('AddNotes')
                }}
                >
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
        backgroundColor: '#F1FFFF',
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
    },
    textBody:{
        fontSize:17,
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
    touch:{
        flexDirection:"row",
        justifyContent:'flex-end',
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
    }
})

export default Home

