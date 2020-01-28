import React, { Component, useReducer } from 'react'
import { Actions } from 'react-native-router-flux'
import {LoadStore} from 'app/storage/LocalStorage'

//import layout
import {Login,Loading} from 'app/component'


const Auth = () => {

    // LoadStore('server')
    // .then(res=>{
    //     Actions.replace('home');
    // }).catch(err => {
    //     console.log(err);
        return(<Login doLogin={()=>Actions.home()} /> )    
    // })
    // return(<Login doLogin={()=>Actions.home()} /> )    
    // return(<Loading />)   
}

export default Auth