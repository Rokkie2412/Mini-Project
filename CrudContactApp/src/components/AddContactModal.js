/**
 * @format
 * @flow
 */

import * as React from 'react'
import {useState} from 'react'
import {View,KeyboardAvoidingView,Pressable,TextInput,Text,Image} from 'react-native'
import Modal from "react-native-modal";
import type {Add} from './component.type'
import {addData,AddorEditContactLock,emptyAll} from '../functions/FunctionScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from '../styles/ModalAddContact.style'
import AwesomeAlert from './AwesomeAlert';

const AddContactModal = ({showmodal,setmodal}:Add):React.Node =>{
    const [first,setFirst] = useState('')
    const [last,setLast] = useState('')
    const [age,setAge] = useState('')
    const [show,setshow] = useState(false)
    const [image,setImage] = useState('N/A')
    const [error,setError] = useState('')

    const AddPack = () =>{
        setmodal(false)
        const tempPasre = parseInt(age)
        addData(first,last,tempPasre,image)
        setError('')
        emptyAll(setImage,setLast,setFirst,setAge)
    }
    console.log(AddorEditContactLock(first,last,age))
    return(
        <KeyboardAvoidingView
        // keyboardVerticalOffset={0}
        behavior='height'
        pointerEvents='box-none'
        >
            <Modal
            // avoidKeyboard={true}
            transparent={true}
            isVisible={showmodal}
            >
                <View style={styles.mainContainer}>
                    <Pressable 
                    onPress={()=>setshow(!show)}
                    style={styles.personIconView}>
                         {image === "N/A" ? <Icon style={styles.personIcon} name="person"/> :
                        <Image style={styles.imagesPerson} source={{uri:`${image}`}}/>
                        }
                    </Pressable>
                    <View style={styles.TextInputSection}>
                        <TextInput
                            placeholderTextColor="#eeeeee" 
                            placeholder="Input first name here"
                            style={styles.textinput}
                            value={first}
                            onChangeText={(temp)=>setFirst(temp)}
                        />
                        <TextInput
                            placeholderTextColor="#eeeeee" 
                            placeholder="Input last name here"
                            style={styles.textinput}
                            value={last}
                            onChangeText={(temp)=>setLast(temp)}
                        />
                        <TextInput
                            placeholderTextColor="#eeeeee" 
                            placeholder="Age"
                            style={styles.textinputAge}
                            value={age}
                            onChangeText={(temp)=>setAge(temp)}
                            keyboardType="numeric"
                        />
                    </View>
                    <Text style={styles.error}>{error}</Text>
                    <View style={styles.ButtonSection}>
                        <Pressable 
                        onPress={()=>{
                            setmodal(false)
                            emptyAll(setImage,setLast,setFirst,setAge)
                        }}
                        style={styles.Container}>
                            <Text style={styles.Button}>Cancel</Text>
                        </Pressable>
                        <Pressable
                        onPress={()=>{
                            {
                                AddorEditContactLock(first,last,age) === true?
                                AddPack():
                                setError('*Make sure name have 3 character length  and age between 1-99')
                            }
                        }}
                         style={styles.Container}>
                            <Text style={styles.Button}>Add</Text>
                        </Pressable>
                    </View>
                </View>
                <AwesomeAlert show={show} setshow={setshow} image={image} setimage={setImage}/>
            </Modal>
        </KeyboardAvoidingView>
    )
}

export default AddContactModal