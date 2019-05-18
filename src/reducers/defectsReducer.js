const defectsReducer = (state=null,action) =>{
    switch(action.type){
        case 'setDefects':{
            return action.payload.map(obj => obj)
        }
        default:{
            return state
        }
    }
}

export default defectsReducer;