import React from 'react';
import {create} from 'react-test-renderer';
import pomodoro from '../src/screens/Pomodoro';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {mainReducer} from '../src/redux/redux';

jest.mock('react-native-vector-icons/Ionicons', () => 'MockedIonicons');

jest.mock('react-native-background-timer', () => 'Mocked Background Timer');

jest.mock('react-native-push-notification', () => 'Mocked Push Notification');

jest.useFakeTimers();
const store = createStore(mainReducer, {status: 'default status'});
const tree = create(
  <Provider store={store}>
    <pomodoro />
  </Provider>,
);

it('Render correctly for pomodoro screen', () => {
  expect(tree).toMatchSnapshot();
});
