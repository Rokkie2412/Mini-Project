/* eslint-disable prettier/prettier */
/**
 * @format
 * @flow
 */

import {
  View,
  Text,
  Pressable,
  Modal,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {useState} from 'react';
import * as React from 'react';
import styles from '../styles/SettingsStyle';
import {useSelector, useDispatch} from 'react-redux';
import {
  exchangetosecwork,
  exchangetosecBreak,
  exchangetosecLongBreak,
} from '../redux/redux';
import {onchecklimit} from '../functions/PomodoroFunction';
import type {settingstype} from "../components/pomodoro.type"

const Settings = ({show, setshow, setwork}: settingstype): React.Node => {
  const [hour, setHour] = useState<string>('');
  const [minute, setMinute] = useState<string>('');
  const [second, setSecond] = useState<string>('');
  const [shortminute, setShortMinute] = useState<string>('');
  const [shortSecond, setShortSecond] = useState<string>('');
  const [longMinute, setLongMinute] = useState<string>('');
  const [longSecond, setLongSecond] = useState<string>('');
  const dispatch : Function = useDispatch();
  const resWorkinSec: number = useSelector(state => state.resultWorkinSecond);
  const resBreakinSec: number = useSelector(state => state.resultBreakinSecond);
  const resLongBreakinSec: number = useSelector(state => state.resultLongBreakinSecond);
  // console.log(resWorkinSec)
  return (
    <Modal visible={show} animationType="slide" transparent={true}>
      <KeyboardAvoidingView
        enabled={true}
        keyboardVerticalOffset={1}
        style={styles.mainContainer}>
        <View style={styles.headerSection}>
          <Text style={styles.header}>Settings</Text>
        </View>
        <View style={styles.SectionSetWorkTimer}>
          <Text style={styles.set}>Set Work Timer</Text>
          <View style={styles.inputSection}>
            <TextInput
              testID="sethour"
              placeholderTextColor={'#EEEEEE'}
              style={styles.setTimerWork}
              keyboardType="number-pad"
              placeholder="00"
              value={hour}
              onChangeText={temp => {
                setHour(temp);
              }}
            />
            <TextInput
            testID="setminute"
              placeholderTextColor={'#EEEEEE'}
              style={styles.setTimerWork}
              keyboardType="number-pad"
              placeholder="00"
              value={minute.toString()}
              onChangeText={temp => {
                onchecklimit(temp, setMinute);
              }}
            />
            <TextInput
            testID="setsecond"
              placeholderTextColor={'#EEEEEE'}
              style={styles.setTimerWork}
              keyboardType="number-pad"
              placeholder="00"
              value={second.toString()}
              onChangeText={temp => {
                onchecklimit(temp, setSecond);
              }}
            />
          </View>
        </View>
        <View style={styles.SectionSetWorkTimer}>
          <Text style={styles.set}>Set Short Break Timer</Text>
          <View style={styles.inputSection}>
            <TextInput
              testID="setshortminute"
              placeholderTextColor={'#EEEEEE'}
              style={styles.setTimerWork}
              keyboardType="number-pad"
              placeholder="00"
              value={shortminute.toString()}
              onChangeText={temp => {
                onchecklimit(temp, setShortMinute);
              }}
            />
            <TextInput
            testID="setshortsecond"
              placeholderTextColor={'#EEEEEE'}
              style={styles.setTimerWork}
              keyboardType="number-pad"
              placeholder="00"
              value={shortSecond.toString()}
              onChangeText={temp => {
                onchecklimit(temp, setShortSecond);
              }}
            />
          </View>
        </View>
        <View style={styles.SectionSetWorkTimer}>
          <Text style={styles.set}>Set Long Break Timer</Text>
          <View style={styles.inputSection}>
            <TextInput
            testID="setlongminute"
              placeholderTextColor={'#EEEEEE'}
              style={styles.setTimerWork}
              keyboardType="number-pad"
              placeholder="00"
              value={longMinute.toString()}
              onChangeText={temp => {
                onchecklimit(temp, setLongMinute);
              }}
            />
            <TextInput
            testID="setlongsecond"
              placeholderTextColor={'#EEEEEE'}
              style={styles.setTimerWork}
              keyboardType="number-pad"
              placeholder="00"
              value={longSecond.toString()}
              onChangeText={temp => {
                onchecklimit(temp, setLongSecond);
              }}
            />
          </View>
        </View>
        <View style={styles.buttonSection}>
          <Pressable testID="CloseSetting" onPress={() => setshow(!show)}>
            <Text style={styles.button}>Cancel</Text>
          </Pressable>
          <Pressable
            testID="SaveSetting"
            onPress={() => {
              dispatch(exchangetosecwork(hour, minute, second));
              dispatch(exchangetosecBreak(shortminute, shortSecond));
              dispatch(exchangetosecLongBreak(longMinute, longSecond));
              setshow(!show)
            }}>
            <Text style={styles.button}>Save</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default Settings;
