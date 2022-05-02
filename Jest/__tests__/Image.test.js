import React from "react";
import { create,act } from "react-test-renderer";
import ImageTest from "../ImageTest";

const tree = create(<ImageTest/>)
test('Image Test',()=>{
    expect(tree).toMatchSnapshot()
})
