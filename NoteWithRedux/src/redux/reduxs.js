import remove from "lodash.remove"
export const ADDARRAY = 'ADDARRAY'
export const DELETENOTE = 'DELETENOTE'
export const EDITNOTE = 'EDITNOTE'

export const addArray = (data) => ({
    type:ADDARRAY,
    payload:data
})

export const deleteFromArray = (title) => ({
    type:DELETENOTE,
    payload:title
})
export const EditNote = (title) => ({
    type:EDITNOTE,
    payload:title,
})



const initialState = []

export const mainReducer = (state=initialState,action) => {
    switch (action.type) {
        case ADDARRAY:
            return[
                ...state,action.payload
            ]
        case DELETENOTE:
            const deleteNewArray = remove(state, obj => {
                return obj.title != action.payload
            })
            return deleteNewArray
        case EDITNOTE:
            // const filterDelete = map(state,obj =>{
            //     return obj.title == action.payload
            // })
            const filtered = state.filter((state,obj)=>{
                if(obj.title === action.payload){
                    var tamp = obj.title
                    console.log(tamp);
                }
            })
        default:
            return state;
    }
}

export default mainReducer