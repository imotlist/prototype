import React, { Component, useReducer } from 'react'

import {Row, Icon, Col,} from 'react-native'
import { Container, View, Button, Content,FlatList,Text,TouchableOpacity} from 'native-base'
import {AppMenutab,AppHeader} from 'app/component'

import {MainContainer, TugasList,TerkirimList} from 'app/component'
import {AppConnect,Converter} from 'app/utils'
import {writeData,readByVal,clearTable} from 'app/storage/RealmStorage'
import {DisposisiMasukField} from 'app/storage/modelExtract/disposisi/Masuk'
const initialState = {tabs: 'masuk',status:false,data:null};
const reducer = (state, action) => {
    console.log('reducer', action);
    switch (action.type) {
        case 'tugas'    : return {tabs:action.type,status:action.status,data:action.data};
        case 'masuk'    : return {tabs:action.type,status:action.status,data:action.data};
        case 'terkirim' : return {tabs:action.type,status:action.status,data:action.data};
        case 'draft'    : return {tabs:action.type,status:action.status,data:action.data};
        case 'asistensi': return {tabs:action.type,status:action.status,data:action.data};
        case 'reload'   : return {tabs:action.type,status:!state.status,data:state.data};
        default         : throw new Error();
    }
}

const Home = () => {      
    const [state, dispatch] = useReducer(reducer, initialState);    
    const handleDispatch = (data) => {
        dispatch({type:data.type,status:data.status,data:data.data});
    }
    
    // return(<MainContainer doTabs={(data)=>handleDispatch(data)} tabs={state.tabs} />)
    switch (state.tabs) {
        case 'tugas':
            return Tugas({callProp:(data)=>handleDispatch(data),status:state.status,data:state.data});
        case 'masuk':
            return Masuk({callProp:(data)=>handleDispatch(data),status:state.status,data:state.data});
        case 'terkirim':
            return Tugas({callProp:(data)=>handleDispatch(data),status:state.status,data:state.data});
        case 'draft':
            return Tugas({callProp:(data)=>handleDispatch(data),status:state.status,data:state.data});
        case 'asistensi':
            return Tugas({callProp:(data)=>handleDispatch(data),status:state.status,data:state.data});
        default:
            // throw new Error();
            return Tugas({callProp:(data)=>handleDispatch(data),status:state.status,data:state.data});
    }
}

const handleUpdate= () => {
    console.log('request update');
    let realmdata = readByVal('disposisimasuk','disposisi_masuk_id','b83211270279414d849e3789773d71e0');
    let dataUpdate = JSON.parse(JSON.stringify(realmdata))[0];
    console.log(dataUpdate);
    AppConnect({
        url : 'https://lab.sipas.id/playground/adi/Workspace/web-5.30/server.php/sipas/disposisi_masuk/update',
        dataBody : dataUpdate,
        method: 'post',
        direct : true
    }).then((res)=>{            
        console.log('update success', res.data);
    }).catch(err => {            
        console.log('Update Error ',err);      
    })

}

const RenderContainer = ({call,title,data}) => {
    let showTitle = title.toUpperCase() ;
    return(
        <Container>
            <AppHeader title={showTitle} />
                <Content>      
                { data &&  title=='Tugas'&&
                    <TugasList data={data} />
                }
                { title == 'Masuk' &&
                    <TerkirimList onUpdate={()=>handleUpdate()}/>
                }
                </Content>                
            <AppMenutab onChange={(text)=>call(text)}/>
        </Container>
    )
}

const Tugas = ({callProp,status,data}) => {  
    
    if(!status && !data){
        AppConnect({
            url : 'https://teo.pttimah.co.id/dev/server.php/sipas/perintah',
            method: 'get',
            direct : true
        }).then((res)=>{            
            console.log(res.data);             
            callProp({type:'tugas',status:true,data:res.data.data});
        }).catch(err => {            
            console.log('load tugas false',err);        
            callProp({type:'tugas',status:true,data:null});
        })
        return <RenderContainer call={callProp} title="Tugas" data={null}/>
    }else{
        return <RenderContainer call={callProp} title="Tugas" data={data}/>
    }
      
}

const Masuk = ({callProp, status, data}) => {    
    let realmdata = readByVal('disposisimasuk','disposisi_masuk_id','b83211270279414d849e3789773d71e0')
    console.log(JSON.parse(JSON.stringify(realmdata)));
    if(!status && !data){
        AppConnect({
            url : 'https://lab.sipas.id/playground/adi/Workspace/web-5.30/server.php/sipas/kotak_masuk/surat_all',
            method: 'get',
            direct : true
        }).then(res=>{            
            clearTable('disposisimasuk');
            // console.log('server :',res.data.data);
            let dataResult = Converter(res.data.data,DisposisiMasukField);
            // console.log(JSON.parse(res.data));  
            console.log('dataRes :',dataResult);
            writeData('disposisimasuk',dataResult);
            callProp({type:'masuk',status:true,data:"List Data"});
        }).catch(err => {            
            console.log('load tugas false',err);        
            callProp({type:'masuk',status:true,data:"error"});
        })
        return <RenderContainer call={callProp} title="Masuk" data="Masuk Default"/>
    }else{
        return <RenderContainer call={callProp} title="Masuk" data={data}/>
    }    
    
}

const Terkirim = () => {
    console.log('test');
}

const Draft = () => {

}

const Asistensi = () => {

}

export default Home