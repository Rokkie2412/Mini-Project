'use strict';
import Ion from 'react-native-vector-icons/Ionicons'  
import Feather from 'react-native-vector-icons/Feather'
import React, { useState, useEffect, useRef } from 'react';
import { RNCamera } from 'react-native-camera';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Dimensions,
  Image
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';


const App = ()  => {
  const [useTorch,setUseTorch] = useState(false)
  const SCREEN_HEIGHT = Dimensions.get("window").height;
  const SCREEN_WIDTH = Dimensions.get("window").width;
  const scanBarWidth = SCREEN_WIDTH * 0.46;
  const [scan,setScan] = useState(false)
  const [result,setResult] = useState(null)

  useEffect(()=>{
    setResult(null)
  },[])

  const scanner = useRef(null)
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

  const handerTorch = () => {
    if(useTorch === true){
      return RNCamera.Constants.FlashMode.torch
    }else if (useTorch === false){
      return RNCamera.Constants.FlashMode.off
    }
  }
 
    return !scan ?(
      <View style={styles.container}>
      {/* memunculkan data yang terscan */}
      {result && <View><Text>{JSON.stringify(result,null,2)}</Text></View>} 
        <TouchableOpacity style={styles.buttonTouchable} onPress={()=>setScan(true)}>
          <Text style={styles.buttonText}>START SCAN</Text>
        </TouchableOpacity>
      </View>
      ):(
        <QRCodeScanner
        flashMode={handerTorch()}
        cameraStyle={[{height: SCREEN_HEIGHT,width:SCREEN_WIDTH,bottom:208}]}
        // containerStyle={{height:SCREEN_HEIGHT}}
        onRead={onSuccess}
        ref={scanner}
        // reactivate={true}
        // showMarker={true}

        bottomContent={
          <View style={styles.bottomNav}>
            <TouchableOpacity style={styles.backbutton} onPress={()=>scanner.current.reactivate()}>
              {/* <Image style={styles.backIcon} source={require('./Asset/back.png')}/> */}
              <Feather style={styles.backIcon} name='chevron-left' size={40}/>
            </TouchableOpacity>
            <Ion style={styles.QRIS} name="qr-code-outline" size={40}/>
            <TouchableOpacity style={styles.buttonTouchable} onPress={()=>setUseTorch(!useTorch)}>
              {/* <Image style={styles.backIcon} source={require('./Asset/torch.png')}/> */}
              {useTorch == true ?
              <Feather style={styles.torchicon} name='zap-off' size={40}/> : 
              <Feather style={styles.torchicon} name='zap' size={40}/>
              }
            </TouchableOpacity>
          </View>
        }
        />
      )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },
  centerText: {
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  bottomNav:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    alignContent:'center',
    alignSelf:'center',
    backgroundColor:'rgba(255,255,255,0.3)',
    width:'100%',
    height:200,
    top:40,
    borderRadius:30
  },
  buttonTouchable: {
    padding: 16
  },
  backbutton:{
    // backgroundColor:'white',
    borderRadius:50,
    justifyContent:'space-between' 
  },
  backIcon:{
    padding:10,
    marginLeft:28,
    backgroundColor:'rgba(255,255,255,0.6)',
    textAlign:'center',
    justifyContent: 'center',
    borderRadius:50
  },
  torchicon:{
    padding:10,
    marginRight:20,
    backgroundColor:'rgba(255,255,255,0.6)',
    textAlign:'center',
    justifyContent: 'center',
    borderRadius:50
  },
  QRIS:{
    alignItems:'center',
    alignSelf:'center',
    bottom:50,
    left:12,
    padding:10,
    backgroundColor:'rgba(255,255,255,0.6)',
  }

});


export default App