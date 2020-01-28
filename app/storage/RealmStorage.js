import allSchema from './model/index';
const Realm = require('realm');
const schemaList = allSchema();

const schemaMigration = () =>{
    
}

export const newRealm = () => {
    return new Realm({schema : schemaList});    
}

const readById = (schemaName,id) => {

}

export const readByVal = (schemaName,field,value) => {
    return newRealm().objects(schemaName).filtered(`${field} LIKE "*${value}*"`);
    
}

export const writeData = (schemaName,data) => {
    let realm = newRealm();
    if(Array.isArray(data)){
        data.forEach(element => {
            try{
                realm.write(()=>{
                    realm.create(schemaName, element)
                })
            }catch(e){
                console.log(element);
            }
        });
    }else{
        realm.write(()=>{
            realm.create(schemaName, data)
        })
    }
}

const updateById = (schemaName,id,val) => {

}

const updateByVal = (schemaName,field,val) => {

}

export const clearTable = (schemaName) => {
    let realm = newRealm();
    let objRealm = realm.objects(schemaName);
    realm.write(() => {
        realm.delete(objRealm)
    })
}