import React,{useEffect, useState} from 'react';
import {View, Text, Pressable,TextInput,Modal,Image} from 'react-native'
import styles from '../styles/AddContactsStyles'
import Ion from 'react-native-vector-icons/Ionicons'
import { allowAddTrueFalse,addContactToAPI} from '../functions/AddContactFunction';
import ModalAddContact from '../components/ModalPickImage';

const AddContacts = (props) =>{
    const [First,setFirst] = useState('')
    const [Last,setLast] = useState('')
    const [Age,setAge] = useState('')
    const [Photo,setPhoto] = useState('N/A')
    const [allowAdd,setAllowAdd] = useState(true)
    const [modalVisible,setModalVisible] = useState(false)

    return(
        <View style={styles.mainContainer}>
            <View style={styles.HeaderContainer}>
                <Pressable
                onPress={()=>props.navigation.navigate('Home')}
                ><Ion name='arrow-back' style={styles.HeaderBack}/></Pressable>
                <Text style={styles.Header}>Add Contact</Text>
                <Pressable
                disabled={allowAdd}
                onPress={()=>{
                    console.log('Not Disable')
                    addContactToAPI(First,Last,Age,Photo)
                    props.navigation.navigate('Home')
                }}
                ><Ion name='checkmark-sharp' style={styles.HeaderComplete}/></Pressable>
            </View>
            <View style={styles.contactPhotoContainer}>
                <Pressable
                onPress={()=>{setModalVisible(true)}}
                >
                    {Photo === 'N/A' ? <Ion name='person' style={styles.personIcon}/> :
                    <Image source={{uri:Photo}} style={styles.image}/>
                    }
                </Pressable>
            </View>
            <ModalAddContact visible={modalVisible} setvisible={setModalVisible} setFlasePhoto={setPhoto} falsePhoto={Photo}/>
            <View style={styles.nameContainer}>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.name}
                    placeholder="First Name"
                    value={First}
                    onChangeText={(tempFirst)=>{
                        setFirst(tempFirst)
                        allowAddTrueFalse(First,Last,Age,allowAdd,setAllowAdd)
                    }}
                />
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.name}
                    placeholder="Last Name"
                    value={Last}
                    onChangeText={(tempLast)=>{
                        setLast(tempLast)
                        allowAddTrueFalse(First,Last,Age,allowAdd,setAllowAdd)
                    }}
                />
            </View>
            <View style={styles.ageContainer}>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType='numeric'
                    style={styles.age}
                    placeholder="Age"
                    value={Age}
                    onChangeText={(tempAge)=>{
                        allowAddTrueFalse(First,Last,Age,allowAdd,setAllowAdd)
                        setAge(tempAge)  
                    }}
                />
            </View>
            {First==='' || Last ==='' || Age ===''?<Text style={styles.errorvalidation}>*You must fullfill all forms</Text>:
            <Text></Text>}
            
        </View>
    )
}

export default AddContacts