import React,{useState,useEffect} from 'react';
import { View,Text,Pressable,KeyboardAvoidingView,ToastAndroid,Vibration} from 'react-native';
import styles from '../styles/Pomodorostyles'
import {displayTimer,startTimer} from '../functions/PomodoroFunction'
import Ion from 'react-native-vector-icons/Ionicons'
import Settings from '../components/SetttingsModal';
import { useSelector } from 'react-redux';
import reactNativeBackgroundTimer from 'react-native-background-timer';


const Pomodoro = () =>{
    const [title,setTitle] = useState('Work Time!')
    const workhourinsec = useSelector(state=>state.resultWorkinSecond)
    const Breakinsec = useSelector(state =>state.resultBreakinSecond)
    const longBreakinSec = useSelector(state=>state.resultLongBreakinSecond)
    const [secondLeft,setSecondLeft] = useState(workhourinsec);
    const [timerOn, setTimerOn] = useState(false)
    const [modalShown,setModalShown] = useState(false)
    const [count,setCount] = useState(1)

    useEffect(()=>{ 
    if (timerOn === true){
        startTimer(setSecondLeft,workhourinsec,Breakinsec,longBreakinSec,count,setCount)
    } 
    else reactNativeBackgroundTimer.stopBackgroundTimer()

    return()=>{
      reactNativeBackgroundTimer.stopBackgroundTimer()
    }
  },[timerOn])

    useEffect(()=>{
    if (secondLeft === 0) {
        if (count%2 === 0) {
            setSecondLeft(workhourinsec)
            setCount(count+1)
            setTitle("Keep it Up!")
            Vibration.vibrate(1000)
        }else if (count%2 === 1) {
            if (count <= 6) {
                setSecondLeft(Breakinsec)
                setCount(count+1)
                setTitle("Short Break! Catch a Breath")
                Vibration.vibrate(1000)
            }else if (count === 7) {
                setSecondLeft(longBreakinSec)
                setCount(0)
                setTitle("Break Time! Enjoy Your Break")
                Vibration.vibrate(1500)
            }
        }
        // reactNativeBackgroundTimer.stopBackgroundTimer()
    }
  },[secondLeft])

    return(
        <KeyboardAvoidingView style={styles.mainContainer}>
            <Text style={styles.Header}>Pomodoro Timer</Text>
            <View style={styles.TimerSection}>
                <View style={styles.timeSection}>
                    <Text style={styles.showsection}>{title}</Text>
                    <Text style={styles.time}>{displayTimer(secondLeft).displayHours} : {displayTimer(secondLeft).displayMins} : {displayTimer(secondLeft).displaySecs}</Text>
                </View>
                <View style={styles.iconSection}>
                    {timerOn === false?
                    <Pressable onPress={()=>setTimerOn(true)}>
                        <Ion name='play' style={styles.icon}/>
                    </Pressable>:
                    <Pressable onPress={()=>setTimerOn(false)}>
                        <Ion name='pause' style={styles.icon}/>
                    </Pressable>
                    }
                    <Pressable
                    onPress={()=>{
                        reactNativeBackgroundTimer.stopBackgroundTimer()
                        setSecondLeft(workhourinsec)
                        setCount(1)
                        setTimerOn(false)
                        setTitle('Timer Stop')
                    }}
                    >
                        <Ion name='stop' style={styles.icon}/>
                    </Pressable>
                </View>
            </View>
            <View style={styles.buttonSection}>
                <Pressable onPress={()=>{
                    {timerOn === true ? ToastAndroid.show("Timer is on!",ToastAndroid.LONG):
                    setModalShown(!modalShown)
                    }
                }}>
                    <Text style={styles.button}>Settings <Ion name='settings' size={18}/></Text>
                </Pressable>
            </View>
            <Settings show={modalShown} setshow={setModalShown} setwork={setSecondLeft}/>    
        </KeyboardAvoidingView>
    )
}

export default Pomodoro