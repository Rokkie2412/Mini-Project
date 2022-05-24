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