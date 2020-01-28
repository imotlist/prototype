import React, { Component } from 'react'
import {TouchableOpacity, StatusBar} from 'react-native'
import {Header,Body,Title,Right,Button,Icon, Thumbnail} from 'native-base'
import { Actions } from 'react-native-router-flux'

export const AppHeader = ({title}) => {
    return(
        <>
        <StatusBar hidden={true}/>
        <Header style={{backgroundColor:"#3372d6"}}>
            <Body>
                <Title>{title}</Title>
            </Body>
            <Right>
                <TouchableOpacity onPress={()=>Actions.dashboard()}>                    
                    <Icon style={{color:'#FFF'}} name="contact"/>
                </TouchableOpacity>
            </Right>
        </Header>
        </>
    )
}