import React from "react";
import {View,Text,StyleSheet} from 'react-native'
import { Appbar,Title } from "react-native-paper";

function Header({titleText}){
    return(
        <Appbar.Header style={styles.headerContainer}>
            <View style={styles.containter}>
                <Title style={styles.title}>{titleText}</Title>
            </View>
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor:'#242424'
    },
    containter:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color:'#fff'
    }
})

export default Header