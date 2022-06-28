/**
 * @format
 * @flow
 */
import * as React from 'react'
import {useState} from 'react'
import {View,KeyboardAvoidingView,Pressable,TextInput,Text,Image} from 'react-native'
import Modal from "react-native-modal";
import type {Add} from './component.type'
import {addData} from '../functions/FunctionScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from '../styles/ModalAddContact.style'
import AwesomeAlert from './AwesomeAlert';

const EditContactModal = ():React.Node =>{
    return(
        <KeyboardAvoidingView>

        </KeyboardAvoidingView>
    )
}

export default EditContactModal