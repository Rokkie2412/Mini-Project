export const ADD_CONTACT = 'ADD_CONTACT'
export const SHOW_CONTACT = 'SHOW_CONTACT'
export const EDITCONTACT = 'EDITCONTACT'

const ApiUrl = 'https://simple-contact-crud.herokuapp.com/contact'


export const addContact = (firstName,lastName,age,image) =>({
    type:ADD_CONTACT,
    payloadFirstname : firstName,
    payloadLastName : lastName,
    payAge : age,
    payloadImage : image
})

export const editContact = (itemId,firstName,lastName,age,image) => ({
    type:EDITCONTACT,
    payloadID : itemId,
    payloadFirstname : firstName,
    payloadLastName : lastName,
    payAge : age,
    payloadImage : image
})

let initialState = {
    arr:[],
}

export const mainReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            const postContact = () =>{
                fetch('https://simple-contact-crud.herokuapp.com/contact',{
                    method:'POST',
                    body: JSON.stringify({
                        firstName : action.payloadFirstname,
                        lastName : action.payloadLastName,
                        age : action.payAge,
                        photo : action.payloadImage
                    }),
                    headers:{
                        'Content-Type' : 'application/json',
                    }
                }).then(Response=>Response.json()).then(json=>console.log(json))
            }
            return(postContact())
        case EDITCONTACT :
            const editContact = () =>{
                const tempid = action.payloadID 
                
                fetch(`https://simple-contact-crud.herokuapp.com/contact/${tempid}`,{
                    method:'PUT',
                    body: JSON.stringify({
                        firstName : action.payloadFirstname,
                        lastName : action.payloadLastName,
                        age : action.payAge,
                        photo : action.payloadImage
                    }),
                    headers:{
                        'Content-Type' : 'application/json',
                    }
                 }).then(Response=>Response.json()).then(json=>console.log(json))
            }
            return(editContact())
        default:
            return state
    }
}