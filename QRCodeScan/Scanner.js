'use strict'
import React,{useState,useEffect,useRef} from "react"
import { RNCamera } from "react-native-camera"
import {View,StyleSheet,Text,Linking,Image,Pressable,Dimensions,Modal} from 'react-native'
import QRCodeScanner from "react-native-qrcode-scanner"
import Feather from 'react-native-vector-icons/Feather'
import Ion from 'react-native-vector-icons/Ionicons'
const Scanner = ({navigation}) => {
  const [modal,setModal] = useState(true)
  const [scan,setScan] = useState(false)
  const [result,setResult] = useState(null)
  const [torch,setTorch] = useState(false)
  const SCREEN_HEIGHT = Dimensions.get('window').height
  const SCREEN_WIDTH = Dimensions.get("window").width;
  const scanner = useRef(null)
   const handerTorch = () => {
    if(torch === true){
      
      return RNCamera.Constants.FlashMode.torch
    }else if (torch === false){
      return RNCamera.Constants.FlashMode.off
    }
  }

  const onSuccess = e => {
    setResult(e)
    setScan(false)

    // if(e.data.substring(0,4) === 'http'){
    //   alert(e.data)
    // }
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };
  

  return(
    <View style={styles.truecontainer}>
      <QRCodeScanner
      ref={scanner}
      reactivate={true}
      flashMode={handerTorch()}
      containerStyle={{flex:1,height:SCREEN_HEIGHT}}
      cameraStyle={[{height:SCREEN_HEIGHT,position:'absolute'}]}
      onRead={onSuccess}
      bottomContent={
        <View style={styles.bottomnav}>
          <View style={styles.text}>
            <Ion style={styles.BackIcon} name="chevron-back-outline"/>
            <Text style={styles.transcation}>Scan for transcation</Text>
            <Pressable onPress={()=>navigation.navigate('info')}><Ion style={styles.informationLogo} name="alert-circle-outline"/></Pressable>
          </View>
          <View style={styles.QRLogo}>
            <Ion style={styles.Logo} name="qr-code-outline" size={40}/>
          </View>
          <View style={styles.mainBottom}>
            <Pressable onPress={()=>setTorch(!torch)}>
              {torch === false ? 
            <Ion style={styles.flashlogo} name="flash-outline"/> :
            <Ion style={styles.flashlogo} name="flash-off-outline"/>
            }
            </Pressable>
            <Ion style={styles.gallery} name="images-outline"/>
          </View>
          <View style={styles.partner}>
            <Image style={styles.qris} source={require('./asset/img/Qris.png')} />
          </View>
        </View>
      }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  falsecontainer:{
    flex:1,
    backgroundColor:'#EFFFFD'
  },
  startButton:{
    color:'#22577E',
    fontSize:30,
    fontWeight:'700',
    padding:10,
    backgroundColor:'#85F4FF',
    borderRadius:50
  },
  truecontainer:{
    backgroundColor:'#EFFFFD',
  },
  bottomnav:{
    top:Dimensions.get('window').height,
    width:'100%',
    height:370,
    backgroundColor:'rgba(255,255,255,0.6)',
    borderRadius:40,
  },
  text:{
    position:'absolute',
    width:'100%',
    flexDirection:'row',
    justifyContent:'center',
  },
  transcation:{
    color:'#222831',
    marginHorizontal:60,
    fontSize:16,
    alignContent:'center',
    padding:10,
    backgroundColor:'rgba(255,255,255,0.4)',
    borderRadius:50,
    fontWeight:'600',
    bottom:(Dimensions.get('window').height) * 0.7
  },
  informationLogo:{
    padding:5,
    borderRadius:50,
    backgroundColor:'rgba(255,255,255,0.4)',
    bottom:(Dimensions.get('window').height) * 0.73,
    fontSize:30,
    textAlign:'center',
    alignSelf:'center',
    textAlign:'center',
    alignSelf:'center',
    color:'#222831',
  },
  BackIcon:{
    padding:5,
    borderRadius:50,
    backgroundColor:'rgba(255,255,255,0.4)',
    bottom:(Dimensions.get('window').height) * 0.73,
    fontSize:30,
    textAlign:'center',
    alignSelf:'center',
    color:'#222831',
  },
  QRLogo:{
    flexDirection:'row',
    justifyContent:'center'
  },
  Logo:{
    padding:10,
    backgroundColor:'rgba(255,255,255,0.9)',
    borderRadius:10,
    bottom:30
  },
  mainBottom:{
    flexDirection:'row',
    justifyContent:'center'
  },
  flashlogo:{
    fontSize:40,
    padding:10,
    backgroundColor:'rgba(255,255,255,0.2)',
    marginHorizontal:15,
    right: 50,
    borderRadius:50,
    color:'#222831',
  },
  gallery:{
    fontSize:40,
    padding:10,
    backgroundColor:'rgba(217, 218, 219,0.7)',
    marginHorizontal:15,
    left:50,
    borderRadius:50,
    color:'#222831',
  },
  qris:{
    width:60,
    height:20,
    bottom:90,
    alignContent:'center',
    alignSelf:'center'
  },
  partner:{
    justifyContent:'center',
    alignContent:'center',
    alignSelf:'center'
  },
  modalContainer:{
    margin:80,
    color:'black'
  }
})

export default Scanner