import React from 'react'
import { Route, Router, Redirect, hashHistory} from 'react-router'
import BillingCycle from '../billingCycle/BillingCycle.jsx'
import Dashboard from '../dashBoard/Dashboard.jsx'

export default props => (
    <Router history={hashHistory}>
        <Route path={'/'} component={Dashboard}/>
        <Route path={'/billingCycles'} component={BillingCycle}/>
        <Redirect from='*' to='/'/>
    </Router>
)