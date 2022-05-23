import React from "react";
import {Modal,View,Text,Pressable,TextInput,Image} from 'react-native'
import styles from '../styles/ModalEditContactStyle'
import Ion from 'react-native-vector-icons/Ionicons'
import ModalAddContact from "./ModalPickImage";
import { editContactToAPI } from "../functions/EditContactFunction";
import { GettingData } from "../functions/ContactFunction";


const ModalEditContacts = ({showmodal,setshowmodal,firstNameEdit,setFirstNameEdit,lastNameEdit,
    setLastNameEdit,ageEdit,setAgeEdit,PhotoEdit,setPhotoEdit,id,visible,setvisible,Contact,setContact,setTempContact}) =>{
    return(
        <Modal
        transparent={true}
        visible={showmodal}
       animationType='fade'
        >
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <Text style={styles.title}>Edit Contact</Text>
                    <View style={styles.personSection}>
                        <Pressable
                        onPress={()=>setvisible(true)}
                        >
                        {PhotoEdit === 'N/A'?<Ion name="person" style={styles.personIcon}/>:
                        <Image style={styles.imagePhoto} source={{uri:`${PhotoEdit}`}}/>
                        }
                        </Pressable>
                    </View>
                    <View style={styles.inputSection}>
                        <TextInput
                            placeholderTextColor={'white'}
                            style={styles.input}
                            placeholder='Edit First Name'
                            value={firstNameEdit}
                            onChangeText={(tempEdit)=>setFirstNameEdit(tempEdit)}
                        />
                    </View>
                    <View style={styles.inputSection}>
                        <TextInput
                            placeholderTextColor={'white'}
                            style={styles.input}
                            placeholder='Edit Last Name'
                            value={lastNameEdit}
                            onChangeText={(tempEdit)=>setLastNameEdit(tempEdit)}
                        />
                    </View>
                    
                    <View style={styles.inputSectionAge}>
                        
                        <TextInput
                            placeholderTextColor={'white'}
                            style={styles.inputAge}
                            placeholder='Edit Age'
                            value={ageEdit.toString()}
                            onChangeText={(tempEdit)=>setAgeEdit(tempEdit)}
                        />
                    </View>
                    <View style={styles.ButtonSection}>
                        <Pressable
                        onPress={()=>{
                            setshowmodal(false)
                            setFirstNameEdit('')
                            setLastNameEdit('')
                        }}
                        >
                            <Text style={styles.button}>Cancel</Text>
                        </Pressable>
                        <Pressable
                        onPress={()=>{
                            console.log(id)
                            editContactToAPI(firstNameEdit,lastNameEdit,ageEdit,PhotoEdit,id)
                            setshowmodal(false)
                            GettingData(Contact,setContact,setTempContact)
                        }}
                        >
                            <Text style={styles.button}>Save</Text>
                        </Pressable>
                    </View>
                </View>
                <ModalAddContact visible={visible} setvisible={setvisible} setFlasePhoto={setPhotoEdit} falsePhoto={PhotoEdit}/>
            </View>
        </Modal>
    )
}

export default ModalEditContacts