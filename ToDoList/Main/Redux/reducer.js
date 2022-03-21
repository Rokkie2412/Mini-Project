export const ADDLIST = 'ADDLIST'
export const CLEAR = 'CLEAR'
export const DELETELIST = 'DELETELIST'

export const AddList = (List) =>({
    type:ADDLIST,
    payload:List
})

export const ClearList = () =>({
    type:CLEAR,
    payload:[]
})

export const deleteList = (taskID) => ({
    type:DELETELIST,
    payload:taskID
})

let initialState={
    ModalVisible : true,
    ArrayList : [],
}

export const mainReducer = (state=initialState,action) => {
    switch (action.type) {
        case ADDLIST:
            return {...state,ArrayList:[...state.ArrayList,action.payload]}
        case CLEAR:
            return action.payload
        case DELETELIST:
            return{...state,ArrayList:state.ArrayList.filter((arr)=>arr.taskID !== action.payload)}
        default:
            return state
    }
}

export default mainReducer