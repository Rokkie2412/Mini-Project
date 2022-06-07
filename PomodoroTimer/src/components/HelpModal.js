import { KeyboardAvoidingView,View,Text,Pressable,Modal } from 'react-native';
import React from 'react';
import styles from '../styles/HelpModalStyle'
import Ion from 'react-native-vector-icons/Ionicons'
const HelpModal = ({HelpVisible,setHelpVisible}) =>{
    return(
        <Modal
        visible={HelpVisible}
        animationType='fade'
        transparent={true}
        >
            <KeyboardAvoidingView style={styles.mainContainer}>
                <View style={styles.CloseContainer}>
                    <Pressable onPress={()=>setHelpVisible(false)}><Ion name='close' style={styles.closeIcon}/></Pressable>
                </View>
                <Text style={styles.Header}>How to use</Text>
                <View style={styles.TextContainer}>
                    <View style={styles.textStruct}>
                        <Text style={styles.text1}>1.</Text>
                        <Text style={styles.text2}>For better convenience, please lock the app on background</Text>
                    </View>
                    <View style={styles.textStruct}>
                        <Text style={styles.text1}>2.</Text>
                        <Text style={styles.text2}>Before use Doro Timer, you can set your timer that set for you in setting button</Text>
                    </View>
                    <View style={styles.textStruct}>
                        <Text style={styles.text1}>3.</Text>
                        <Text style={styles.text2}>To start timer, press play button, and to pause press pause button. Button will change every you press the button</Text>
                    </View>
                    <View style={styles.textStruct}>
                        <Text style={styles.text1}>4.</Text>
                        <Text style={styles.text2}>To stop timer, press stop button, timer will get reset to first condition</Text>
                    </View>
                    <View style={styles.textStruct}>
                        <Text style={styles.text1}>5.</Text>
                        <Text style={styles.text2}>When timer on you can't open setting, you must stop your timer first</Text>
                    </View>
                </View>
                <Pressable
                onPress={()=>setHelpVisible(false)}
                 style={styles.CloseSction}>
                    <Text style={styles.close}>Close</Text>
                </Pressable>
            </KeyboardAvoidingView>
        </Modal>
    )
}

export default HelpModal