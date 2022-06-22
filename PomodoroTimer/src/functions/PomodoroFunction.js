/**
 * @format
 * @flow
 */
import {Vibration,ToastAndroid,} from 'react-native'
import reactNativeBackgroundTimer from 'react-native-background-timer';
import PushNotification from 'react-native-push-notification';



export const displayTimer = (secondLeft: number): Object => {
  let hours: number = Math.floor(secondLeft / 60 / 60);
  let minutes: number = Math.floor((secondLeft / 60) % 60);
  let seconds: number = Math.floor(secondLeft % 60);

  let displayHours: string | number = hours < 10 ? `0${hours}` : hours;
  let displayMins: string | number = minutes < 10 ? `0${minutes}` : minutes;
  let displaySecs: string | number = seconds < 10 ? `0${seconds}` : seconds;

  return {
    displayHours,
    displayMins,
    displaySecs,
  };
};

export const startTimer = (setSecondLeft: Function): void => {
  reactNativeBackgroundTimer.runBackgroundTimer(() => {
    setSecondLeft(secs => {
      if (secs > 0) {
        return secs - 1;
      } else if (secs === 0) {
        reactNativeBackgroundTimer.stopBackgroundTimer();
      }
    });
  }, 1000);
};

export const onchecklimit = (value: string, setValue: Function): void => {
  const parsedqty: number = Number.parseInt(value);
  if (Number.isNaN(parsedqty)) setValue(0);
  else if (parsedqty > 59) setValue(59);
  else setValue(parsedqty);
};

export const ChannelTest = (): void => {
  PushNotification.createChannel({
    channelId: 'test-channel',
    channelName: 'Test Channel',
    vibrate: true,
  });
};

export const handleNotification = (judul: string, pesan: string): void => {
  PushNotification.localNotification({
    channelId: 'test-channel',
    title: judul,
    message: pesan,
    playSound: true,
    id: 1,
    vibrate: true,
    vibration: 2000,
  });
};

export const handleNotificationLongBreak = (): void => {
  PushNotification.localNotification({
    channelId: 'test-channel',
    title: 'Time to long break!',
    message: "it's time to long break! Use it wisely",
    playSound: true,
    id: 1,
    vibrate: true,
    vibration: 3000,
  });
};

export const timerset = 
(count:number,setJudul:Function,setPesan:Function,setSecondLeft:Function,workhourinsec:number,setCount:Function,setTitle:Function,judul:string,pesan:string,Breakinsec:number,longBreakinSec:number,setWorkCycle:Function,wokrCycle:number,secondLeft:number):void =>{
  if(secondLeft === 0){
    if(count % 2 === 0){
    setJudul('Time to short break!');
    setPesan("it's time to short break! Get streching up");
    setSecondLeft(workhourinsec);
    setCount(count + 1);
    setWorkCycle(wokrCycle + 1);
    setTitle('Time to work!');
    handleNotification(judul, pesan);
    // Vibration.vibrate(1000);
  }else if(count % 2 === 1){
    if(count<=6){
      setJudul('Timer to work!');
      setPesan('Time to work, keep it up! u doing good!');
      setSecondLeft(Breakinsec);
      setCount(count + 1);
      setTitle('Short Break! Catch a Breath');
      handleNotification(judul, pesan);
      // Vibration.vibrate(1000);
    }else if(count === 7){
      setJudul('Time to long break!');
      setPesan("it's time to long break! Use it wisely");
      setSecondLeft(longBreakinSec);
      setCount(0);
      setTitle('Break Time! Enjoy Your Break');
      handleNotificationLongBreak();
      // Vibration.vibrate(1500);
    }
  }
  }
}

export const ButtonDisable = (timerOn:boolean,setModalShow:Function,modalShown:boolean) =>{
  if(timerOn === true){
    ToastAndroid.show('Time os on!',ToastAndroid.LONG)
  }else{
    setModalShow(!modalShown)
  }
}
