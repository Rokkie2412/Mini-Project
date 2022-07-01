/**
 * @flow
 */

export type Add={|
    showmodal:boolean,
    setmodal:Function,
|}

export type PickAdd={|
    show:boolean,
    setshow:Function,
    image:string,
    setimage:Function
|}

export type Cards={|
    show:boolean,
    setshow:Function,
    image:any,
    first:string,
    last:string,
    Age:string
|}

export type EditContact={|
    show:boolean,
    setshow:Function,
    id:string,
    first:string,
    last:string,
    age:string,
    photo:string,
    setfirst:Function,
    setlast:Function,
    setage:Function,
    setphoto:Function
|}

export type SearchBar={|
    search:string,
    setSearch:Function
|}