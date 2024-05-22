import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Login from '../containers/Login'
import Register from '../containers/register'
import Home from '../containers/Home'
import Products from '../containers/Products'
import PrivateRoute from './privite-route'
function Routes() {
    return (
      <Router>
        <Switch>
            <Route component={Login} path="/login" />
            <Route component={Register} path="/cadastro" />
            <PrivateRoute exact component={Home} path="/" />
            <PrivateRoute exact component={Products} path="/products" />
        </Switch>
     </Router> 
    )
}

export default Routes