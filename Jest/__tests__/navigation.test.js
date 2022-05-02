import React from "react";
import Mentah from '../Mentahan'
import { create,act } from "react-test-renderer";
const navigation={
    navigate:jest.fn()
}

const tree = create(<Mentah navigation={navigation} />)
test('navigation to todolist',()=>{
    const button = tree.root.findByProps({testID:'myButton'}).props
    button.onPress()
}) 