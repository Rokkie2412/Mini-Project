export const editContactToAPI = (first,last,age,photo,id) =>{
    const putContact = fetch(`https://simple-contact-crud.herokuapp.com/contact/${id}`,{
        method:'PUT',
        body:JSON.stringify({
            firstName : first,
            lastName : last,
            age : age,
            photo : photo
        }),
        headers:{
            'content-type' : 'application/json',
        }
    }).then((Response)=>Response.json())
    .then(json => console.log(json))

    return putContact
}