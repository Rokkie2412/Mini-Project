import React from "react";
import { View,Text,TextInput } from 'react-native';
import Ion from 'react-native-vector-icons/Ionicons'
import styles from '../styles/SearchbarStyles'
function Searchbar({search,setSearch}){
    return(
        <View style={styles.backgroundStyle}>
            <Ion name="search" style={styles.iconStyle}/>
            <TextInput
                placeholderTextColor={'#Ffff'}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={search}
                onChangeText={(termsearch)=>{
                    setSearch(termsearch)
                }}
            />
        </View>
    )
}

export default Searchbar

