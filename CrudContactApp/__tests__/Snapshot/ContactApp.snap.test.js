import {create,act,renderer} from 'react-test-renderer';
import React from 'react';
import ContactApp,{_render} from "../../src/screens/ContactApp";
import { FlatList } from 'react-native';
import {CheckInternet} from '../../src/functions/FunctionScreen'
import {
  render,
  waitForElement,
  fireEvent,
} from 'react-native-testing-library';

//Mocking Session
jest.useFakeTimers();
jest.mock('../../src/functions/FunctionScreen',()=>({
    FilterSearch : jest.fn(),
    getData:jest.fn()
}))
jest.mock('../../src/components/Searchbar',()=> 'Searchbar')
jest.mock('../../src/components/AddContactModal',()=> 'AddContactModal')
jest.mock('../../src/components/ContactCard',()=>'ContactCard')
jest.mock('../../src/components/EditContactModal',()=>'EditContact')
jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');
jest.mock('react-native-restart',()=>{
    return{
        Restart:jest.fn()
    }
})
jest.mock('react-native-awesome-alerts',()=>'AwesomeAlert')
jest.mock('@react-native-community/netinfo',()=>'Netinfo')
jest.mock('react-native-image-picker',()=>{
    return{
        launchCamera:jest.fn(),
        launchImageLibrary:jest.fn()
    }
})



//Testing Session
const tree = create(<ContactApp/>)

describe('Testing for ContactApp Screen',()=>{
    describe('Snapshot test for ContactApp',()=>{
        it('Should render corretly',()=>{
            const tree = create(<ContactApp/>)
            expect(tree.toJSON()).toMatchSnapshot()
        })
    })
    describe('testing button for contactApp',()=>{
        it('Should get pressed for add button',()=>{
            const tree = create(<ContactApp/>)
            const button = tree.root.findByProps({testID:'addContactButton'}).props
            act(()=>button.onPress())
        })
    })
    
    describe('Flastlist',()=>{
        it('Should render corretly',()=>{
            const _render = jest.fn()
            expect(renderer.create(
                <FlatList
                    data={['foo']}
                    keyExtractor={({id},index)=>id}
                    renderItem={_render}
                />
            )).toMatchSnapshot()
        })
    })

    
})
