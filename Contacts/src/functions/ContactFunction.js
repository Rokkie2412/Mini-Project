export const GettingData = (Contact,setContact,setTempContact) =>{
    fetch('https://simple-contact-crud.herokuapp.com/contact')
    .then((response)=>response.json())
    .then((json)=>{
        setContact(json.data)
        setTempContact(json.data)
    })
    .catch((error)=>console.log(error))
    return Contact
}

export const FilterSearch = (text,Contact,setTempContact,setText) => {
    if(text){
        const newData = Contact.filter((item)=>{
            const itemData = item.firstName ? item.firstName.toUpperCase() : "".toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        setTempContact(newData)
        setText(text)
    }else{
        setTempContact(Contact)
        setText(text)
    }
}