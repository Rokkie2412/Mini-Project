import remove from "lodash.remove";
export const ADD_NOTE = 'ADDNOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

export const addArray = (data) =>({
    type:ADD_NOTE,
    payload:data,
})

export const deleteFromArray = (title) => ({
    type:DELETE_NOTE,
    payload:title,
})

let initialState = {
    arr:[]
}

export const mainReducer = (state=initialState,action) => {
    switch (action.type) {
        case ADD_NOTE:
            return{
                ...state,arr:[...state.arr,action.payload]
            }
        case DELETE_NOTE:
            // const deleteNewArray = remove(state=initialState,obj =>{
            //     return obj.title != action.payload
            // })
            // return state.arr = deleteNewArray
            return{
                ...state,arr:state.arr.filter(arr => arr.title !== action.payload)
            }
        default:
            return state
    }
}

export default mainReducer