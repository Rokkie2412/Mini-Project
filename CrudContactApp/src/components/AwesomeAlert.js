/**
 * @format
 * @flow
 */
import * as React from 'react'
import Modal from "react-native-modal";
import {Pressable,Text,View} from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts';
import type {PickAdd} from './component.type'
import {openGallery,openCamera} from '../functions/FunctionScreen'
import styles from '../styles/ModalStylePickImage'
import Icon from 'react-native-vector-icons/Ionicons'

const Awesome = ({show,setshow,image,setimage}:PickAdd):React.Node =>{
    return(
        <Modal
        isVisible={show}
        style={styles.mainContainer}>
            <Pressable
            onPress={()=>setshow(false)}
            >
                    <Icon name='close' style={styles.close}/>
            </Pressable>
            <Text style={styles.Header}>Choose image source :</Text>
            <View style={styles.iconView}>
                <Pressable
                onPress={()=>{
                    openCamera(image,setimage)
                    setshow(false)
                }}
                >
                    <Icon name='camera' style={styles.icon}/>
                </Pressable>
                <Pressable
                onPress={()=>{
                    openGallery(image,setimage)
                    setshow(false)
                }}
                >
                    <Icon name='image' style={styles.icon}/>
                </Pressable>
            </View>

        </Modal>
    )
}

export default Awesome