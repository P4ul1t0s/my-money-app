import { combineReducers } from 'redux'
import tabReducer from '../commom/tab/tabReducer.js'
import dashboardReducer from '../dashboard/dashboardReducer.js'
import billingCycleReducer from '../billingCycle/billingCycleReducer.js'

const rootReducers = combineReducers({
    dashboard: dashboardReducer,
    tab: tabReducer,
    billingCycle: billingCycleReducer
})

export default rootReducers