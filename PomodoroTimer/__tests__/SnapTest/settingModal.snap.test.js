import React from 'react';
import {TextInput} from 'react-native'
import {create,act,fireEvent} from 'react-test-renderer';
import SettingsModal from '../../src/components/SetttingsModal';;
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {mainReducer} from '../../src/redux/redux';
import { SearchBar } from 'react-native-screens';
import {shallow, mount, render} from 'enzyme'

jest.mock('react-native-vector-icons/Ionicons', () => 
jest.requireActual('react-native-vector-icons/Ionicons'))
jest.mock('react-native-background-timer', () => 'react-native-background-timer')
jest.mock('react-native-push-notification', () => 'react-native-push-notification')
const func = jest.fn()

const store = createStore(mainReducer, {status: 'default status'});
const tree = create(
  <Provider store={store}>
    <SettingsModal setshow={func}/>
  </Provider>,
);

describe('Render Setting Modal Screen', () => {
  describe('Snapshot for Setting',()=>{
    it('Should render correctly for setting modal',()=>{
      expect(tree).toMatchSnapshot();
    })
  })
  describe('Test Button for close modal',()=>{
    it('Should be acted to close by change setter',()=>{
      const cancleButton = tree.root.findByProps({testID:'CloseSetting'}).props
      act(()=>cancleButton.onPress())
    })
  })
  describe('Test Button for Save setting and close modal',()=>{
    it('Should be acted to close by change setter',()=>{
      const SaveButton = tree.root.findByProps({testID:'SaveSetting'}).props
      act(()=>SaveButton.onPress())
    })
  })
  describe('Text Input calling',()=>{
    it('Should be acted to set hour',()=>{
      const sethour = tree.root.findByProps({testID:'sethour'}).props
      act(()=>sethour.onChangeText())
    })
    it('Should be acted to set minute',()=>{
      const setminute = tree.root.findByProps({testID:'setminute'}).props
      act(()=>setminute.onChangeText())
    })
    it('Should be acted to set second',()=>{
      const setsecond = tree.root.findByProps({testID:'setsecond'}).props
      act(()=>setsecond.onChangeText())
    })
    it('Should be acted to set second',()=>{
      const setshortsecond = tree.root.findByProps({testID:'setshortsecond'}).props
      act(()=>setshortsecond.onChangeText())
    })
    it('Should be acted to set minute',()=>{
      const setshortminute = tree.root.findByProps({testID:'setshortminute'}).props
      act(()=>setshortminute.onChangeText())
    })
    it('Should be acted to set minute',()=>{
      const setlongminute = tree.root.findByProps({testID:'setlongminute'}).props
      act(()=>setlongminute.onChangeText())
    })
    it('Should be acted to set minute',()=>{
      const setlongsecond = tree.root.findByProps({testID:'setlongsecond'}).props
      act(()=>setlongsecond.onChangeText())
    })
  })
})

