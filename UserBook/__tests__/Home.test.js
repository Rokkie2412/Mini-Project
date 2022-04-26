import React from "react";
import Home from "../components/screens/Home";
import { Provider } from "react-redux";
import { mainReducer } from "../components/redux/redux";
import { createStore } from "redux";
import { create } from "react-test-renderer";


jest.mock(
  'react-native-vector-icons/Ionicons',
  () => 'MockedIonicons',
);

jest.mock(
    'react-native-flash-message',
    ()=> 'Mockedreact-native-flash-message'
)


jest.mock("@react-native-community/netinfo", () => ({
  fetch: () => Promise.resolve(jest.fn()),
}));


const navigation={
    navigate:jest.fn()
}

const store = createStore(mainReducer,{status:'default status'})
create(
    <Provider store={store}>
        <Home navigation={navigation}/>
    </Provider>
)


jest.useFakeTimers()
jest.spyOn(global, 'setInterval');

const mymodule = require('../components/screens/Home')
const interval = mymodule.interval
const check = mymodule.check

test('Testing interval',()=>{
  interval()
  expect(setInterval).toHaveBeenCalledTimes(1)
  expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function),10000)
})

test("Check interval",()=>{
  expect(check()).not.toBe(null)
})

// test('Filter Search',()=>{
//   expect(filter('Bilbo')).toBe('Bilbo')
// })


function setupFetchStub(data) {
  return function fetchStub(_url) {
    return new Promise((resolve) => {
      resolve({
        json: () =>
          Promise.resolve({
            data,
          }),
      })
    })
  }
}
const fakeData = [{"age": 111, "firstName": "Bilbo", "id": "93ad6070-c92b-11e8-b02f-cbfa15db428b", "lastName": "Baggins", "photo": "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550"}, {"age": 20, "firstName": "Luke", "id": "b3abd640-c92b-11e8-b02f-cbfa15db428b", "lastName": "Skywalker", "photo": "N/A"}]
jest.spyOn(global, "fetch").mockImplementation(setupFetchStub(fakeData))
global.fetch.mockClear()
global.fetch = jest.fn().mockImplementation(setupFetchStub(fakeData))
it('Test fetch?', async () => {
  const fakeData = { fake: 'data' }
  jest.spyOn(global, "fetch").mockImplementation(setupFetchStub(fakeData))

  const res = await fetch('https://simple-contact-crud.herokuapp.com/contact')
  const json = await res.json()
  expect(json).toEqual({ data: fakeData })

  global.fetch.mockClear()
})


