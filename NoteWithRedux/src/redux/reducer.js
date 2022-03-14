import { ADDARRAY } from "./actionType";

const initialState = {
    arr:[],
    
};

export const mainReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADDARRAY:
            return{
                ...state,arr:[...state.arr,action.payload]
            }
           
        default:
            return state;
    }
}