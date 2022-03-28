'use strict'
import React,{useState,useEffect,useRef} from "react"
import { RNCamera } from "react-native-camera"
import {View,StyleSheet,Text,Linking,Image,Pressable,Dimensions,Modal} from 'react-native'
import QRCodeScanner from "react-native-qrcode-scanner"
import Ion from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/MaterialCommunityIcons'
import * as Animatable from "react-native-animatable"
const Scanner = ({navigation}) => {
  const [scan,setScan] = useState(false)
  const [result,setResult] = useState(null)
  const [torch,setTorch] = useState(false)
  const SCREEN_HEIGHT = Dimensions.get('window').height
  const SCREEN_WIDTH = Dimensions.get('window').width
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
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };

   function makeSlideOutTranslation(translationType, fromValue) {
    return {
      from: {
        [translationType]: SCREEN_WIDTH * -0.18
      },
      to: {
        [translationType]: fromValue
      }
    };
  }
  

  return(
    <View style={styles.truecontainer}>
      <QRCodeScanner
      ref={scanner}
      reactivate={true}
      flashMode={handerTorch()}
      // containerStyle={{flex:1,height:SCREEN_HEIGHT}}
      cameraStyle={[{height:SCREEN_HEIGHT}]}
      showMarker
      customMarker={
        <View style={styles.rectangleContainer}>
          <View style={styles.topOverlay}>
            <Text style={{ fontSize: 15, color: "white",marginHorizontal:50,top:SCREEN_HEIGHT*0.084}}>
                Place your camera at the QR code or upload QR Code from gallery to pay
              </Text>
          </View>
          <View style={{flexDirection:"row"}}>  
            <View style={styles.leftAndRightOverlay}/>
            <View style={styles.rectangle}>
              <FontAwesome name="scan-helper" style={styles.Octicon}/>
              <Animatable.View
                style={styles.scanBar}
                direction='alternate-reverse'
                iterationCount='infinite'
                duration={1100}
                easing='linear'
                animation={makeSlideOutTranslation(
                  "translateY", 
                  SCREEN_WIDTH* -0.98
                )}
              />
            </View>
            <View style={styles.leftAndRightOverlay}/>
          </View>
          <View style={styles.bottomOverlay} />
        </View>
      }
      onRead={onSuccess}
      bottomContent={
        <View style={styles.bottomnav}>
          <View style={styles.mainBottom}>
            <Pressable onPress={()=>setTorch(!torch)}>
              {torch === false ? 
            <Ion style={styles.flashlogo} name="flash-outline"/> :
            <Ion style={styles.flashlogo} name="flash-off-outline"/>
            }
            </Pressable>
            <Ion style={styles.gallery} name="images-outline"/>
          </View>
          <View style={styles.QRLogo}>
            <Text style={styles.partners}>Partners with</Text>
          </View>
          <View style={styles.partner}>
            <Image style={styles.qris} source={require('./asset/img/qris_white.png')} />
          </View>
        </View>
      }
      />
    </View>
  )
}
  const rectBorderColor = "#c5ecfc";
  const overlayColor = "rgba(0,0,0,0.7)";
  const SCREEN_HEIGHT = Dimensions.get('window').height
  const SCREEN_WIDTH = Dimensions.get('window').width
  const scanBarHeight = SCREEN_WIDTH * 0.005;
  const scanBarWidth = SCREEN_WIDTH * 0.8;
  const rectBorderWidth = SCREEN_WIDTH * 0.004;
  const rectDimensions = SCREEN_WIDTH * 0.8;
  const scanBarColor = "#ffae17"; 
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
    height:550,
    borderRadius:40,
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
    justifyContent:'center',
    marginBottom:30,
  },
  flashlogo:{
    fontSize:35,
    padding:12,
    marginHorizontal:15,
    borderRadius:50,
    color:'white',
    borderWidth:2,
    borderColor:'white',
    textAlign:'center'
  },
  gallery:{
    fontSize:35,
    padding:12,
    marginHorizontal:15,
    borderRadius:50,
    borderWidth:2,
    borderColor:'white',
    textAlign:'center',
    color:'white',
  },
  qris:{
    width:60,
    height:20,
    alignContent:'center',
    alignSelf:'center',
    marginBottom:30,
  },
  partner:{
    justifyContent:'center',
    alignContent:'center',
    alignSelf:'center',
    
  },
  modalContainer:{
    margin:80,
    color:'black'
  },
  partners:{
    color:'white',
    fontSize:15,
    marginVertical:10,
  },
  rectangleContainer:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  topOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    justifyContent: "center",
    alignItems: "center"
  },
  leftAndRightOverlay: {
    height: SCREEN_WIDTH * 0.8,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor
  },
  scanBar: {
    top:228,
    width: scanBarWidth,
    height: scanBarHeight,
    backgroundColor: scanBarColor
  },
  bottomOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    paddingBottom: SCREEN_WIDTH * 0.25
  },
  rectangle: {
    height: rectDimensions,
    width: rectDimensions,
    borderWidth: rectBorderWidth,
    borderColor: rectBorderColor,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius:3,
  },
  Octicon:{
    position:'absolute',
    fontSize:300,
    color:'white'
  }
})

export default Scanner