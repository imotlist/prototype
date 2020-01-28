import React, { Component,useState } from 'react'
import { urlConnect } from 'app/helper'
import { Spinner, View, Row, Col, Thumbnail, Item, Input, Icon } from 'native-base'
import { Text, FlatList, TouchableOpacity } from 'react-native'
import {getLocal} from 'app/store'
var dataTemp = [];

const setDataDumb = (data) => {
    dataTemp = [];
    data.forEach(element => {
        dataTemp.push(element)
    });
}

const server = getLocal('server');
const uri = server+'server.php/sipas/staf/get_image/foto?id=';

export const PenerimaList = ({params='recent',onItemTap=()=>alert('no action')}) => {
    const [load,setLoad] = useState(false);

    const recent = 'server.php/sipas/staf/penerima_disposisi_custom/recent?'
    const mystaf = 'server.php/sipas/staf/penerima_disposisi_custom/staf?'
    const available  ='server.php/sipas/staf/penerima_disposisi_custom/available?'

    let url = recent;
    if(params == 'staf'){url = mystaf}
    if(params == 'available'){url = available}

    let opt = 'page=1';
    opt += '&start=0';
    opt += '&limit=10';
    if(!load){
        urlConnect({
            method:'get',
            url:url+opt
        }).then(res=>{
            console.log(res.data.data)
            setDataDumb(res.data.data)
            setLoad(true)
        }).catch(err=>{
            console.log(err)
        });    
        return <Spinner color="red"/>
    }else{
        // console.log(dataTemp)
        return renderList(dataTemp,onItemTap)
    }
}

const renderList = (dataArray,onItemTap) =>(
    <>
    <Item regular style={{backgroundColor:"#f3f3f3",margin:5,padding:5,height:50,borderRadius:25}}>
        <Icon name="search"/>
        <Input style={{height:35, fontSize:14}} placeholder="cari pegawai" />
    </Item>
    <View style={{margin:10,padding:5}}>        
        <FlatList
        data={dataArray}
        extraData={dataArray}
        keyExtractor={item=>item.staf_id}
        renderItem={({item}) => 
        <TouchableOpacity onPress={()=>onItemTap(item)}>
            <Row style={{width:"100%",marginTop:10}}>
                <Col style={{width:40,alignSelf:"center",alignItems:"center"}}>
                    {/* <Thumbnail small source={require('app/asset/icon/person.png')} /> */}
                    <Thumbnail small source={{uri:uri+item.staf_id}}/>
                </Col>
                <Col style={{padding:5}}>
                    <Text style={{fontSize:11}}>{item.staf_nama} - {item.unit_nama}</Text>
                    <Text style={{fontSize:10}}>{item.jabatan_nama}</Text>
                </Col>
            </Row>
        </TouchableOpacity>
        }
    />
    </View>
    </>
)