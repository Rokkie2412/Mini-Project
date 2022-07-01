import {create,act} from 'react-test-renderer';
import React from 'react';
import EditContactModal from "../../src/components/EditContactModal";
import {AddorEditContactLock} from "../../src/functions/FunctionScreen"
const func = jest.fn()
const tree = create(<EditContactModal photo={'N/A'} setshow={func} first={"kota"} last={"Jambi"} age={"12"} setfirst={func} setlast={func} setage={func} setphoto={func}/>)

jest.mock('react-native-vector-icons/Ionicons', () => 'Mocked Ionicons');
jest.mock('react-native-modal',()=> "Mocked Modal React Native")
jest.mock('@react-native-community/netinfo',()=>'Mocked Netinfo')
jest.mock('react-native-image-picker',()=>{
    return{
        launchCamera:jest.fn(),
        launchImageLibrary:jest.fn()
    }
})

// const spyHandleNotification = jest.spyOn(age,'toString') 

describe('Testing for Modal Edit Contact', () => {
  describe('Snapshot for Edit Contact', () => {
    it("Should render correctly",()=>{
        expect(tree).toMatchSnapshot()
    })
  })
  describe('Button and Textinput test for Edit Contact', () => {
    it("Should be pressed",()=>{
        const pick = tree.root.findByProps({testID:'PickImage'}).props
        act(()=>pick.onPress())
        const edit = tree.root.findByProps({testID:'edit'}).props
        act(()=>edit.onPress())
        
        const cancel = tree.root.findByProps({testID:'cancel'}).props
        act(()=>cancel.onPress())
        // expect(AddorEditContactLock("kota","Jambi","12")).toBeCalled(true)
    })
    it("Should correct onChangeText",()=>{
        const first = tree.root.findByProps({testID:'first'}).props
        act(()=>first.onChangeText())
        const last = tree.root.findByProps({testID:'last'}).props
        act(()=>last.onChangeText())
        const age = tree.root.findByProps({testID:'age'}).props
        act(()=>age.onChangeText())
    })
  })
  
})
