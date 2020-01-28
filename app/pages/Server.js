import React, { Component } from 'react'
import {SaveStore,LoadStore} from 'app/storage/LocalStorage'
import {AppConnect} from 'app/utils'
import {ServerSetting} from 'app/component'

const Server = () => {
        return(
        <ServerSetting dosave={()=>doSave()} docheck={(url)=>checkServer(url)}/>
    )
}

const doSaveServer = () => {
    SaveStore({
        key : 'server',
        data : 'https://sipas.id',
        expired : null
    });
    alert('save Server');
}

const doSave = () => {
    LoadStore.load('server')
    .then(res=>{
        checkServer(res);
    })
    .catch(err=>{
        alert('Alamat server bermasalah!');
    })
}

const checkServer = (url) => {
    AppConnect({
        url : url,
        method :'get',
        direct : true
    }).then(res=>{
        alert('Berhasil terhubung dengan server')
        doSaveServer();
    }).catch(err=>{
        alert('Tidak dapat terhubung dengan server!')
    })
}

export default Server;