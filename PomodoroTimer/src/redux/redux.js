export const EXCHAHNGETOSECOND = 'EXCHANGETOSECOND'
export const EXCHAHNGETOSECONDBREAK = 'EXCHANGETOSECONDBREAK'
export const EXCHAHNGETOSECONDLONGBREAK = 'EXCHANGETOSECONDLONGBREAK'
export const GETDATA = 'GETDATA'

export const exchangetosecwork = (hour,minute,second) =>({
    type:EXCHAHNGETOSECOND,
    payloadhourwork : hour,
    payloadminutework : minute,
    payloadsecondwork : second
})

export const exchangetosecBreak = (minute,second) =>({
    type:EXCHAHNGETOSECONDBREAK,
    payloadminutebreak : minute,
    payloadsecondbreak : second
})

export const exchangetosecLongBreak = (minute,second) =>({
    type:EXCHAHNGETOSECONDLONGBREAK,
    payloadminutelongbreak : minute,
    payloadsecondlongbreak : second
})

let initialState ={
    resultWorkinSecond : 0,
    resultBreakinSecond : 0,
    resultLongBreakinSecond : 0
}

export const mainReducer = (state=initialState, action) =>{
    switch (action.type) {
        case EXCHAHNGETOSECOND:
            
            const hourTosecond = action.payloadhourwork * 3600
            const minuteTosecond = action.payloadminutework * 60
            const res = hourTosecond+minuteTosecond+action.payloadsecondwork
            // state.resultWorkinSecond = res
            return {
                ...state,
                resultWorkinSecond:res
            }
        case EXCHAHNGETOSECONDBREAK:
            const minuteTosecondBreak = action.payloadminutebreak * 60
            const resBreak = minuteTosecondBreak+action.payloadsecondbreak
            // state.resultBreakinSecond= resBreak
            return {
                ...state,
                resultBreakinSecond:resBreak
            }
        case EXCHAHNGETOSECONDLONGBREAK:
            const minuteToSecondLongBreak = action.payloadminutelongbreak * 60
            const resLongBreak = minuteToSecondLongBreak+action.payloadsecondlongbreak
            // state.resultLongBreakinSecond = resLongBreak
            return{
                ...state,
                resultLongBreakinSecond:resLongBreak
            }
        default:
            return state
    }
}

export default mainReducer