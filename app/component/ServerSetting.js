import React, { Component } from 'react'
import { Text,StatusBar, TouchableOpacity} from 'react-native'
import { Container, View,  Form, Item, Label, Button, Input, Row, Icon, Content, Header, Body, Title, Left} from 'native-base';
import { Actions } from 'react-native-router-flux'
// import useForm from 'react-hook-form'
// import {cust} from 'app/library'
// import {doSave,doTest} from 'app/module/server'
// import {getLocal} from 'app/store/index'

export const ServerSetting = ({dosave, docheck}) => {

    // const {register, setValue, handleSubmit, errors} = useForm();
    return(
        <Container>
            <StatusBar hidden={true}/>
            <Header>
                <Left>
                    <Button transparent onPress={()=>Actions.pop()}>
                        <Icon style={{color:"#fff"}} name="close" />
                    </Button>
                </Left>
                <Body>
                    <Title>Setting Server</Title>
                </Body>
            </Header>
            <Content style={{padding:10}}>
                <View >
                    <Text style={{fontSize:13,marginBottom:20}}>
                        Alamat Server digunakan untuk berkomunikasi dengan aplikasi web.
                        Masukkan alamat url anda mengakses aplikasi tersebut kedalam kolom isian.
                    </Text>
                    <Form>
                        <Label style={{fontSize:13}}>Alamat baru</Label>
                        <Item >                            
                            <Input  style={{fontSize:12}}
                                    // getRef = {register({name: 'serverText', required: true})}
                                    // onChangeText = {text => setValue('serverText',text)}                                    
                            />
                            <TouchableOpacity onPress={()=>Actions.cameras({mode:'qrserver'})}>
                                <Icon name="qr-scanner" />
                            </TouchableOpacity>
                        </Item>
                    </Form>
                    <Button success block onPress={()=>dosave()}>
                        <Text style={{color:'#FFF'}}>Simpan</Text>
                    </Button>
                </View>
                <View >
                    <Label style={{fontSize:13}}>Alamat digunakan saat ini</Label>
                    <Form >
                        <Item >
                            {/* <Input style={{fontSize:12}} editable={false} value={getLocal('server')}/> */}
                            <Input style={{fontSize:12}}/>
                        </Item>
                    </Form>
                    <Button light block onPress={()=>docheck('https://sipas.id/')}>
                        <Text>Tes Koneksi</Text>
                    </Button>
                </View>
            </Content>
        </Container>
    )
}