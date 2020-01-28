const initialState ={
    counter:1
}
const count = (state = initialState, action) => {
    switch(action.type){
        case 'INCREASE':
            return {counter:state.counter+1}
        case 'DECREASE':
            return {counter:state.counter-1}
    }
    return state
}

export default count;