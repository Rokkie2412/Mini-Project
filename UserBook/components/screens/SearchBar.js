import React from 'react'
import {StyleSheet,TextInput,View} from 'react-native'
import Search from 'react-native-vector-icons/Ionicons'
import SearchBar from "react-native-dynamic-search-bar";

const SearchBarComponent = ({search,setSearch,searchSubmit,clear}) => {
    return(
        <View style={styles.searchContainer}>
            {/* <Search style={styles.magnifyingGlass} name='search' size={28}/>
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Search contact'   
                value={search}
                onChangeText={setSearch}
                style={{flex:1,fontSize:17}}
                onEndEditing={searchSubmit}
            /> */}
            <SearchBar
                style={{backgroundColor:'#F0EEEE',height:55,justifyContent:'center'}}
                height={50}
                fontSize={18}
                placeholder="Search Contact"
                placeholderTextColor='grey'
                backgroundColor='#F0EEEE'
                onClearPress={clear}
                value={search}
                onChangeText={setSearch}
                onEndEditing={searchSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer:{
        justifyContent:'center',
        height:50,
        borderRadius:10,
        marginVertical:10,
        // marginHorizontal:2,
        flexDirection:'row'
    },
    magnifyingGlass:{
        alignSelf:'center',
        color:'black',
        marginHorizontal:10,
    }
})

export default SearchBarComponent