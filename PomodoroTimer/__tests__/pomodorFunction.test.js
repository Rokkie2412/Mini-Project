/* eslint-disable prettier/prettier */
import React from 'react';
import {ToastAndroid} from 'react-native'
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
  startTimer,
  timerset,
  ButtonDisable
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



const setSecondLeft = jest.fn()
const spyOnToast =  jest.spyOn(ToastAndroid,'show')
const spyPushNotification = jest.spyOn(PushNotification, 'createChannel')
const spyHandleNotificationBreak = jest.spyOn(PushNotification,'localNotification')
const spyHandleNotification = jest.spyOn(PushNotification,'localNotification')  
const spyHandleNotificationTimer = jest.spyOn(PushNotification,'localNotification')            
const runTimer = jest.spyOn(reactNativeBackgroundTimer,'runBackgroundTimer').mockImplementation(()=>{
    setSecondLeft(secs=>{
      if (secs > 0)
        return secs - 1
    })
})

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

  describe('timerset unit test',()=>{
    let countNow = 2
    const SetJudulMock = jest.fn()
    const setPesanMock = jest.fn()
    const setSecondMock = jest.fn()
    const workhourinsec = 10
    const setCountMock = jest.fn()
    const setTitleMock = jest.fn()
    const judul = 'ABC'
    const pesan = 'CBA'
    const BreakinSec = 8
    const longBreakinSec = 9
    const setWorkCycleMock = jest.fn()
    const workcycle = 0
    const secondleft = 0

    it('Shoudl go to workTime',()=>{
      timerset(countNow,SetJudulMock,setPesanMock,setSecondMock,workhourinsec,
        setCountMock,setTitleMock,judul,pesan,
        BreakinSec,longBreakinSec,setWorkCycleMock,workcycle,secondleft)
      expect(SetJudulMock).toHaveBeenCalledTimes(1)
    })
    it('Should go to break time in short',()=>{
      countNow = 3
      timerset(countNow,SetJudulMock,setPesanMock,setSecondMock,workhourinsec,
        setCountMock,setTitleMock,judul,pesan,
        BreakinSec,longBreakinSec,setWorkCycleMock,workcycle,secondleft)
      expect(SetJudulMock).toHaveBeenCalledTimes(2)
    })
    it('Should go to break time in short',()=>{
      countNow = 7
      timerset(countNow,SetJudulMock,setPesanMock,setSecondMock,workhourinsec,
        setCountMock,setTitleMock,judul,pesan,
        BreakinSec,longBreakinSec,setWorkCycleMock,workcycle,secondleft)
      expect(SetJudulMock).toHaveBeenCalledTimes(3)
    })
  })

  describe('Button Disable Unit Test',()=>{
    it('Should be called',()=>{
      const timerOn = true
      const setModalShow = jest.fn()
      const ModalShown=true
      ButtonDisable(timerOn,setModalShow,ModalShown)
      expect(spyOnToast).toBeCalled()
    })
  })

  describe('Timer Handler Unit Test',()=>{
    const setSecondLeft = jest.fn()
    it('Should be called',()=>{
      startTimer(setSecondLeft)
      expect(runTimer).toBeCalled()
    })
    // it('Should return secs - 1',()=>{
    //   const secs = 10
    //   startTimer(secs)
    //   expect(runTimer).toBe(9)
    // })
  })
});
