/**
 * @format
 * @flow
 */

import * as React from 'react'
import {useState} from 'react'
import {View,KeyboardAvoidingView,Pressable,TextInput,Text,Image} from 'react-native'
import Modal from "react-native-modal";
import type {Add} from './component.type'
import {addData,AddorEditContactLock,emptyAll,AddPack} from '../functions/FunctionScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from '../styles/ModalAddContact.style'
import AwesomeAlert from './AwesomeAlert';

const AddContactModal = ({showmodal,setmodal}:Add):React.Node =>{
    const [first,setFirst] = useState<string>('')
    const [last,setLast] = useState<string>('')
    const [age,setAge] = useState<string>('')
    const [show,setshow] = useState<boolean>(false)
    const [image,setImage] = useState<string>('N/A')
    const [error,setError] = useState<string>('')

    const Add = () =>{
        AddorEditContactLock(first,last,age) === true?
        AddPack(setmodal,age,first,last,image,setImage,setLast,setFirst,setAge,setError):
        setError('*Make sure name have 3 character length  and age between 1-99')
    }

    const imageorPhoto = () =>{
        if(image === 'N/A'){
            <Icon style={styles.personIcon} name="person"/>
        }else{
            <Image style={styles.imagesPerson} source={{uri:`${image}`}}/>
        }
    }

    return(
        <KeyboardAvoidingView
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
                    testID='person'
                    onPress={()=>setshow(!show)}
                    style={styles.personIconView}>
                         <View>{imageorPhoto()}</View>
                    </Pressable>
                    <View style={styles.TextInputSection}>
                        <TextInput
                            testID='first'
                            placeholderTextColor="#eeeeee" 
                            placeholder="Input first name here"
                            style={styles.textinput}
                            value={first}
                            onChangeText={(temp)=>setFirst(temp)}
                        />
                        <TextInput
                            testID='last'
                            placeholderTextColor="#eeeeee" 
                            placeholder="Input last name here"
                            style={styles.textinput}
                            value={last}
                            onChangeText={(temp)=>setLast(temp)}
                        />
                        <TextInput
                            testID='age'
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
                        testID='cancel' 
                        onPress={()=>{
                            setmodal(false)
                            emptyAll(setImage,setLast,setFirst,setAge)
                        }}
                        style={styles.Container}>
                            <Text style={styles.Button}>Cancel</Text>
                        </Pressable>
                        <Pressable
                        testID='Add'
                        onPress={Add}
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