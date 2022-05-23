import { launchCamera,launchImageLibrary } from "react-native-image-picker"

export const allowAddTrueFalse = (firstname,lastname,age,disable,setDisable) =>{
    if((firstname === '' || lastname === '') || age === ''){
        setDisable(true)
        return(disable)
    }else{
        setDisable(false)
        return(disable)
    }
}

export const addContactToAPI = (first,last,age,photo) =>{
    const postContact = fetch('https://simple-contact-crud.herokuapp.com/contact',{
        method:'POST',
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

    return postContact
}

export const openCamera = (imageFromCamera,setImageFromCamera) => {
        
        const option={
            mediaType : 'photo',
            quality : 0.6,
        }
        launchCamera(option,(res)=>{
            if(res.didCancel){
                console.log('User Cancel Image Picker');
            }else if(res.errorCode){
                console.log(res.errorMessage);
            }else{
                const data = res.assets[0]
                setImageFromCamera(data.uri)
                console.log(data.uri)
            }
        })
        return imageFromCamera
    }

export const openGallery = (imageFromGallery,setImageFromGallery) =>{
    const option = {
        mediaType : 'photo',
        quality : 0.6
    }
    launchImageLibrary(option,(res)=>{
        if(res.didCancel){
            console.log('User Cancel Image Picker')
        }else if(res.errorCode){
            console.log(res.errorCode)
        }else{
            const data= res.assets[0]
            setImageFromGallery(data.uri)
            console.log(data.uri)
        }
    })
    return imageFromGallery
}