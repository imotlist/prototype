import axios from 'axios';
// import { getLocal } from 'app/store/index'
import {Token} from 'app/utils/Token'
export const AppConnect = ({method='post',direct=false,url='/',dataBody = null,params={}}) => {
    // const server = getLocal('server');
    // const token  = getLocal('token');
    
    if(Token){ axios.defaults.headers.common = {'Authorization': `Bearer ${Token}`}; }

    if(!direct){
        if(method === 'post'){
            return axios({
                method: 'POST',
                url: server+url,
                data: JSON.stringify(dataBody)
            })
        }else{
            return axios.get(server+url,{params:params})
        }
    }else{
        if(method === 'post'){
            return axios({
                method: 'POST',
                url: url,
                data: JSON.stringify(dataBody)
            })
        }else{
            
            return axios({
                method: 'get',
                url: url,
              })
        }
    }
}
