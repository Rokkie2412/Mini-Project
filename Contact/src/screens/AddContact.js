import React,{useState, useEffect} from "react";
import {Text,TextInput,View,Pressable} from "react-native"
import styles from '../style/AddContactStyle'
import IonIcon from 'react-native-vector-icons/Ionicons'

const AddContact = () =>{
    return(
        <View style={styles.mainContainer}>
            <View style={styles.Header}>
                <IonIcon name="arrow-back" style={styles.IconBack}/>
                <Text style={styles.HeaderText}>Add Contact</Text>
                <Text>        </Text>
            </View>
        </View>
    )
}

export default AddContact