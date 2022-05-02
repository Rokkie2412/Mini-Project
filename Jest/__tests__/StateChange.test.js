import React from "react";
import { create,act } from "react-test-renderer";
import Mentah from '../Mentahan'
import Todo from "../TodoList";
import { createStore } from "redux";
import { Provider } from "react-redux";
import mainReducer from "../Redux/redux";

const store=createStore(mainReducer,{status:'default status'})
const tree = create(
    <Provider store={store}>
        <Todo/>  
    </Provider>
)


jest.runAllTimers();

test('Button Pressed',()=>{
    const Button = tree.root.findByProps({testID : 'myButton'}).props
    // act(()=>Button.onPress())
    const Text = tree.root.findByProps({testID : 'myText'}).props
})
