import {create,act} from 'react-test-renderer';
import React from 'react';
import ContactCard from "../../src/components/ContactCard";

jest.mock('react-native-modal',()=> "Mocked Modal React Native")
jest.mock('react-native-vector-icons/Ionicons', () => 'Mocked Ionicons');


const func = jest.fn()
const tree = create(<ContactCard setshow={func} image={"N/A"}/>)

describe('Testing for Contact Card', () => {
  describe('Snapshot for Contact Card', () => {
    it('Should be render correctly',()=>{
        expect(tree).toMatchSnapshot()
    })
  })
  describe('Button test for Contact Card', () => {
    it('Should be pressed',()=>{
        const button = tree.root.findByProps({testID:'cancel'}).props
        act(()=>button.onPress())
    })
  })
  
})
