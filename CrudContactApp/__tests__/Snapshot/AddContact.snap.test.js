import {create,act} from 'react-test-renderer';
import React from 'react';
import AddContactModal from "../../src/components/AddContactModal";
import {AddorEditContactLock} from "../../src/functions/FunctionScreen"

const func = jest.fn()
const tree = create(<AddContactModal setmodal={func}/>)
const mymodule = require('../../src/components/AddContactModal')

jest.mock('react-native-vector-icons/Ionicons', () => 'Mocked Ionicons');
jest.mock('react-native-modal',()=> "Mocked Modal React Native")
jest.mock('@react-native-community/netinfo',()=>'Mocked Netinfo')
jest.mock('react-native-image-picker',()=>{
    return{
        launchCamera:jest.fn(),
        launchImageLibrary:jest.fn()
    }
})

describe('Testing for Modal Edit Contact', () => {
  describe('Snapshot for Edit Contact', () => {
    it('should render correctly',()=>{
        expect(tree).toMatchSnapshot()
    })
  })
  describe('Button get pressed', () => {
    it('should render correctly',()=>{
        const person = tree.root.findByProps({testID:'person'}).props
        act(()=>person.onPress())
        const cancel = tree.root.findByProps({testID:'cancel'}).props
        act(()=>cancel.onPress())
        expect(pack).toBeCalled()
    })
  })
  describe('Textinput onChangeText', () => {
    it('Text input',()=>{
        const first = tree.root.findByProps({testID:'first'}).props
        act(()=>first.onChangeText())
        const last = tree.root.findByProps({testID:'last'}).props
        act(()=>last.onChangeText())
        const age = tree.root.findByProps({testID:'age'}).props
        act(()=>age.onChangeText())
    })
  })
  
})
