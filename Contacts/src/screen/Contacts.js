import React,{useState,useEffect} from 'react';
import { View, Text, Pressable, Modal,FlatList, Image} from 'react-native';
import styles from '../styles/ContactStyles'
import { GettingData,FilterSearch } from '../functions/ContactFunction';
import Ion from 'react-native-vector-icons/Ionicons'
import Searchbar from '../components/Searchbar';
import { useIsFocused } from '@react-navigation/native';
import ModalEdit from '../components/ModalEditContact'

const Contacts = (props) =>{
    const [Contact,setContact] = useState([])
    const [tempContact, setTempContact] = useState([])
    const [Search,setSearch] = useState('')
    const [editModal,setEditModal] = useState(false)
    const [firstEdit,setFirstEdit] = useState('')
    const [lastEdit,setLastEdit] = useState('')
    const [AgeEdit,setAgeEdit] = useState('')
    const [PhotoEdit, setPhotoEdit] = useState('')
    const [itemId, setItemId] = useState('')
    const [visiblepick, setVisiblePick] = useState(false)

    const isFocus = useIsFocused()
    useEffect(()=>{
        GettingData(Contact,setContact,setTempContact)
    },[props,isFocus])

    return(
        <View style={styles.mainContainer}>
            <Text style={styles.Header}>Contact List</Text>
            <Searchbar search={Search} setSearch={(text)=>FilterSearch(text,Contact,setTempContact,setSearch)}/>
            <View style={styles.containerEmpty}>
                <FlatList
                        data={tempContact}
                        keyExtractor={(item)=>item.id}
                        renderItem={({item})=>{
                            return(
                                <View style={styles.flatContainer}>
                                    <Pressable
                                    onPress={()=>{
                                        setFirstEdit(item.firstName)
                                        setLastEdit(item.lastName)
                                        setAgeEdit(item.age)
                                        setPhotoEdit(item.photo)
                                        setItemId(item.id)
                                        setEditModal(true)
                                    }}
                                    >
                                        <View style={styles.ContactListContainer}>
                                            {item.photo == 'N/A' ? <Ion name='person' style={styles.peopleIcon}/> :
                                            <Image style={styles.imagePhoto} source={{uri:`${item.photo}`}}/>
                                            }
                                            <Text style={styles.nameContactFirst}>{item.firstName} </Text>
                                            <Text style={styles.nameContactLast}>{item.lastName}</Text>
                                        </View>
                                    </Pressable>
                                    <ModalEdit showmodal={editModal} setshowmodal={setEditModal} firstNameEdit={firstEdit} setFirstNameEdit={setFirstEdit}
                                        lastNameEdit={lastEdit} setLastNameEdit={setLastEdit} ageEdit={AgeEdit} setAgeEdit={setAgeEdit} PhotoEdit={PhotoEdit}
                                        setPhotoEdit={setPhotoEdit} id={itemId} visible={visiblepick} setvisible={setVisiblePick}
                                        Contact={Contact} setTempContact={setTempContact} setContact={setContact}
                                    />
                                </View>
                            )
                        }}
                    />
            </View>
            <View style={{}}>
                <View style={styles.buttonContainer}>
                <Pressable onPress={()=>{
                    props.navigation.navigate('Add')
                }}>
                    <Ion name='add' style={styles.addButton}/>
                </Pressable>
            </View>
            </View>
        </View>
        
    )
}

export default Contacts