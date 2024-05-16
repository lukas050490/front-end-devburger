import React from 'react'
import {Route, Redirect} from 'react-router-dom'

function PrivateRoute({component, ...rest}){
    const user = localStorage.getIten('codeburger:userData')

    if(!user){
        return <Redirect to='/login' />
    }
    return <Route {...rest} component={component} />
}

export default PrivateRoute

