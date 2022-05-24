import React,{useState,useEffect} from 'react';
import { View,Text,Pressable } from 'react-native';
import styles from '../styles/Pomodorostyles'
import {displayTimer} from '../functions/PomodoroFunction'
import Ion from 'react-native-vector-icons/Ionicons'
import Settings from '../components/SetttingsModal';

const Pomodoro = () =>{
    const [secondLeft,setSecondLeft] = useState(1500);
    const [timerOn, setTimerOn] = useState(false)
    const [hour,sethour] = useState(0)
    const [minute,setminute] = useState(0)
    const [second,setsecond] = useState(0)
    const [modalShown,setModalShown] = useState(false)

    return(
        <View style={styles.mainContainer}>
            <Text style={styles.Header}>Pomodoro Timer</Text>
            <View style={styles.TimerSection}>
                <Text style={styles.time}>{displayTimer(secondLeft).displayHours} : {displayTimer(secondLeft).displayMins} : {displayTimer(secondLeft).displaySecs}</Text>
                <View style={styles.iconSection}>
                    <Pressable>
                        <Ion name='play' style={styles.icon}/>
                    </Pressable>
                    <Pressable>
                        <Ion name='stop' style={styles.icon}/>
                    </Pressable>
                </View>
            </View>
            <View style={styles.buttonSection}>
                <Pressable onPress={()=>setModalShown(!modalShown)}>
                    <Text style={styles.button}>Settings <Ion name='settings' size={18}/></Text>
                </Pressable>
            </View>
            <Settings show={modalShown} setshow={setModalShown}/>    
        </View>
    )
}

export default Pomodoro