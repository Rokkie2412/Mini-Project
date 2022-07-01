import {create,act} from 'react-test-renderer';
import React from 'react';
import SearchBar from "../../src/components/Searchbar";

const func = jest.fn()
const tree = create(<SearchBar setSearch={func}/>)


jest.mock('react-native-vector-icons/Ionicons', () => 'Mocked Ionicons');

describe('Testing for SearchBar', () => {
  describe('Snapshot for SearchBar', () => {
    it('Should render correctly',()=>{
        expect(tree).toMatchSnapshot()
    })
  })
  describe('Testing Textinput for SearchBar', () => {
    it('Should correct onChangeText',()=>{
        const Search = tree.root.findByProps({testID:'Search'}).props
        act(()=>Search.onChangeText())
    })
  })
  
})
