const initialState = {
    criticalCounter:0,
    serveCounter:0 
}

const defectsCountersReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'setCriticalCounter':{
            return {...state,criticalCounter:action.payload}
        }
        case 'setServeCounter': {

            return { ...state,serveCounter:action.payload}
        }
        default:{
            return state
        }
    }
}

export default defectsCountersReducer;