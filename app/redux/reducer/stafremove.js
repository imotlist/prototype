const initialState = [];

const stafremove = (state = initialState, action) => {
    switch(action.type){
        case 'ADDSTAFREMOVE':
                return [
                    ...state,action.value
                ]
        // case 'REMOVE':
        //     return {counter:state.counter-1}
        case 'CLEARSTAFREMOVE':
            return state = []
    }
    return state
}

export default stafremove;
