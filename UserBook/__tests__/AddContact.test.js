import React from "react";
import AddContacts from "../components/screens/AddContact";
import { Provider } from "react-redux";
import { mainReducer } from "../components/redux/redux";
import { createStore } from "redux";
import { create,act } from "react-test-renderer";

jest.mock(
  'react-native-vector-icons/Ionicons',
  () => 'MockedIonicons',
);

jest.mock(
    'react-native-flash-message',
    ()=> 'Mockedreact-native-flash-message'
)

jest.mock(
    'react-native-image-picker',
    ()=> 'Mocked react-native-image-picker'
)

jest.mock(
    'react-native-textinput-effects',
    ()=>'Mocked react native effect input'
)

const navigation={
    navigate:jest.fn()
}

const store = createStore(mainReducer,{status:'default status'})
const tree = create(
    <Provider store={store}>
        <AddContacts navigation={navigation}/>
    </Provider>
)

test('Snap test Home pages',()=>{
    expect(tree).toMatchSnapshot()
})

test('navigation to Home',()=>{
    const button = tree.root.findByProps({testID:'backButton'}).props
    button.onPress()
    expect(navigation.navigate).toBeCalledWith('Home')
})

// test('navigation to Home',()=>{
//     const button = tree.root.findByProps({testID:'submitButton'}).props
//     act(()=>button.onPress())
//     const text = tree.root.findByProps({testID:'textalert'}).props
//     expect(text.children).not.toBeNull
// })

// test('navigation to Home',()=>{
//     const button = tree.root.findByProps({testID:'submitButton'}).props
//     button.onPress()
//     expect(showMessage).toBeFalsy()
//     expect(navigation.navigate).toBeCalledWith('Home')
// })