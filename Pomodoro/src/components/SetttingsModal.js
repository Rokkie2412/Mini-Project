import { View,Text,Pressable,Modal,TextInput } from 'react-native';
import React from 'react';
import styles from '../styles/SettingsStyle'

const Settings = ({show,setshow}) =>{
    return(
        <Modal
        visible={show}
        animationType='fade'
        transparent={true}
        >
            <View style={styles.mainContainer}>
                <View style={styles.headerSection}>
                    <Text style={styles.header}>Settings</Text>
                </View>
                <View style={styles.SectionSetWorkTimer}>
                    <Text style={styles.set}>Set Work Timer</Text>
                    <View style={styles.inputSection}>
                        <TextInput
                        placeholderTextColor={'#EEEEEE'}
                        style={styles.setTimerWork}
                        keyboardType='number-pad'
                        placeholder='00'
                        />
                        <TextInput
                        placeholderTextColor={'#EEEEEE'}
                        style={styles.setTimerWork}
                        keyboardType='number-pad'
                        placeholder='00'
                        />
                        <TextInput
                        placeholderTextColor={'#EEEEEE'}
                        style={styles.setTimerWork}
                        keyboardType='number-pad'
                        placeholder='00'
                        />
                    </View>
                </View>
                <View style={styles.SectionSetWorkTimer}>
                    <Text style={styles.set}>Set Short Break Timer</Text>
                    <View style={styles.inputSection}>
                        <TextInput
                        placeholderTextColor={'#EEEEEE'}
                        style={styles.setTimerWork}
                        keyboardType='number-pad'
                        placeholder='00'
                        />
                        <TextInput
                        placeholderTextColor={'#EEEEEE'}
                        style={styles.setTimerWork}
                        keyboardType='number-pad'
                        placeholder='00'
                        />
                    </View>
                </View>
                <View style={styles.SectionSetWorkTimer}>
                    <Text style={styles.set}>Set Long Break Timer</Text>
                    <View style={styles.inputSection}>
                        <TextInput
                        placeholderTextColor={'#EEEEEE'}
                        style={styles.setTimerWork}
                        keyboardType='number-pad'
                        placeholder='00'
                        />
                        <TextInput
                        placeholderTextColor={'#EEEEEE'}
                        style={styles.setTimerWork}
                        keyboardType='number-pad'
                        placeholder='00'
                        />
                        <TextInput
                        placeholderTextColor={'#EEEEEE'}
                        style={styles.setTimerWork}
                        keyboardType='number-pad'
                        placeholder='00'
                        />
                    </View>
                </View>
                <View style={styles.buttonSection}>
                    <Pressable onPress={()=>setshow(!show)}>
                        <Text style={styles.button}>Cancel</Text>
                    </Pressable>
                    <Pressable>
                        <Text style={styles.button}>Save</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default Settings