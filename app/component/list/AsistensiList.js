import React, { Component,useState } from 'react'
import { View, Row, Col, Thumbnail, Spinner, Button, Icon } from 'native-base'
import { FlatList, Text, TouchableOpacity } from 'react-native'
import { getLocal } from 'app/store'
import { urlConnect } from 'app/helper'

const asistensiApi = 'server.php/sipas/staf_wakil/read?'
const getProf = getLocal('profile');
const profile = (getProf)? getProf.profile : {};

var dataTemp = [];
var dataRemove = [];
var dataAdd = [];

const setDataDumb = (data) =>{
    dataTemp = [];
    data.forEach(element => {
        dataTemp.push(element)
    });
}

const addDataDumb = (data) =>{
    data.forEach(element => {
        dataTemp.push(element)
    });
}

const removeData = (data) => {
    dataRemove.push(data);
}

const noAction = () =>{
    console.log('No Action Defined');
}

export const AsistensiList = ({onItemTap = ()=>noAction(), dataList=[]}) => {
    const [load,setLoad] = useState(false);
    addDataDumb(dataList)
    const filter = `[{"property":"staf_wakil_staf","value":"${profile.staf_id}"}]`;
    // const filter = `[{"property":"staf_wakil_staf","value":"1"}]`;
    const sort  = `[{"property":"staf_wakil_asisten","direction":"ASC"}]`;

    let opt = 'page=1';
    opt += '&start=0';
    opt += '&limit=0';
    opt += '&sort='+encodeURIComponent(sort);    
    opt += '&filter='+encodeURIComponent(filter);    
    if(!load){
        urlConnect({
            method: 'get',
            url:asistensiApi+opt
        }).then(res=>{
            console.log(res);
            setDataDumb(res.data.data);
            setLoad(true);        
        }).catch(err=>{
            console.log(err)
        })    
        return (<Spinner color="red"/>)
    }else{
        return renderList(dataTemp,onItemTap)
    }
    
}

const renderList = (dataArray,onItemTap) => (
    <>
    <View style={{margin:10,padding:5,height:500}}>     
        {dataArray == 0 && <Text>Tidak ada data</Text>}
        <FlatList
            data={dataArray}
            extraData={dataArray}
            keyExtractor={item=>item.akun_id}
            renderItem={({item}) =>
            <TouchableOpacity onPress={(item)=>onItemTap(item)}>
                <Row style={{width:"100%",marginTop:10}}>
                    <Col style={{width:40,alignSelf:"center",alignItems:"center"}}>
                        <Thumbnail small source={require('app/asset/icon/person.png')} />
                        {/* <Thumbnail small source={{uri:uri+item.staf_id}}/> */}
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
    {/* <Button success rounded style={{width:40,height:40,margin:10,padding:0,position:"absolute",bottom:0,right:0}}>
        <Icon style={{fontSize:20,margin:0,padding:0}} name="save"/>
    </Button> */}
    <TouchableOpacity onPress={()=>alert('Btn Press')} style={{width:50,height:50,margin:10,padding:0,position:"absolute",borderRadius:25,bottom:0,right:0,backgroundColor:"green"}}>
        <Icon style={{fontSize:30,color:"#FFF",margin:10,textAlign:"center",textAlignVertical:"center"}} name="save"/>
    </TouchableOpacity>
    </>
)