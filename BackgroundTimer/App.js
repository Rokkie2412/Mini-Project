import React,{useState, useEffect} from 'react';
import { View,Text,Pressable,TextInput } from 'react-native';
import reactNativeBackgroundTimer from 'react-native-background-timer';
import styles from './styleApp'

const App = () =>{
  const [secondLeft,setSecondLeft] = useState(3601);
  const [timerOn, setTimerOn] = useState(false)
  const [hour,sethour] = useState(0)
  const [minute,setminute] = useState(0)
  const [second,setsecond] = useState(0)

  useEffect(()=>{
    if (timerOn) startTimer()
    else reactNativeBackgroundTimer.stopBackgroundTimer()

    return()=>{
      reactNativeBackgroundTimer.stopBackgroundTimer()
    }
  },[timerOn])

  const clockify = () =>{
    let hours = Math.floor(secondLeft/60/60)
    let minutes = Math.floor(secondLeft/60%60)
    let seconds = Math.floor(secondLeft%60)

    let displayHours = hours < 10 ? `0${hours}` : hours
    let displayMins = minutes < 10 ? `0${minutes}` : minutes
    let displaySecs = seconds < 10 ? `0${seconds}` : seconds

    return{
      displayHours,
      displayMins,
      displaySecs
    }
  }

  const startTimer = () =>{
    reactNativeBackgroundTimer.runBackgroundTimer(()=>{
      setSecondLeft(secs =>{
        if (secs > 0) {
          return secs -1
        }else{
          return 0
        }
      })
    },1000)
  }

  const onchecklimit = (value,setValue) =>{
    const parsedqty = Number.parseInt(value)
    if(Number.isNaN(parsedqty))
      setValue(0)
    else if( parsedqty >60)
      setValue(60)
    else
      setValue(parsedqty)
  }

  const onsetTimer = () =>{
    let hourtosec = hour * 3600
    let mintosec = minute * 60
    let resultinsec = hourtosec + mintosec + second
    setSecondLeft(resultinsec)
  }

  useEffect(()=>{
    if (secondLeft === 0) {
      reactNativeBackgroundTimer.stopBackgroundTimer()
    }
  },[secondLeft])


  return(
    <View style={styles.mainContainer}>
      <View style={styles.inputsection}>
        <TextInput
        placeholderTextColor={'white'}
        style={styles.input}
        placeholder='Hours'
        value={hour.toString()}
        onChangeText={(temphour)=>{
          sethour(temphour)
        }}
      />
      <Text>  </Text>
      <TextInput
        placeholderTextColor={'white'}
        style={styles.input}
        placeholder='Minutes'
        value={minute.toString()}
        onChangeText={(tempminute)=>{
          onchecklimit(tempminute,setminute)
        }}
      />
      <Text>  </Text>
      <TextInput
        placeholderTextColor={'white'}
        style={styles.input}
        placeholder='Seconds'
        value={second.toString()}
        onChangeText={(tempsecond)=>{
          onchecklimit(tempsecond,setsecond)
        }}
      />
      </View>

      <Pressable style={styles.buttonContainer}
      onPress={()=>{
        onsetTimer()
      }}
      ><Text style={styles.button}>Set Timer</Text></Pressable>
      
      <Text style={styles.time}>{clockify().displayHours} Hours {clockify().displayMins} Mins {clockify().displaySecs} Secs</Text>
      <Pressable style={styles.buttonContainer}
      onPress={()=>{
        setTimerOn((current)=> !current)
      }}
      ><Text style={styles.button}>Start/Stop</Text></Pressable>
    </View>
  )
}

export default App