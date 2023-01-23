import { combineReducers } from 'redux'
import { reducer as formReducer} from 'redux-form'
import tabReducer from '../common/tab/tabReducer.js'
import dashboardReducer from '../dashboard/dashboardReducer.js'
import billingCycleReducer from '../billingCycle/billingCycleReducer.js'

const rootReducers = combineReducers({
    dashboard: dashboardReducer,
    tab: tabReducer,
    billingCycle: billingCycleReducer,
    form: formReducer
})

export default rootReducers