import {combineReducers} from 'redux'
import defectsReducer from './defectsReducer'
import defectsCountersReducer from './defectsCountersReducer'

const rootReducer = combineReducers({defectsReducer,counters:defectsCountersReducer})

export default rootReducer;