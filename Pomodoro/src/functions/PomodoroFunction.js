import reactNativeBackgroundTimer from 'react-native-background-timer';

export const displayTimer = (secondLeft) =>{
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

export const startTimer = (setSecondLeft) =>{
  reactNativeBackgroundTimer.runBackgroundTimer(()=>{
    setSecondLeft(secs =>{
      if(secs > 0){
        return secs-1
      }else if (secs === 0 ) {
        reactNativeBackgroundTimer.stopBackgroundTimer()
      }
    })
  },1000)
}

export const onchecklimit = (value,setValue) =>{
    const parsedqty = Number.parseInt(value)
    if(Number.isNaN(parsedqty))
      setValue(0)
    else if( parsedqty >59)
      setValue(59)
    else
      setValue(parsedqty)
  }