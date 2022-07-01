import {create,act} from 'react-test-renderer';
import React from 'react';
import AwesomeAlert from "../../src/components/AwesomeAlert";


jest.mock('react-native-vector-icons/Ionicons', () => 'Mocked Ionicons');
jest.mock('react-native-modal',()=> "Mocked Modal React Native")
jest.mock('@react-native-community/netinfo',()=>'Mocked Netinfo')
jest.mock('react-native-image-picker',()=>{
    return{
        launchCamera:jest.fn(),
        launchImageLibrary:jest.fn()
    }
})
const func = jest.fn()
const tree = create(<AwesomeAlert setshow={func} setimage={func}/>)

describe('Testing for AwesomeAlert components', () => {
  describe('snapshot testing for AwesomeAlert', () => {
    it('Should get render correctly',()=>{
        expect(tree).toMatchSnapshot()
    })
  })
  describe('Testing button for awesomeAlert', () => {
    it('Should be pressed for cancel button',()=>{
        const cancel = tree.root.findByProps({testID:'Close'}).props
        act(()=>cancel.onPress())
    })
    it('Should be pressed for openCamera button',()=>{
        const camera = tree.root.findByProps({testID:'openCamera'}).props
        act(()=>camera.onPress())
    })
    it('Should be pressed for openCamera button',()=>{
        const Gall = tree.root.findByProps({testID:'openGallery'}).props
        act(()=>Gall.onPress())
    })
  })
  
  
})
