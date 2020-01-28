import React, { Component, useReducer } from 'react'
import { Container, Form, InputGroup,Item,Label, Input,Text, Button,  Row, Content, Col, Icon } from 'native-base'

export const Login = ({doLogin}) => {
    return(
        <Container>
            <Content style={{padding:10}}>
                <Form>
                    <Item floatingLabel >
                        <Label>Username</Label>
                        <Input  textContentType="username"/>
                    </Item>
                    <Item floatingLabel >
                        <Label>Password</Label>
                        <Input secureTextEntry/>
                    </Item>                
                </Form>                
                <Button info block onPress={()=>doLogin()} style={{marginTop:25}}>
                    <Text>Login</Text>
                </Button>
                <Row style={{margin:20}} />
                <Row style={{padding:10}}>
                    <Col>
                        <Button>
                            {/* <Icon name="setting" /> */}
                        </Button>
                    </Col>
                    <Col>
                        <Button>
                            {/* <Icon name="qr" /> */}
                        </Button>
                    </Col>
                </Row>
            </Content>
        </Container>
    )    
}
