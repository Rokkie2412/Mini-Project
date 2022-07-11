import {create,act} from 'react-test-renderer';
import React from 'react';
import {getData,addData,putData,FilterSearch,openCamera,openGallety,AddorEditContactLock,emptyAll,FuncRepeat,CheckInternet,AddPack, openGallery,Restart} from "../src/functions/FunctionScreen";
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';
import NetInfo from "@react-native-community/netinfo";
import RNRestart from 'react-native-restart';
import { launchCamera,launchImageLibrary } from "react-native-image-picker"
const res = { data : { data: { id: 1233} }}


jest.mock('react-native-restart',()=>({
    Restart:jest.fn()
}))
jest.mock('react-native-vector-icons/Ionicons', () => 'Mocked Ionicons');
jest.mock('react-native-modal',()=> "Mocked Modal React Native")
jest.mock('@react-native-community/netinfo',()=>{
    return{
        fetch:jest.fn()
    }
})
jest.mock('react-native-image-picker',()=>{
    return{
        launchCamera:jest.fn(),
        launchImageLibrary:jest.fn()
    }
})
jest.mock('axios',()=>{
   
    return{
        post:jest.fn(),
        put:jest.fn(),
        get: jest.fn()
    }
})
jest.mock('react-native-restart')


describe('Unit test for Function ',()=>{
    describe('Unit test for AddorEditContactLock',()=>{
        it('Should unlocked',()=>{
            var namaDepan = 'Joker'
            var namaBelakang = 'Bela'
            var Age = "9"
            expect(AddorEditContactLock(namaDepan,namaBelakang,Age)).toBe(true)
            expect(AddorEditContactLock('Jo','Jansen',"11")).toBe(false)
            expect(AddorEditContactLock('Jo','Ja',"11")).toBe(false)
            expect(AddorEditContactLock('Jo','Ja',"")).toBe(false)
            expect(AddorEditContactLock('Jo','JaKin',"1")).toBe(false)

        })
    })
    describe('Unit test for FuncRepeat',()=>{
        it('Should setRepeat',()=>{
            const set = jest.fn()
            FuncRepeat("",set)
            expect(set).toBeCalledWith(1000)
            FuncRepeat("NoNoNo",set)
            expect(set).toBeCalledWith(1000)
        })
    })
    describe('Unit test for CheckInternet',()=>{
        it('Should set the function true',()=>{
            const value = jest.fn()
            NetInfo.fetch.mockResolvedValueOnce(res)
            CheckInternet(value)
            expect(NetInfo.fetch).toHaveBeenCalledWith('https://simple-contact-crud.herokuapp.com/contact')
        })
    })
    describe('Unit Test For Axios',()=>{
        it('Should Post Data to API',()=>{
            addData('John','English',12,'N/A')
            expect(axios.post).toBeCalledTimes(1)
        })

        it('Should Get Data from API', async ()=>{
            const setData = jest.fn()
            const data = { data : { data: { id: 1233} }}
            const setFilteredData = jest.fn()
            const FilteredData = { data : { data: { id: 1233} }}
            axios.get.mockResolvedValueOnce(res)
            await getData(setData,data,FilteredData,setFilteredData)
            expect(axios.get).toHaveBeenCalledWith('https://simple-contact-crud.herokuapp.com/contact')
        })
    })
    describe('Unit test for Filter Search', () => {
        it('Should set the function',()=>{
            const setTempContact = jest.fn()
            const setText = jest.fn()
            const Contact= [{"age": 111, "firstName": "Bilbo", "id": "93ad6070-c92b-11e8-b02f-cbfa15db428b", "lastName": "Baggins", "photo": "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550"}, {"age": 20, "firstName": "Luke", "id": "b3abd640-c92b-11e8-b02f-cbfa15db428b", "lastName": "Skywalker", "photo": "N/A"}] 
            FilterSearch('',Contact,setTempContact,setText)
            expect(setTempContact).toBeCalledWith(Contact)
            expect(setText).toBeCalledWith('')
            FilterSearch('John',Contact,setTempContact,setText)
        })
    })
    describe('Unit Test for AddPack', () => {
      it('Should called with and calling func',()=>{
        const setModal = jest.fn()
        const setImage = jest.fn()
        const setLast = jest.fn()
        const setFirst = jest.fn()
        const setAge = jest.fn() 
        const setError = jest.fn()
        AddPack(setModal,88,'John','Grizz','N/A',setImage,setLast,setFirst,setAge,setError)
      })
    })

    describe('Unit Test for open Gallery', () => {
      it('Should do launchImageLibary',()=>{
         const option={
            mediaType : 'photo',
            quality : 0.6,
        }
        const image = 'N/A'
        const setImage = jest.fn()
        

      })
    })

    describe('Unit test for RNResart',()=>{
        it('Should be called',()=>{
            const spyRN = jest.spyOn(RNRestart,'Restart')
            Restart()
            expect(spyRN).toBeCalled()
        })
    })


    
    
    
})