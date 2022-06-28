/**
 * @format
 * @flow
 */
import * as React from 'react'
import type {Cards} from './component.type'
import {useState} from 'react'
import {View,KeyboardAvoidingView,Pressable,Text,Image} from 'react-native'
import Modal from "react-native-modal";
import styles from '../styles/ContactCard.Style'
import Icon from 'react-native-vector-icons/Ionicons'

const ContactCard = ({show,setshow,image,first,last,Age}:Cards):React.Node =>{
    console.log(image)
    return(
        <Modal
        isVisible={show}
        style={styles.mainContainer}
        >
            <Text style={styles.Header}>Contact Card</Text>
            {image === "N/A" ? <Icon style={styles.personIcon} name='person'/>:
            <Image style={styles.imagePerson} source={{uri:`${image}`}}/>
            }
            <View style={styles.name}>
                <Text style={styles.text}>First Name:  </Text>
                <Text style={styles.textName}>{first}</Text>
            </View>
            <View style={styles.name}>
                <Text style={styles.text}>Last Name:  </Text>
                <Text style={styles.textName}>{last}</Text>
            </View>
            <View style={styles.name}>
                <Text style={styles.text}>Age:  </Text>
                <Text style={styles.textName}>{Age}</Text>
            </View>
            <View style={styles.button}>
                <Pressable
                onPress={()=>{
                    setshow(!show)
                }}
                >
                    <Text style={styles.editButton}>Close</Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.editButton}> Edit </Text>
                </Pressable>
                
            </View>
        </Modal>
    )
}

export default ContactCard