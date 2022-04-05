import React,{useState} from 'react'
import {StyleSheet,TextInput,View,Pressable,Text} from 'react-native'
import Search from 'react-native-vector-icons/Ionicons'

const SearchBar = ({search,setSearch,searchSubmit}) => {
    
    

    return(
        <View style={styles.searchContainer}>
            <Search style={styles.magnifyingGlass} name='search' size={28}/>
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Search contact'   
                value={search}
                onChangeText={setSearch}
                style={{flex:1,fontSize:17}}
                onEndEditing={searchSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer:{
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:10,
        marginVertical:10,
        marginHorizontal:15,
        flexDirection:'row'
    },
    magnifyingGlass:{
        alignSelf:'center',
        color:'black',
        marginHorizontal:10,
    }
})

export default SearchBar