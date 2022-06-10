/**
 * @format
 * @flow
 */

import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  ToastAndroid,
  Vibration,
} from 'react-native';
import styles from '../styles/Pomodorostyles';
import {
  displayTimer,
  startTimer,
  createChannel,
  handleNotification,
  handleNotificationLongBreak,
  TimerinNotification,
} from '../functions/PomodoroFunction';
import Ion from 'react-native-vector-icons/Ionicons';
import Settings from '../components/SetttingsModal';
import Help from '../components/HelpModal';
import {useSelector} from 'react-redux';
import reactNativeBackgroundTimer from 'react-native-background-timer';

const Pomodoro = (): React.Node => {
  const [title, setTitle] = useState<string>('Work Time!');
  const workhourinsec: number = useSelector(state => state.resultWorkinSecond);
  const Breakinsec: number = useSelector(state => state.resultBreakinSecond);
  const longBreakinSec: number = useSelector(
    state => state.resultLongBreakinSecond,
  );
  const [secondLeft, setSecondLeft] = useState<number>(workhourinsec);
  const [timerOn, setTimerOn] = useState<boolean>(false);
  const [modalShown, setModalShown] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);
  const [judul, setJudul] = useState<string>('Timer to work!');
  const [pesan, setPesan] = useState<string>(
    'Time to work, keep it up! u doing good!',
  );
  const [wokrCycle, setWorkCycle] = useState<number>(0);
  const [help, setHelp] = useState<boolean>(false);

  useEffect(() => {
    createChannel();
  }, []);

  useEffect(() => {
    if (timerOn === true) {
      startTimer(setSecondLeft);
    } else reactNativeBackgroundTimer.stopBackgroundTimer();

    return () => {
      reactNativeBackgroundTimer.stopBackgroundTimer();
    };
  }, [timerOn]);

  useEffect(() => {
    if (secondLeft === 0) {
      if (count % 2 === 0) {
        setJudul('Time to short break!');
        setPesan("it's time to short break! Get streching up");
        setSecondLeft(workhourinsec);
        setCount(count + 1);
        setWorkCycle(wokrCycle + 1);
        setTitle('Keep it Up!');
        handleNotification(judul, pesan);
        Vibration.vibrate(1000);
      } else if (count % 2 === 1) {
        if (count <= 6) {
          setJudul('Timer to work!');
          setPesan('Time to work, keep it up! u doing good!');
          setSecondLeft(Breakinsec);
          setCount(count + 1);
          setTitle('Short Break! Catch a Breath');
          handleNotification(judul, pesan);
          Vibration.vibrate(1000);
        } else if (count === 7) {
          setJudul('Time to long break!');
          setPesan("it's time to long break! Use it wisely");
          setSecondLeft(longBreakinSec);
          setCount(0);
          setTitle('Break Time! Enjoy Your Break');
          handleNotificationLongBreak();
          Vibration.vibrate(1500);
        }
      }
      // reactNativeBackgroundTimer.stopBackgroundTimer()
    }
  }, [secondLeft]);

  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.Header}>Pomodoro Timer</Text>
      </View>
      <Pressable onPress={() => setHelp(true)}>
        <Ion name="help-circle-outline" style={styles.HelpIcon} />
      </Pressable>
      <View style={styles.TimerSection}>
        <View style={styles.timeSection}>
          <Text style={styles.showsection}>{title}</Text>
          <Text style={styles.time}>
            {displayTimer(secondLeft).displayHours} :{' '}
            {displayTimer(secondLeft).displayMins} :{' '}
            {displayTimer(secondLeft).displaySecs}
          </Text>
        </View>

        <View style={styles.iconSection}>
          {timerOn === false ? (
            <Pressable
              onPress={() => {
                setTimerOn(true);
                setTitle('Timer Play');
              }}>
              <Ion name="play" style={styles.icon} />
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                setTimerOn(false);
                setTitle('Timer Pause');
              }}>
              <Ion name="pause" style={styles.icon} />
            </Pressable>
          )}
          <Pressable
            onPress={() => {
              reactNativeBackgroundTimer.stopBackgroundTimer();
              setSecondLeft(workhourinsec);
              setCount(1);
              setTimerOn(false);
              setTitle('Timer Stop');
              setWorkCycle(0);
            }}>
            <Ion name="stop" style={styles.icon} />
          </Pressable>
        </View>
        <View>
          <Text style={styles.cycle}>
            Work cycle has been done :{' '}
            <Text style={{color: '#00ADB5'}}>{wokrCycle}</Text>
          </Text>
        </View>
      </View>

      <View style={styles.buttonSection}>
        <Pressable
          onPress={() => {
            {
              timerOn === true
                ? ToastAndroid.show('Timer is on!', ToastAndroid.LONG)
                : setModalShown(!modalShown);
            }
          }}>
          <Text style={styles.button}>
            Settings <Ion name="settings" size={18} />
          </Text>
        </Pressable>
      </View>
      <Settings
        show={modalShown}
        setshow={setModalShown}
        setwork={setSecondLeft}
      />
      <Help HelpVisible={help} setHelpVisible={setHelp} />
    </KeyboardAvoidingView>
  );
};

export default Pomodoro;
