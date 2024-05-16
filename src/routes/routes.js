import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Login from '../containers/Login'
import Register from '../containers/register'
import Home from '../containers/Home'
import PrivateRoute from './privite-route'
function Routes() {
    return (
      <Router>
        <Switch>
            <Route component={Login} path="/login" />
            <Route component={Register} path="/cadastro" />
            <PrivateRoute exact component={Home} path="/" />
            
        </Switch>
     </Router> 
    )
}

export default Routes