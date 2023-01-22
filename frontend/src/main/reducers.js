import { combineReducers } from 'redux'
import tabReducer from '../commom/tab/tabReducer.js'
import dashboardReducer from '../dashboard/dashboardReducer.js'

const rootReducers = combineReducers({
    dashboard: dashboardReducer,
    tab: tabReducer
})

export default rootReducers