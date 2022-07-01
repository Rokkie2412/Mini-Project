/**
 * @format
 * @flow
 */
import * as React from 'react'
import {useState,useEffect} from 'react'
import {View,KeyboardAvoidingView,Pressable,TextInput,Text,Image} from 'react-native'
import Modal from "react-native-modal";
import type {Add} from './component.type'
import {putData,AddorEditContactLock} from '../functions/FunctionScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from '../styles/EditContact.style'
import type {EditContact} from './component.type'
import AwesomeAlert from './AwesomeAlert';


const EditContactModal = 
({show,setshow,id,first,last,age,photo,setfirst,setlast,setage,setphoto}:EditContact):React.Node =>{
    const [pickImage,setPickImage] = useState(false)
    const [Error,setError] = useState('')

    const putPack = ():void =>{
        setshow(false)
        const tempPasre = parseInt(age)
        putData(first,last,tempPasre,photo,id)
        setError('')
    }

    const set = ():void =>{
        AddorEditContactLock(first,last,age) === true?
        putPack():
        setError('*Make sure name have 3 character length  and age between 1-99')
    }

    return(
        <KeyboardAvoidingView>
            <Modal
            isVisible={show}
            style={styles.mainContainer}
            >
            <Text style={styles.header}>Edit Contact</Text>
            <Pressable 
            testID='PickImage'
            onPress={()=>setPickImage(true)}
            style={styles.imageView}>
                {photo === "N/A" ? <Icon style={styles.personIcon} name='person'/>:
                <Image style={styles.imagePerson} source={{uri:`${photo}`}}/>
                }
            </Pressable>
            <View style={styles.inputsection}>
                <TextInput
                testID='first'
                placeholderTextColor="#eeeeee"
                placeholder='Edit First Name'
                style={styles.textinput}
                value={first}
                onChangeText={(temp)=>setfirst(temp)}
                />
                <TextInput
                testID='last'
                placeholderTextColor="#eeeeee"
                placeholder='Edit Last Name'
                style={styles.textinput}
                value={last}
                onChangeText={(temp)=>setlast(temp)}
                />
                <TextInput
                testID='age'
                placeholderTextColor="#eeeeee"
                placeholder='Edit Age'
                style={styles.textinputAge}
                value={age.toString()}
                onChangeText={(temp)=>setage(temp)}
                />
            </View>
            <Text style={styles.error}>{Error}</Text>
            <View style={styles.buttonSection}>
                <Pressable
                testID='cancel'
                onPress={()=>{
                    setshow(false)
                }}
                >
                    <Text style={styles.button}>Cancel</Text>
                </Pressable>
                <Pressable
                testID='edit'
                onPress={()=>{
                   set()
                }}
                >
                    <Text style={styles.button}> Edit </Text>
                </Pressable>
            </View>
            </Modal>
            <AwesomeAlert show={pickImage} setshow={setPickImage} image={photo} setimage={setphoto}/>
        </KeyboardAvoidingView>
    )
}

export default EditContactModal