import React from "react";
import EditContact from "../components/screens/EditContact";
import { Provider } from "react-redux";
import { mainReducer } from "../components/redux/redux";
import { createStore } from "redux";
import { create,act } from "react-test-renderer";

jest.mock(
  'react-native-vector-icons/Ionicons',
  () => 'Mocked Ionicons',
);

jest.mock(
  'react-native-vector-icons/Feather',
  () => 'Mocked Ionicons',
);

jest.mock(
    'react-native-flash-message',
    ()=> 'Mocked react-native-flash-message'
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

const mockedparams = {
            route:{params : {itemID:'route.params.itemID'}},
            navigate:jest.fn()
        }

const tree = create(
        <Provider store={store}>
            <EditContact navigation={navigation} {...mockedparams}/>
        </Provider>
        )

test('navigation to Home',()=>{
    const button = tree.root.findByProps({testID:'backButton'}).props
    button.onPress()
    expect(navigation.navigate).toBeCalledWith('Home')
})

// test('Testing state change',()=>{
//     const textfirstname = tree.root.findByProps({testID:'firstname'}).props
//     act(()=> textfirstname.onChangeText())
//     const errortext = tree.root.findByProps({testID:'error'}).props
//     expect(errortext.children).toEqual('First name and last name length atleast must have 3 character')
// })

