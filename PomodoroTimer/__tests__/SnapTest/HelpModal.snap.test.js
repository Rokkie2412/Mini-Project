import React from 'react';
import {create,act} from 'react-test-renderer';
import HelpModal from '../../src/components/HelpModal';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {mainReducer} from '../../src/redux/redux';

jest.mock('react-native-vector-icons/Ionicons', () => 'MockedIonicons');

jest.mock('react-native-background-timer', () => 'Mocked Background Timer');

jest.mock('react-native-push-notification', () => 'Mocked Push Notification');

jest.useFakeTimers();
const setHelpVisibleMock = jest.fn()
const HelpVisibleMock = jest.fn()
const store = createStore(mainReducer, {status: 'default status'});
const tree = create(
  <Provider store={store}>
    <HelpModal setHelpVisible={setHelpVisibleMock}/>
  </Provider>,
);


describe('Render HelpModal Screen',()=>{
  describe('Snapshot for help modal screen',()=>{
    it('Render correctly for Help Modal Screen', () => {
    expect(tree).toMatchSnapshot();
    });
  })
  describe("setup Help Visible Modal",()=>{
    it('Testing visible button',()=>{
      const button = tree.root.findByProps({testID:'setupVisibleModal'}).props
      act(()=>button.onPress())
    })
  })
  describe("setup Help Close Modal",()=>{
    it('Testing visible button',()=>{
      const button = tree.root.findByProps({testID:'setupVisibleModal'}).props
      act(()=>button.onPress())
    })
  })
    describe("setup Help Close Modal",()=>{
    it('Testing visible button',()=>{
      const button = tree.root.findByProps({testID:'VisibleModal'}).props
      act(()=>button.onPress())
    })
  })
})
