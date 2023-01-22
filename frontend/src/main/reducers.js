import { combineReducers } from 'redux'
import dashboardReducer from '../dashboard/dashboardReducer.js'

const rootReducers = combineReducers({
    dashboard: dashboardReducer
})

export default rootReducers