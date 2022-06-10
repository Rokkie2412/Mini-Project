import React from 'react';
import {create} from 'react-test-renderer';
import settingsModal from '../src/components/SetttingsModal';

jest.mock('react-native-vector-icons/Ionicons', () => 'MockedIonicons');

jest.mock('react-native-background-timer', () => 'Mocked Background Timer');

jest.mock('react-native-push-notification', () => 'Mocked Push Notification');

const tree = create(<settingsModal />);

describe('Snapshot UI test settings modal screens', () => {
  it('Snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
