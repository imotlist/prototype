import React, { Component , useState} from 'react'
import {Text} from 'react-native'
import { Container, View, Button, Content} from 'native-base'
import {AppMenutab,AppHeader} from 'app/component'

export const MainContainer = ({onTabs,title,data=null}) =>{
    const [active,setActive] = useState('tugas');
    // loadTugasList();
    // setActive(data);
    const handleList = (text) =>{
        onTabs({type:text});        
    }        
    const showTitle = title.toUpperCase();
    return(
        <Container>
            <AppHeader title={showTitle} />
                <Content>                                   
                    <View>
                        { data &&
                            <Text>{data}</Text>
                        }
                        { !data &&
                            <Text>Data Load Error</Text>
                        }
                    </View>
                </Content>
                
            <AppMenutab onChange={(text)=>handleList(text)}/>
        </Container>
    )
}

