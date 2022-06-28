/**
 * @flow
 */

import * as React from 'react'
import {View,Text,KeyboardAvoidingView,FlatList,Pressable,Image} from 'react-native'
import styles from '../styles/ContactAppStyle'
import {useEffect,useState} from 'react'
import {getData} from '../functions/FunctionScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import AddContactModal from '../components/AddContactModal'
import Searchbar from '../components/Searchbar'
import ContactCard from '../components/ContactCard'
import { useFocusEffect } from '@react-navigation/native';

const ContactApp = ({navigation}:Object):React.Node =>{
    const [addContact,setAddContact] = useState<boolean>(false)
    const [arrayList,setArrayList] = useState<Object>([])
    const [showCard,setShowCard] = useState<boolean>(false)
    const [id,setId] = useState('')
    const [first,setFirst] = useState('')
    const [last,setLast] = useState('')
    const [age,setAge] = useState('')
    const [image,setImage] = useState('')
    const [repeater,setRepeater]=useState(0)

    useFocusEffect(
    React.useCallback(() => {
      getData(setArrayList,arrayList)
      setTimeout(()=>setRepeater(prevstate=>prevstate+1),1000)
    }, [])
  );

    return(
        <KeyboardAvoidingView 
        style={styles.mainContainer}>
            <View style={styles.HeaderView}>
                <Text style={styles.Header}>Contact</Text>
            </View>
            <Searchbar/>
            <View style={styles.body}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={arrayList.sort((a,b)=>a.firstName.localeCompare(b.firstName))}
                    keyExtractor={({id},index)=>id}
                    renderItem={({item})=>{
                        return(
                            <View style={styles.flatcontainer}>   
                                <Pressable
                                onPress={()=>{
                                    setId(item.id)
                                    setFirst(item.firstName)
                                    setLast(item.lastName)
                                    setAge(item.age)
                                    setImage(item.photo)
                                    
                                    
                                }}
                                style={styles.contactList}>
                                    {item.photo === "N/A" ? <Icon style={styles.personIcon} name="person"/> :
                                    <Image style={styles.imagesPerson} source={{uri:`${item.photo}`}}/>
                                    }
                                    <Text style={styles.nameList}>{item.firstName} {item.lastName}</Text>
                                </Pressable>
                            </View>
                        )
                    }}
                />
            </View>
            <Pressable 
            onPress={()=>{
                setAddContact(true)
            }}
            style={styles.addContainer}>
                <Icon name="add" style={styles.addIcon}/>
            </Pressable>
            <AddContactModal showmodal={addContact} setmodal={setAddContact}/>
            <ContactCard show={showCard} setshow={setShowCard} image={image} first={first} last={last} Age={age}/>
        </KeyboardAvoidingView>
    )
}

export default ContactApp