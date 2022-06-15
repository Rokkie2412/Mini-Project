/* eslint-disable prettier/prettier */
import React from 'react';
import PushNotification from 'react-native-push-notification';
import reactNativeBackgroundTimer from 'react-native-background-timer';
import {useState} from 'react';
import {
  onchecklimit,
  displayTimer,
  ChannelTest,
  handleNotificationLongBreak,
  handleNotification,
  TimerinNotification,
  startTimer
} from '../src/functions/PomodoroFunction';


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

const spyPushNotification = jest.spyOn(PushNotification, 'createChannel')
const spyHandleNotificationBreak = jest.spyOn(PushNotification,'localNotification')
const spyHandleNotification = jest.spyOn(PushNotification,'localNotification')  
const spyHandleNotificationTimer = jest.spyOn(PushNotification,'localNotification')            
const runTimer = jest.spyOn(reactNativeBackgroundTimer,'runBackgroundTimer')

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
    it('Should called', () => {
      ChannelTest()
      expect(spyPushNotification).toBeCalled()
    });
  });

  describe('Long Break Notification Handler Unit Test',()=>{
    it('Should be called',()=>{
      handleNotificationLongBreak()
      expect(spyHandleNotificationBreak).toBeCalled()
    })
  })

  describe('Notification Handler Unit Test',()=>{
    it('Should be called',()=>{
      const judul="Notification Alert"
      const pesan = "Ini notifikasi"
      handleNotification(judul,pesan)
      expect(spyHandleNotificationBreak).toBeCalled()
    })
  })

  describe('Notification Handler Unit Test',()=>{
    it('Should be called',()=>{
      const judul="Notification Alert"
      const pesan = "Ini notifikasi"
      TimerinNotification(judul,pesan)
      expect(spyHandleNotificationTimer).toBeCalled()
    })
  })

  describe('Timer Handler Unit Test',()=>{
    const setSecondLeft = jest.fn()
    it('Should be called',()=>{
      startTimer(setSecondLeft)
      expect(runTimer).toBeCalled()
    })
    it('Should return secs - 1',()=>{
      const secs = 10
      runTimer()
      expect(startTimer(setSecondLeft)).toBe(9)
      
    })
  })
});
