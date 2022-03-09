import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import ResultList from '../components/ResultList'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = (SearchTerm) =>{
    const [term,setTerm] = useState('')
    const[searchApi,results,errorMessage] = useResults();

    return(
        <View>
            <SearchBar
             term={term}
            onTermChange={setTerm}
            onTermSubmit={()=> searchApi(term)}/>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>we Have found {results.length} results</Text>
            <ResultList title='Cost Effective'/>
            <ResultList title='Bit Pricer'/>
            <ResultList title='Big Spender'/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SearchScreen;