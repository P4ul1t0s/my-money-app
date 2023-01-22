import React from 'react'
import { Route, Router, Redirect, hashHistory} from 'react-router'
import BillingCycle from '../billingCycle/BillingCycle.jsx'
// import Dashboard from '../dashBoard/Dashboard.jsx' // Dasshboard *com* Redux
import Dashboard from '../dashBoard2/Dashboard2.jsx' // Dasshboard *sem* Redux

export default props => (
    <Router history={hashHistory}>
        <Route path={'/'} component={Dashboard}/>
        <Route path={'/billingCycles'} component={BillingCycle}/>
        <Redirect from='*' to='/'/>
    </Router>
)