import React from "react";
import {Modal,View,Text,Pressable} from 'react-native'
import { openGallery,openCamera } from "../functions/AddContactFunction";
import styles from "../styles/ModalAddContactstyle";


const ModalAddContact = ({visible,falsePhoto,setFlasePhoto,setvisible}) =>{
    return(
        <Modal
        visible={visible}
        animationType='fade'
        transparent={true}
        onRequestClose={()=>{
            setvisible(false)
        }}
        >
            <View style={styles.modalContainer}>
                <View style={styles.container}>
                    <Text style={styles.title}>Pick Image From : </Text>
                    <View style={styles.buttonContainer}>
                        <Pressable
                        onPress={()=>{
                            openGallery(falsePhoto,setFlasePhoto)
                            setvisible(false)
                        }}>
                            <Text style={styles.button}>Gallery</Text>
                        </Pressable>
                        <Pressable
                        onPress={()=>{
                            openCamera(falsePhoto,setFlasePhoto)
                            setvisible(false)
                        }}
                        >
                            <Text style={styles.button}>Camera</Text>
                        </Pressable>
                    </View>
                    <View style={{justifyContent:'center',flexDirection:'row'}}>
                        <Pressable
                        onPress={()=>setvisible(false)}
                        ><Text style={styles.cancel}>Cancel</Text></Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalAddContact