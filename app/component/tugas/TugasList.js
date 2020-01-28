import React, { Component } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Row, Col, Text } from 'native-base'
import { TouchableOpacity } from 'react-native'

export const TugasList = ({data=[]}) => {
    return(
        <FlatList
            data={data}
            extraData={data}
            keyExtractor={item=>item.disposisi_masuk_id}
            renderItem={({item}) => 
                <TouchableOpacity
                    // onPress={() => Actions.disposisi({record:item,model:"disposisiMasuk"})}
                    style={{margin:5,paddingBottom:5, borderBottomColor:"black", borderBottomWidth:1 }}>
                    <Row>
                        <Text>Data</Text>
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
    )
}