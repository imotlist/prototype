import React, { Component, useState } from 'react'
import {FlatList,Text,TouchableOpacity,Image} from 'react-native'
import { Content, Row, Icon, Col, Spinner,View, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {Loader} from 'app/component/index'
import {getRealm,setRealm} from 'app/store/index'
import { urlConnect } from 'app/helper/index'

const readKoreksiApi = 'server.php/sipas/draft/read'

export const KoreksiList = () => {
    const [load,setLoad] = useState(false);
    console.log('load');

    let response = getRealm('koreksi'),
        count = response.length;

    if(count > 0 || load){
        console.log('render');
        return renderList(response);
    }else{
        console.log('req');
        urlConnect({
            url:readKoreksiApi
        }).then(res=>{
            doSaveRealm(res) 
            setLoad(true)
            console.log('get res')
        }).catch(err=>{
            console.log(err)
        })        
        return beforeLoad();
    }
    
}

const renderList = (data) => {    
    var dataArray = data.slice(0,10);
    return(
        <Content>
            {dataArray.length > 0 &&
            <FlatList
            data={dataArray}
            extraData={dataArray}
            keyExtractor={item=>item.disposisi_masuk_id}
            renderItem={({item}) => 
                <TouchableOpacity
                    onPress={() => Actions.disposisi({record:item, model:"koreksi"})}
                    style={{margin:5,paddingBottom:5, borderBottomColor:"black", borderBottomWidth:1 }}>
                    <Row >
                        <Col style={{width:50}}>
                            <Thumbnail small source={require('app/asset/icon/mail-draft.png')} />
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
        }
        {dataArray.length == 0 &&
            <View style={{alignContent:"center",alignItems:"center",paddingTop:"20%"}}>
                <Image style={{width:190,height:200}} source={require('app/asset/icon/no-data2.png')} />
                <Text>No Data Available</Text>
            </View>
        }
        </Content>
    )
}

const beforeLoad = () => (
    <Loader text="Please wait ..."/>
)

const doSaveRealm = ({data}) => {
    let dataArray = data.data;
    try{
        setRealm('koreksi',dataArray);
    }catch(e){
        console.log(e)
    }    
}