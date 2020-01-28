const initialState = [];

const stafadd = (state = initialState, action) => {
    switch(action.type){
        case 'ADDSTAFADD':
            if(state.length == 0){
                return [
                    ...state,action.value
                ]
            }else{
                let pushData = state;
                let count = 0;
                pushData.map(data =>{
                    if(data.staf_id == action.value.staf_id){
                        count = 1
                    }                                      
                });
                if(count == 1){
                    return pushData;
                }else{
                    pushData.push(action.value)
                    return pushData;
                }
                
            }
        case 'CLEARSTAFADD':
            return state = []
    }
    return state
}

export default stafadd;
