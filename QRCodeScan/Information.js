import React from "react";
import {View,Text,StyleSheet,Modal,Pressable,Dimensions} from 'react-native'

const Infromation = (modal) => {

    const SCREEN_HEIGHT = Dimensions.get('window').height
    const SCREEN_WIDTH = Dimensions.get("window").width;

    return(
        <Modal
        animationType='slide'
        transparent={true}
        visible={modal}
        >
            <View style={styles.modalContainer}>

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer:{
        backgroundColor: 'rgba(255,255,255,0.9)',
        flex: 1,
        width:100,
        height:100,
        
    }
})

export default Infromation