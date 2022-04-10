import React,{useState, useEffect} from 'react'
import {View,Text,StyleSheet,Pressable,FlatList,TouchableOpacity,Image} from 'react-native'
import SearchBar from './SearchBar'
import { useSelector} from "react-redux";
import { showMessage } from 'react-native-flash-message';
import Ion from 'react-native-vector-icons/Ionicons'
import NetInfo from "@react-native-community/netinfo";
import RNRestart from 'react-native-restart';

const Home = ({navigation}) => {
    const [search,setSearch] = useState('')
    const [result,setResult] = useState([])
    const [Filterresult,setFilterResult] = useState([])
    let dataArray = useSelector(state=>state.arr)
    dataArray = Filterresult
    
    const intervalSet = () => {
        setInterval(()=>{
        checkInternet()
        clearInterval(10000)
    },10000)
    }

    const IntervalCheck = () => {
        const interval = intervalSet()
        return clearInterval(interval)
    }

    useEffect(()=>{
        getData()
        checkInternet()
        const unsubscribe = navigation.addListener('focus',()=>{
            getData()
        })
        return unsubscribe
    },[navigation])

    const getData = () => {
        fetch('https://simple-contact-crud.herokuapp.com/contact')
        .then((response)=>response.json())
        .then((json)=>{
            setResult(json.data)
            setFilterResult(json.data)
        })
        .catch((error)=>{
            showMessage({
                message:'Error Happened',
                description:`${error} is happened, please contact your admin`,
                floating:true,
                type:'danger',
                icon:'danger',
                animationDuration:'800',
                autoHide:false,
                onPress:()=>{
                    RNRestart.Restart()
                }
            })
        })
    }


    const checkInternet = () =>{
        NetInfo.fetch('https://simple-contact-crud.herokuapp.com/contact').then(networkState=>{
        // console.log("Is connected? - ", networkState.isConnected);
        if (networkState.isConnected !== true) {
            showMessage({
                message:'Not connected to server',
                description:'Connection Error Check Your Internet Connection, Press to restart app',
                floating:true,
                type:'warning',
                icon:'warning',
                animationDuration:600,
                autoHide:false,
                onPress: () => {
                    RNRestart.Restart()
                    }
                })
            }
        })
        
    }

    const FilterSearch = (text) => {
        if (text){
            const newData = result.filter((item)=>{
                const itemData = item.firstName ? item.firstName.toUpperCase() : ''.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            setFilterResult(newData)
            setSearch(text)
        }else{
            setFilterResult(result)
            setSearch(text)
        }
        
    }

    IntervalCheck()
    
    return(
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Contacts</Text>
            </View>

            <View>
                <SearchBar search={search} setSearch={(text)=>FilterSearch(text)}/>
            </View>
            
            <View style={styles.flatlistView}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dataArray.sort((a,b)=>a.firstName.localeCompare(b.firstName))}
                    keyExtractor={({id},index)=>id}
                    renderItem={({item})=>{
                        return(
                            <View style={styles.flatcontainer}>
                                
                                    <TouchableOpacity onPress={()=>{
                                        navigation.navigate('EditContact',
                                            {itemID : item.id,
                                            firstName: item.firstName,
                                            lastName : item.lastName,
                                            age:item.age,
                                            photo:item.photo})
                                    }}>
                                    <View style={styles.contactList}>
                                        {item.photo == 'N/A' ? <Ion name='person' style={styles.peopleIcon}/> :
                                        <Image style={styles.imagePhoto} source={{uri:`${item.photo}`}}/>
                                        }
                                        <Text style={styles.contactName}>{item.firstName} {item.lastName}</Text>
                                    </View>
                                    </TouchableOpacity>
                                
                            </View>
                        )
                    }}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={{alignItems:'flex-end'}} 
                onPress={()=>navigation.navigate('AddContact')}
                >
                    <Ion name='add' style={styles.addButton}/>
                </Pressable>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({ 
    mainContainer:{
        flex:1,
        backgroundColor:'#FFF'

    },
    header:{
        flexDirection:'row',
        justifyContent:'center',
    },
    headerTitle:{
        fontSize:24,
        color:'black',
        fontWeight:'500',
        marginTop:5,
    },
    buttonContainer:{
        
        // borderWidth:1,
        // borderColor:'black',
        // height:600,
    },
    addButton:{
        position:'absolute',
        fontSize:40,
        backgroundColor:'#00ae78',
        color:'#f8ffff',
        padding:10,
        borderRadius:50,
        bottom:20,
        right:13,
    },
    contactList:{
        flexDirection:'row',
        marginHorizontal:25,
        marginLeft:18,
        marginVertical:13,
    },
    contactName:{
        fontSize:20,
        color:'#2C3333',
        fontWeight:'500',
        marginLeft:15,
        textAlign:'center',
        alignSelf:"center"
    },
    peopleIcon:{
        fontSize:23,
        color:'#f8ffff',
        padding:10,
        backgroundColor:'#dee1e6',
        borderRadius:50,
    },
    imagePhoto:{
        width:47,
        height:47,
        borderRadius:50,
    },
    flatcontainer:{
        justifyContent:'center',
        flexGrow: 0
    },
    flatlistView:{
        flex:1,
    }
})

export default Home