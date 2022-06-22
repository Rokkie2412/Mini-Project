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
  ChannelTest,
  handleNotification,
  handleNotificationLongBreak,
  timerset,
  ButtonDisable

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
    ChannelTest();
  }, []);

  useEffect(() => {
    if (timerOn === true) {
      startTimer(setSecondLeft);
    } else reactNativeBackgroundTimer.stopBackgroundTimer();

    return () => {
      reactNativeBackgroundTimer.stopBackgroundTimer();
    };
  }, [timerOn]);

  useEffect(()=>{
    setSecondLeft(workhourinsec)
  },[workhourinsec])

  useEffect(() => {
    timerset(count,setJudul,setPesan,setSecondLeft,workhourinsec,setCount,setTitle,judul,pesan,Breakinsec,longBreakinSec,setWorkCycle,wokrCycle,secondLeft)
  }, [secondLeft,setSecondLeft]);
  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.Header}>Pomodoro Timer</Text>
      </View>
      <Pressable 
      testID='Help'
      onPress={() => setHelp(true)}>
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
              testID='play'
              onPress={() => {
                setTimerOn(true);
                setTitle('Timer Play');
              }}>
              <Ion name="play" style={styles.icon} />
            </Pressable>
          ) : (
            <Pressable
            testID='pause'
              onPress={() => {
                setTimerOn(false);
                setTitle('Timer Pause');
              }}>
              <Ion name="pause" style={styles.icon} />
            </Pressable>
          )}
          <Pressable
            testID='stop'
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
        testID='setting'
          onPress={() => {
            ButtonDisable(timerOn,setModalShown,modalShown)
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
