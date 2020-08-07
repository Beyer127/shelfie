import React from 'react'
import {Switch, Route} from 'react-router-dom'
import App from './components/Dashboard'
import ProductFiles from './components/ProductFiles'
import Dashboard from './components/Dashboard/Dashboard'

export default (
    <Switch>
        <Route exact path = '/' component={Dashboard}/>
        <Route />
        <Route/>
    </Switch>
)