/**
 * @format
 * @flow
 */

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
    vibration: 1000,
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
    vibration: 1000,
  });
};
