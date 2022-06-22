import React from 'react';
import {create,act} from 'react-test-renderer';
import Pomodoro from '../../src/screens/Pomodoro';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {mainReducer} from '../../src/redux/redux';

jest.mock('react-native-vector-icons/Ionicons', () => 'MockedIonicons');

jest.mock('react-native-background-timer',() =>{
  return{
    runBackgroundTimer: jest.fn(),
    stopBackgroundTimer : jest.fn()
  }
})

jest.mock('react-native-push-notification', () => {
  return {
    configure: jest.fn(),
    createChannel: jest.fn(),
    onRegister: jest.fn(),
    onNotification: jest.fn(),
    addEventListener: jest.fn(),
    requestPermissions: jest.fn(() => Promise.resolve),
    localNotification:jest.fn()
  };
});

jest.useFakeTimers();
const store = createStore(mainReducer, {status: 'default status'});
const tree = create(
  <Provider store={store}>
    <Pomodoro />
  </Provider>,
);

describe('Render Pomodoro Screen',()=>{
  describe('Snapshot testing for pomodor screen',()=>{
    it('Render correctly for pomodoro screen', () => {
      expect(tree).toMatchSnapshot();
    });
  })
  describe('Setting Button act',()=>{
    const setting = tree.root.findByProps({testID:'setting'}).props
    act(()=>setting.onPress())
  })
  describe('Setting Button act',()=>{
    const Help = tree.root.findByProps({testID:'Help'}).props
    act(()=>Help.onPress())
  })
  describe('Setting Button act',()=>{
    const play = tree.root.findByProps({testID:'play'}).props
    act(()=>play.onPress())
  })
  describe('Setting Button act',()=>{
    const pause = tree.root.findByProps({testID:'pause'}).props
    act(()=>pause.onPress())
  })
  describe('Setting Button act',()=>{
    const stop = tree.root.findByProps({testID:'stop'}).props
    act(()=>stop.onPress())
  })
})

