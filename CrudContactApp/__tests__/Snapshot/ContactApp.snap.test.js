import {create,act} from 'react-test-renderer';
import React from 'react';
import ContactApp from "../../src/screens/ContactApp";


//Mocking Session
jest.useFakeTimers();
jest.mock('react-native-vector-icons/Ionicons', () => 'Mocked Ionicons');
jest.mock('react-native-restart',()=>{
    return{
        Restart:jest.fn()
    }
})
jest.mock('react-native-awesome-alerts',()=>'Mocked awesome alert')
jest.mock('@react-native-community/netinfo',()=>'Mocked Netinfo')
jest.mock('react-native-image-picker',()=>{
    return{
        launchCamera:jest.fn(),
        launchImageLibrary:jest.fn()
    }
})
jest.mock('react-native-modal',()=> "Mocked Modal React Native")


//Tesing Session
const tree = create(<ContactApp/>)

describe('Testing for ContactApp Screen',()=>{
    describe('Snapshot test for ContactApp',()=>{
        it('Should render corretly',()=>{
            expect(tree).toMatchSnapshot()
        })
    })
    describe('testing button for contactApp',()=>{
        it('Should get pressed for add button',()=>{
            const button = tree.root.findByProps({testID:'addContactButton'}).props
            act(()=>button.onPress())
        })
        // it('Should get pressed for flatlist button',()=>{
        //    const button2 = tree.root.findByProps({testID:'Flastlist'}).props
        //     act(()=>button2.keyExtractor())
        // })
    })
})
