import React, { Component } from 'react'
import { Content, Button, Text } from 'native-base'

export const TerkirimList = ({onUpdate}) => {
    return(
        <Content>
            <Button info block onPress={()=>onUpdate()}>
                <Text>Update</Text>
            </Button>
        </Content>
    )
}