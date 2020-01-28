import React, { Component } from 'react'
import { Container, Content, View, Row, Col, Thumbnail, Footer, Right, Body, Button, Icon } from 'native-base'
// import {sesDestroy, doReportError, downloadManBook, checkUpdate} from 'app/module/auth'
import {Text,TouchableOpacity,Image} from 'react-native'
import { Actions } from 'react-native-router-flux'
// import {getLocal} from 'app/store/index'


export default Dashboard = () => {
    // const profile = getLocal('profile').profile;
    // const server = getLocal('server');
    // const uri = server+'server.php/sipas/staf/get_image/foto?id='+profile.staf_id;
    return(
        <Container>
            <Button transparent onPress={()=>Actions.pop()} style={{position:"absolute",zIndex:1}}>
                <Icon name="close"/>
            </Button>
            <Content>
                <Image
                    source={require('app/assets/image/office-desk.jpg')}
                    style={{ flex: 1, height:200, width:"100%", resizeMode: 'cover', position:"absolute"}}
                />
                <View style={{height:200,width:"100%",paddingTop:40,backgroundColor:"transparent", alignContent:"center",alignSelf:"center",alignItems:"center"}}>
                    <TouchableOpacity onPress={()=>Actions.cameras()}>
                        {/* <Thumbnail large source={{uri:uri}} /> */}
                        <Thumbnail large source={require('app/assets/icon/person.png')}/>
                    </TouchableOpacity>
                    <Text style={{textTransform:"uppercase"}}>Chasarinda</Text>
                    <Text style={{fontSize:13,textTransform:"uppercase"}}>Asisten Kepala</Text>
                    <Text style={{fontSize:12,textTransform:"uppercase"}}>Unit Teknis</Text>
                </View>
                <View>
                    <Row style={{height:25}}></Row>
                    <Row>
                        <Col style={{alignItems:"center"}}>
                            <TouchableOpacity  onPress={() => Actions.server()}>
                                <Thumbnail large source={require('app/assets/icon/setting-2.png')} />
                                <Text style={{textAlign:"center"}}>Server</Text>
                            </TouchableOpacity>
                        </Col>
                        <Col style={{alignItems:"center"}}>
                            <TouchableOpacity  onPress={() => Actions.asistensi()}>
                                <Thumbnail large source={require('app/assets/icon/asistensi.png')} />
                                <Text style={{textAlign:"center"}}>Asistensi</Text>
                            </TouchableOpacity>
                        </Col>
                        <Col style={{alignItems:"center"}}>
                            <TouchableOpacity onPress={()=>checkUpdate()}>    
                                <Thumbnail large source={require('app/assets/icon/update.png')} />
                                <Text style={{textAlign:"center"}} >Cek Update</Text>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                    <Row style={{height:25}}></Row>
                    <Row>
                        <Col style={{alignItems:"center"}}>
                            <TouchableOpacity onPress={()=>downloadManBook()}>
                                <Thumbnail large source={require('app/assets/icon/book.png')} />
                                <Text style={{textAlign:"center"}}>Panduan</Text>
                            </TouchableOpacity>
                        </Col>
                        <Col style={{alignItems:"center"}}>         
                        <TouchableOpacity onPress={()=>doReportError()}>
                            <Thumbnail large source={require('app/assets/icon/error.png')} />
                            <Text style={{textAlign:"center"}} >Feedback</Text>
                        </TouchableOpacity>
                        </Col>
                        <Col style={{alignItems:"center"}}>               
                        </Col>
                    </Row>                    
                </View>                
            </Content>
            <Footer style={{backgroundColor:'#fff'}}>
                <Body style={{margin:10}}>
                    <Text>v5.30.19430</Text>
                </Body>
                <Right style={{margin:10}}>
                    <TouchableOpacity  onPress={() => sesDestroy()}>
                        <Thumbnail small source={require('app/assets/icon/power.png')}/>
                    </TouchableOpacity>
                </Right>
            </Footer>
        </Container>
    )
}