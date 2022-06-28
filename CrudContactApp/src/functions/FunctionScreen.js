/**
 * @flow
 */

import axios from 'axios'
import { launchCamera,launchImageLibrary } from "react-native-image-picker"


export const getData = (setData:Function,Data:Object):Function =>{
    axios.get('https://simple-contact-crud.herokuapp.com/contact')
    .then(res=>{
    console.log(res.data.data)
    setData(res.data.data)
    })
    return Data
}

export const addData = (first:string,last:string,age:number,foto:string):void =>{
    axios.post('https://simple-contact-crud.herokuapp.com/contact',{
        'firstName' : first,
        'lastName' : last,
        'age' : age,
        'photo' : foto
    },
    {
        headers:{
            'content-type' : 'application/json',
        }
    })
}

// export const FilterSearch = (text:string,Contact:String,setTempContact:Function,setText:Function):void => {
//     if(text){
//         const newData = Contact.filter((item)=>{
//             const itemData = item.firstName ? item.firstName.toUpperCase() : "".toUpperCase()
//             const textData = text.toUpperCase()
//             return itemData.indexOf(textData) > -1
//         })
//         setTempContact(newData)
//         setText(text)
//     }else{
//         setTempContact(Contact)
//         setText(text)
//     }
// }

export const openCamera = (image:string,setImage:Function):Function => {
        
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
                setImage(data.uri)
                console.log(data.uri)
            }
        })
        return image
    }

export const openGallery = (image:string,setImage:Function):Function =>{
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
            setImage(data.uri)
            console.log(data.uri)
        }
    })
    return image
}

export const AddorEditContactLock = (first:string,last:string,age:string):Function =>{
    let correctfirstname:boolean = false
    let correctlastname:boolean = false
    let correntage:boolean = false
    let errorText:string = ''
    let allowAdd:boolean = false

    if(first.length >= 3){
        correctfirstname = true
    }else if(first.length <3){
        correctfirstname = false
    }

    if(last.length >= 3){
        correctlastname = true
    }else if(last.length <3){
        correctlastname = false
    }

    if(last.length >= 3){
        correctlastname = true
    }else if(last.length <3){
        correctlastname = false
    }

    if(age.length !== 0 ){
        correntage = true
    }else if(last.length === 0 ){
        correntage = false
    }

    if(correctfirstname === true && correctlastname === true && correntage === true){
        allowAdd = true
    }else{
        allowAdd = false
    }

   return allowAdd
}

export const emptyAll = (setImage:Function,setLast:Function,setFirst:Function,setAge:Function):void =>{
    setImage('N/A')
    setLast('')
    setFirst('')
    setAge('')
}