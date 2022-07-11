/**
 * @flow
 */

import * as React from 'react'
import {View,Text,KeyboardAvoidingView,FlatList,Pressable,Image} from 'react-native'
import styles from '../styles/ContactAppStyle'
import {useEffect,useState} from 'react'
import {getData,FilterSearch,FuncRepeat,CheckInternet,Restart} from '../functions/FunctionScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import AddContactModal from '../components/AddContactModal'
import Searchbar from '../components/Searchbar'
import ContactCard from '../components/ContactCard'
import EditContact from '../components/EditContactModal'
import RNRestart from 'react-native-restart';
import AwesomeAlert from 'react-native-awesome-alerts'

const ContactApp = ({navigation}:Object):React.Node =>{
    const [addContact,setAddContact] = useState<boolean>(false)
    const [arrayList,setArrayList] = useState<Object>([])
    const [showCard,setShowCard] = useState<boolean>(false)
    const [showEdit,setShowEdit] = useState<boolean>(false)
    const [id,setId] = useState<string>('')
    const [first,setFirst] = useState<string>('')
    const [last,setLast] = useState<string>('')
    const [age,setAge] = useState<string>('')
    const [image,setImage] = useState<string>('')
    const [filteredData,setFilterData] = useState<Object>([])
    const [search,setSearch] = useState<string>('')
    const [alert,setAlert] = useState<boolean>(false)

    useEffect(()=>{
        getData(setArrayList,arrayList,filteredData,setFilterData)
    },[addContact,showEdit])
    
    useEffect(() => {
    const interval = setInterval(() => {
        CheckInternet(setAlert)
    }, 2000);
    return () => clearInterval(interval);
    },[]);

    const _render = ({item}) =>{
        return(
            <View style={styles.flatcontainer}>   
                <Pressable
                testID='FlatlistButton'
                onPress={()=>{
                setId(item.id)
                setFirst(item.firstName)
                setLast(item.lastName)
                setAge(item.age)
                setImage(item.photo)
                setShowCard(true)
                }}
                onLongPress={()=>{
                setId(item.id)
                setFirst(item.firstName)
                setLast(item.lastName)
                setAge(item.age)
                setImage(item.photo)
                setShowEdit(true)
                }}
                style={styles.contactList}>
                    {item.photo === "N/A" ? <Icon style={styles.personIcon} name="person"/> :
                    <Image style={styles.imagesPerson} source={{uri:`${item.photo}`}}/>
                    }
                    <Text style={styles.nameList}>{item.firstName} {item.lastName}</Text>
                    </Pressable>
            </View>
        )
    }

    return(
        <KeyboardAvoidingView 
        style={styles.mainContainer}>
            <View style={styles.HeaderView}>
                <Text style={styles.Header}>Contact</Text>
            </View>
            <Searchbar search={search} setSearch={(text)=>FilterSearch(text,arrayList,setFilterData,setSearch)}/>
            <View style={styles.body}>
                <FlatList
                    testID='Flastlist'
                    showsVerticalScrollIndicator={false}
                    data={filteredData.sort((a,b)=>a.firstName.localeCompare(b.firstName))}
                    keyExtractor={({id},index)=>id}
                    renderItem={_render}
                />
            </View>
            <Pressable 
            testID='addContactButton'
            onPress={()=>{
                setAddContact(true)
            }}
            style={styles.addContainer}>
                <Icon name="add" style={styles.addIcon}/>
            </Pressable>
            <AddContactModal showmodal={addContact} setmodal={setAddContact}/>
            <ContactCard show={showCard} setshow={setShowCard} image={image} first={first} last={last} Age={age}/>
            <EditContact 
            show={showEdit} setshow={setShowEdit} 
            id={id} first={first} last={last} 
            age={age} photo={image}
            setfirst={setFirst}
            setlast={setLast}
            setage={setAge}
            setphoto={setImage}
            />
            <AwesomeAlert
                show={alert}
                title="Cannot connected to internet"
                message='Please check internet connection and restart application'
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="Restart application"
                confirmButtonColor="#00ADB5"
                onConfirmPressed={Restart}
            />
        </KeyboardAvoidingView>
    )
}

export default ContactApp

