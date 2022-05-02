import React from "react";
import {Text,TextInput,View,Pressable} from "react-native"
import styles from '../style/HomeStyle'
import IonIcon from 'react-native-vector-icons/Ionicons'

const Home = ({navigation}) =>{
    return(
        <View style={styles.mainContainer}>
            <View style={styles.Header}>
                <Text style={styles.HeaderText}>Contact List</Text>
            </View>
            <View style={styles.searchbar}>
                <IonIcon name="search" style={styles.searchIcon} size={20}/>
                <TextInput
                    style={styles.TextInputSearch}
                    placeholder="Search Contact"
                />
                <IonIcon name="close" style={styles.clearIcon} size={18}/>
            </View>
            <View style={styles.bodyContainer}>
                <Text>There is no current contact here</Text>
            </View>
            <View style={styles.AddContainer}>
                <Pressable style={styles.addSection}
                onPress={()=>{
                    navigation.navigate('Add')
                }}>
                    <IonIcon style={styles.addIcon} name="add" size={35}/>
                </Pressable>
            </View>
        </View>
    )
}


export default Home