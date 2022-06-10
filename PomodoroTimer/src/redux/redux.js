
/**
 * @format
 * @flow
 */
export const EXCHAHNGETOSECONDS : string = 'EXCHANGETOSECOND'
export const EXCHAHNGETOSECONDBREAK :string = 'EXCHANGETOSECONDBREAK'
export const EXCHAHNGETOSECONDLONGBREAK :string = 'EXCHANGETOSECONDLONGBREAK'
export const GETDATA:string = 'GETDATA'

export const exchangetosecwork = (hour:string,minute:string,second:string):Object =>({
    type:EXCHAHNGETOSECONDS,
    payloadhourwork : hour,
    payloadminutework : minute,
    payloadsecondwork : second
})

export const exchangetosecBreak = (minute:string,second:string):Object =>({
    type:EXCHAHNGETOSECONDBREAK,
    payloadminutebreak : minute,
    payloadsecondbreak : second
})

export const exchangetosecLongBreak = (minute:string,second:string):Object =>({
    type:EXCHAHNGETOSECONDLONGBREAK,
    payloadminutelongbreak : minute,
    payloadsecondlongbreak : second
})

let initialState : Object  ={
    resultWorkinSecond : 0,
    resultBreakinSecond : 0,
    resultLongBreakinSecond : 0
}

export const mainReducer = (state:Object=initialState, action:function):Function =>{
    switch (action.type) {
        case EXCHAHNGETOSECONDS:
            
            const hourTosecond : number = action.payloadhourwork * 3600
            const minuteTosecond : number = action.payloadminutework * 60
            const res : number = hourTosecond+minuteTosecond+action.payloadsecondwork
            return {
                ...state,
                resultWorkinSecond:res
            }
        case EXCHAHNGETOSECONDBREAK:
            const minuteTosecondBreak : number= action.payloadminutebreak * 60
            const resBreak : number = minuteTosecondBreak+action.payloadsecondbreak
            return {
                ...state,
                resultBreakinSecond:resBreak
            }
        case EXCHAHNGETOSECONDLONGBREAK:
            const minuteToSecondLongBreak : number= action.payloadminutelongbreak * 60
            const resLongBreak : number = minuteToSecondLongBreak+action.payloadsecondlongbreak
            return{
                ...state,
                resultLongBreakinSecond:resLongBreak
            }
        default:
            return state
    }
}

export default mainReducer