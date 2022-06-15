import React from 'react';
import {create} from 'react-test-renderer';
import settingsModal from '../src/components/SetttingsModal';

// jest.mock('react-native-vector-icons/Ionicons', () => 'MockedIonicons');
jest.mock('react-native-vector-icons/Ionicons', () => 
jest.requireActual('react-native-vector-icons/Ionicons'))

jest.mock('react-native-background-timer', () => 'react-native-background-timer')

jest.mock('react-native-push-notification', () => 'react-native-push-notification')

// jest.mock('react-native-background-timer', () => 'Mocked Background Timer');

// jest.mock('react-native-push-notification', () => 'Mocked Push Notification');

const func = jest.fn()
test('Setting render correctly',()=>{
  const tree = create(<settingsModal show={func} setshow={func} setwork={func}/>)
  tree.getInstance();
  expect(tree.toJSON()).toMatchSnapshot()
})
