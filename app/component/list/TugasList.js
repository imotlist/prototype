import React, { Component, useState } from 'react'
import {FlatList,Text,TouchableOpacity} from 'react-native'
import { Content, Row, Icon, Col, Spinner,View, Thumbnail, Image } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {getRealm,setRealm} from 'app/store/index'
import { urlConnect } from 'app/module/Connect'

const readTugas = 'server.php/sipas/kotak_masuk/tugassaya'

export const TugasList = () => {
    const [load,setLoad] = useState(false);

    const sort = `[{"property":"disposisi_tgl","direction":"DESC"},{"property":"disposisi_masuk_isbaca","direction":"ASC"}]`;

    let opt = '?page=1';
    opt += '&start=0';
    opt += '&limit=10';
    opt += '&sort='+encodeURIComponent(sort);    

    let response = getRealm('disposisiMasuk'),
        count = response.length;

    if(count > 0 || load){
        console.log('render');
        return renderList(response);
    }else{
        console.log('req');
        urlConnect({
            url:readTugas+opt
        }).then(res=>{            
            console.log('get res')
        }).catch(err=>{
            console.log(err)
        })        
        return beforeLoad();
    }
    
}

const renderList = (data) => {    
    // var dataArray = data.slice(0,10);
    var dataArray = data;
    return(
        <Content>
            <FlatList
            data={dataArray}
            extraData={dataArray}
            keyExtractor={item=>item.disposisi_masuk_id}
            renderItem={({item}) => 
                <TouchableOpacity
                    onPress={() => Actions.disposisi({record:item,model:"disposisiMasuk"})}
                    style={{margin:5,paddingBottom:5, borderBottomColor:"black", borderBottomWidth:1 }}>
                    <Row >
                        <Col style={{width:50}}>
                            {(item.surat_model == 1) &&<Thumbnail small source={require('app/asset/icon/mail-in.png')} />}
                            {(item.surat_model == 2) &&<Thumbnail small source={require('app/asset/icon/mail-info.png')} />}
                            {(item.surat_model == 3) &&<Thumbnail small source={require('app/asset/icon/mail.png')} />}
                            {(item.surat_model == 4) &&<Thumbnail small source={require('app/asset/icon/mail-success.png')} />}
                            {(item.disposisi_mode=='Draft') &&
                                <Thumbnail small source={require('app/asset/icon/mail-draft.png')} />
                            }
                        </Col>
                        <Col>
                            <Text style={{fontSize:14}}>{item.disposisi_pengirim_unit_nama}</Text>
                            <Text style={{fontSize:10}}>{item.surat_perihal}</Text>
                        </Col>
                        <Col style={{width:50}}>
                            {(item.surat_model == 3 || item.surat_model ==4)&&
                                <Text style={{fontSize:11}}>Internal</Text>
                            }
                            {(item.surat_model == 1 || item.surat_model ==2)&&
                                <Text style={{fontSize:11}}>Eksternal</Text>
                            }
                        </Col>
                    </Row>
                </TouchableOpacity>
            }
            // onEndReachedThreshold={0,1}
            // onEndReached={()=>handleLoadMore()}
            
        />
        </Content>
    )
}

const beforeLoad = () => (
    <Text>Loading</Text>
)

const doSaveRealm = ({data}) => {
    // let dataArray = data.data;
    // try{
    //     setRealm('disposisiMasuk',dataArray);
    // }catch(e){
    //     console.log(e)
    // }    
}