import React from 'react'
import { Route, Router, Redirect, hashHistory} from 'react-router'
import BillingCycle from '../billingCycle/BillingCycle.jsx'
import Dashboard2 from '../dashBoard2/Dashboard2.jsx'

export default props => (
    <Router history={hashHistory}>
        <Route path={'/'} component={Dashboard2}/>
        <Route path={'/billingCycles'} component={BillingCycle}/>
        <Redirect from='*' to='/'/>
    </Router>
)