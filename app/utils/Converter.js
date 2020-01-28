const recordType = () => {

    var list = [
                    {name:"surat_perihal",type:"string"},
                    {name:"surat_nomor",type:"string"},
                    {name:"surat_isselesai",type:"boolean"},
                    {name:"jumlah_penyetuju",type:"number"},
                    {name:"surat_tgl",type:"date"}
                ]
    return list;
}
const dataTransmutant = (val,type) =>{
    // if(!val) return val;
    if(type == 'int'){ 
        if(!val){
            return 0;
        }else{
            return parseInt(val);                
        }
    }else if(type == 'boolean'){
        if(val == "" || !val || val == "0"){
            return false;
        }else{
            return true;
        }
    }else if(type == "date"){
        if(!val){
            return new Date();
        }else{
            return new Date(val);
        }
    }else{
        return val;
    }
}

export const Converter = (dataServer,fieldCompare) => {
    // dataServer = [{},{}]
    if(Array.isArray(dataServer)){
        // console.log('array');
        dataServer.forEach((element,index) => {
            // console.log('el : ',element);
            Object.keys(element).map(function(key) {
                // console.log(element[key]);
                fieldCompare.forEach(el => {
                    if(el.name == key){
                        element[key] = dataTransmutant(element[key],el.type);
                        // console.log('element :',element[key]);
                    }
                });       
            });
            dataServer[index] = element;
            // console.log(element);
        });
    }else{
        // console.log('single');
        Object.keys(dataServer).map(function(key) {
            fieldCompare.forEach(el => {
                if(el.name == dataServer[key]){
                    dataServer[key] = dataTransmutant(data[key],el.type);
                }
            });           
        });
    }
    // console.log(dataServer);
    return dataServer;
}



const toInt = (strVal) => {

}