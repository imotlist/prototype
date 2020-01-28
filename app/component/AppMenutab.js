import React, { Component, useState } from 'react'
import { FooterTab, Footer, Button, Icon,Text,Badge} from 'native-base'


export const AppMenutab = ({onChange}) => {
    const [aktif,setAktif] = useState('tugas');
    var isActive = true;
    const handleTap = (param) =>{
        setAktif(param);
        onChange({type:param})
    }
    return(
        <Footer>
            <FooterTab style={{backgroundColor:"#f3f3f3"}}>
                { aktif == 'tugas' &&
                    <Button active={true} transparent badge vertical>
                        <Badge><Text>2</Text></Badge>
                        <Icon style={{color:"#4e4e4e"}} name="list" />
                    </Button>
                }
                { aktif != 'tugas' &&
                    <Button onPress={()=>handleTap('tugas')} badge vertical>
                        <Badge><Text>2</Text></Badge>
                        <Icon name="list" />
                    </Button>
                }
                { aktif == 'masuk' &&
                    <Button active={true} transparent>
                        <Icon style={{color:"#4e4e4e"}} name="mail" />
                    </Button>
                }
                { aktif != 'masuk' &&
                    <Button onPress={()=>handleTap('masuk')}>
                        <Icon name="mail" />
                    </Button>
                }
                { aktif == 'terkirim' &&
                    <Button active={true} transparent>
                        <Icon style={{color:"#4e4e4e"}} name="send" />
                    </Button>
                }
                { aktif != 'terkirim' &&
                    <Button onPress={()=>handleTap('terkirim')}>
                        <Icon name="send" />
                    </Button>
                }
                { aktif == 'draft' &&
                    <Button active={true} transparent>
                        <Icon style={{color:"#4e4e4e"}} name="document" />
                    </Button>
                }
                { aktif != 'draft' &&
                    <Button onPress={()=>handleTap('draft')}>
                        <Icon name="document" />
                    </Button>
                }
                { aktif == 'asisten' &&   
                    <Button active={true} transparent>
                        <Icon style={{color:"#4e4e4e"}} name="desktop" />
                    </Button>
                }
                { aktif != 'asisten' &&   
                    <Button onPress={()=>handleTap('asisten')}>
                        <Icon name="desktop" />
                    </Button>
                }
            </FooterTab>
        </Footer>
    )
}