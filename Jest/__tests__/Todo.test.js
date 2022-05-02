import React from "react";
import { create,act } from "react-test-renderer";
import Mentah from '../Mentahan'
import Todo from "../TodoList";
    import { createStore } from "redux";
import { Provider } from "react-redux";
import mainReducer from "../Redux/redux";
import Icon from 'react-native-vector-icons/MaterialIcons'

jest.mock(
  'react-native-vector-icons/MaterialIcons',
  () => 'MockedMaterialIcons',
);

const store=createStore(mainReducer,{status:'default status'})
const tree = create(
    <Provider store={store}>
        <Todo/>  
    </Provider>
)

// const tree = create(<RandomScreen/>)

test('Testing a component' ,()=>{
    expect(tree).toMatchSnapshot()
})

const treeMentah = create(<Mentah/>)
test('Mentah Screen',()=>{
    expect(treeMentah).toMatchSnapshot()
})


