import React,{useState} from 'react'
import {Text,TextInput,Pressable,View,StyleSheet,Image,Alert,PermissionsAndroid} from 'react-native'
import { showMessage } from 'react-native-flash-message'
import Ion from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { useDispatch } from "react-redux";
import { addContact } from '../redux/redux'
import { launchCamera, launchImageLibrary} from 'react-native-image-picker';


const AddContacts = ({navigation}) => {
    const [Error,setError] = useState('')
    const [disableButton,setDisableButton] = useState(true)
    const [firstName,setFirstName] = useState('')
    const [LastName,setLastName] = useState('')
    const [Age,setAge] = useState('')
    const [imageCamera,setImageCamera] = useState('N/A')
    const dispatch = useDispatch()

    const requestPermission = () =>{
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,{
                    title: "App Camera Permission",
                    message:
                    "We need your permission to take photo for contact photo ",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Camera Granted')
        }else{
            console.log('Permission Denied')
        }
        } catch (error) {
            console.warn(error)
        }
    }

    const addItem = () => {
        dispatch(addContact(firstName,LastName,Age,imageCamera))
    }

    const openCamera = () => {
        
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
                setImageCamera(data.uri)
                console.log(data)
            }
        })
    }

    const openGallery = () => {
        
        const option={
            mediaType : 'photo',
            quality : 1
        }
        launchImageLibrary(option,(res)=>{
            if(res.didCancel){
                console.log('User Cancel Image Picker');
            }else if(res.errorCode){
                console.log(res.errorMessage);
            }else{
                const data = res.assets[0]
                setImageCamera(data.uri)
                console.log(data)
            }
        })
    }
    

    return(
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <Pressable onPress={()=>navigation.goBack()}>
                    <Feather style={styles.backIcon} name='x'/>
                </Pressable>
                <Text style={styles.titleheader}>Save to contact</Text>
                <Pressable
                onPress={()=>{
                    {if(disableButton === true){
                        showMessage({
                        message:'Edit Failed',
                        description:'Name must have atleast 3 character',
                        animationDuration:600,
                        floating:true,
                        type:'warning',
                        icon:'warning'
                        })
                    }else if(disableButton === false){
                        addItem()
                        navigation.navigate('Home')
                    }}
                }}
                >
                    <Ion style={styles.completeIcon} name='checkmark-sharp'/>
                </Pressable>
            </View>
            <View style={styles.photoContainer}>
                <Pressable
                onPress={()=>{
                    Alert.alert(
                        'Choose Media for pick an image',
                        'Camera or Gallery',[
                            {
                                text:'Cancel',
                                onPress: ()=> console.log('Cancel'),
                            },
                            {
                                text:'Camera',
                                onPress: ()=>openCamera(),
                            },
                            {
                                text:'Gallery',
                                onPress: ()=>openGallery(),
                                styles:'cancel'
                            }
                        ]
                    )
                }}
                >
                    {imageCamera === 'N/A' ? <Ion style={styles.person} name='person'/> :
                    <Image source={{uri:imageCamera}} style={styles.imagePhoto}/>
                    }
                </Pressable>
            </View>
            <View style={styles.InputContainer}>
                <TextInput
                    style={styles.Firstname}
                    value={firstName}
                    onChangeText={(newFirst)=>{
                        setFirstName(newFirst)
                        {if(newFirst.length < 3){
                            setError('First name and last name length atleast must have 3 character')
                            setDisableButton(true)
                        }else{
                            setError('')
                            setDisableButton(false)
                        }}
                    }}
                    placeholder="First Name"
                />
                <TextInput
                    style={styles.Lastname}
                    value={LastName}
                    onChangeText={(newLast)=>{
                        setLastName(newLast)
                        {if(newLast.length < 3){
                            setError('First name and last name length atleast must have 3 character')
                            setDisableButton(true)
                        }else{
                            setError('')
                            setDisableButton(false)
                        }}
                    }}
                    placeholder="Last Name"
                />
                <Text style={{marginHorizontal:32,fontSize:11,color:'black',marginVertical
                :7,}}>{Error}</Text>
                <Text style={{margin:12,fontWeight:'600',textAlign:'center',fontSize:16}}>Age :</Text>
                <TextInput
                keyboardType='numeric'
                    placeholder='Age'
                    style={styles.age}
                    value={Age}
                    onChangeText={(newAge)=>{
                        setAge(newAge)
                        if(newAge === ''){
                            setErrorMessage('Age must not be empty')
                            setDisableButton(true)
                        }else{
                            setDisableButton(false)
                        }
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#fff'
    },
    header:{
        justifyContent:'space-between',
        flexDirection:'row',
        margin:5,
    },
    backIcon:{
        padding:10,
        fontSize:30,
        color:'#2C3333',
        borderRadius:40,
    },
    titleheader:{
        fontSize:20,
        fontWeight:'600',
        padding:10,
        color:'#2C3333',
    },
    completeIcon:{
        padding:10,
        fontSize:30,
        color:'#2C3333',
        borderRadius:40,
    },
    person:{
        backgroundColor:'#EEEEEF',
        color:'white',
        fontSize:40,
        padding:20,
        borderRadius:100,
        
    },
    photoContainer:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
    },
    InputContainer:{
        flex:1
    },
    Firstname:{
        backgroundColor:'#EFEFEE',
        borderRadius:50,
        marginTop:15,
        marginHorizontal:12,
        fontWeight:'bold',
        paddingLeft:20,
    },
    Lastname:{
        backgroundColor:'#EFEFEE',
        borderRadius:50,
        marginTop:8,
        marginHorizontal:12,
        fontWeight:'bold',
        paddingLeft:20,
    },
    age:{
        backgroundColor:'#EFEFEE',
        borderRadius:50,
        marginTop:8,
        marginHorizontal:12,
        fontWeight:'bold',
        width:100,
        alignSelf:'center',
        textAlign:'center'
    },
    imagePhoto:{
        height:90,
        width:90,
        borderRadius:50,
    }

})

export default AddContacts