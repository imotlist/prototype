import React, { Component } from 'react'
import { Header, Left, Body, Title, Right, Button, Icon } from 'native-base'
import { StatusBar } from 'react-native'
import { Actions } from 'react-native-router-flux'

export const TitleBar = ({title,onClose=()=>Actions.pop(), hasTabs=false}) => (
    <>
        <StatusBar hidden={true}/>
        <Header hasTabs={hasTabs} style={{backgroundColor:"#3372d6"}}>
            <Left>
                <Button transparent onPress={()=>onClose()}>
                    <Icon name="close" />
                </Button>
            </Left>
            <Body>
                <Title>{title}</Title>
            </Body>           
        </Header>
    </>
)