/* eslint-disable prettier/prettier */
import React from 'react';
import {useState} from 'react';
import {
  onchecklimit,
  displayTimer,
  createChannel,
} from '../src/functions/PomodoroFunction';

jest.mock('react-native-background-timer', () => 'Mocked Background Timer');

jest.mock('react-native-push-notification', () => 'Mocked Push Notification');

describe('Pomodoro function unit test', () => {
  const mockSetState = jest.fn();

  describe('On check limit test', () => {
    it('Should return 0', () => {
      const value = 'a';
      onchecklimit(value, mockSetState);
      expect(mockSetState).toBeCalledWith(0);
    });
    it('Should return not 59', () => {
      const value2 = 100;
      onchecklimit(value2, mockSetState);
      expect(mockSetState).toBeCalledWith(59);
    });
    it('Should return not 59', () => {
      const value3 = 10;
      onchecklimit(value3, mockSetState);
      expect(mockSetState).toBeCalledWith(10);
    });
  });

  describe('Display timer function unit test', () => {
    it('Should not undefined', () => {
      const timerValue = 3000;
      const display = displayTimer(timerValue);
      expect(display.displayHours).toBeDefined();
      expect(display.displayMins).toBeDefined();
      expect(display.displaySecs).toBeDefined();
    });
  });

  describe('Create Channel unit test', () => {
    const mockFN = jest.fn().mockImplementationOnce(createChannel());

    expect(mockFN).toHaveBeenCalled();
  });
});
