export const ADD = 'ADD'
export const DELETE = 'DELETE'

export const addArray = (data) =>({
    type:ADD,
    payload:data,
})

export const deleteFromArray = (title) => ({
    type:DELETE,
    payload:title,
})

let initialState = {
    arr:[]
}

export const mainReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD:
            return{
                ...state,arr:[...state.arr,action.payload]
            }
        case DELETE:
            return{
                ...state,arr:state.arr.filter(arr => arr.id !== action.payload)
            }
        default:
            return state
    }
}

export default mainReducer