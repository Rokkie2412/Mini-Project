import React, {useState, useEffect} from "react";
import {View,StyleSheet,Text,Pressable, TextInput, FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useSelector,useDispatch } from "react-redux";
import { addArray } from "./Redux/redux";
import { deleteFromArray } from "./Redux/redux";
import styles from "./Main.style"

export const DeleteList = (id) => {
    dispatch(deleteFromArray(id))
    console.log(data)
  }

const App = () => {
  const [Todo, setTodo] = useState('')
  const data = useSelector(state=>state.arr)
  const dispatch = useDispatch()
  let NewTodo = {}

  const AddList = () =>{
      NewTodo.title = Todo;
      NewTodo.id = Math.floor(Math.random()*99998)+1
      dispatch(addArray(NewTodo))
      console.log(data)
      setTodo('')
  }

  useEffect(()=>{
    console.log('Nasi goreng')
  },[])

  return(
    <View style={styles.mainContainer}>
        <Text style={styles.HeaderText}>My Todo List</Text>
        <View style={styles.body}>
          {/* whileEmpty */}
          {/* {data.length === 0 ? 
          <View style={{justifyContent:'center',flex:1,}}> 
            <Text style={styles.whileEmpty}>No Current Todo List!</Text>
          </View> : */}
          <FlatList
              data={data}
              keyExtractor={data=>data.id}
              renderItem={({item})=>{
                  return(
                      <Pressable onLongPress={()=>{
                          DeleteList(item.id)
                      }}>
                          <View style={styles.eachItem}>
                              <Text testID="myText" style={styles.item}>{item.title}</Text>
                          </View>
                      </Pressable>
                  )
              }}
          />
          {/* } */}
        </View>
        <View style={styles.InputSection}>
          <TextInput
            placeholder="Start Todo List Here"
            style={styles.inputTextStyle}
            placeholderTextColor='#fff'
            onChangeText={(newTodo)=>{
              setTodo(newTodo)
            }}
            value={Todo}
          />
          <Pressable
            testID="myButton"
            onPress={()=>{
              AddList()
          }}>
            {/* <Icon style={styles.addText} name="add"/> */}
            <Text testID="myText" style={styles.addText}>+</Text>
          </Pressable>
        </View>
    </View>
  ) 
}

export default App