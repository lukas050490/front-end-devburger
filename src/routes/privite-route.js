import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import { Header } from '../components/Header'

function PrivateRoute({component,isAdmin, ...rest}){
    const user = localStorage.getItem('codeburger:userData')

    if(!user){
        return <Redirect to='/login' />
    }

    if(isAdmin && !JSON.parce(user).admin){
        return <Redirect to='/' />
    }
    return (
    <>
    {!isAdmin && <Header/>}
    <Route {...rest} component={component} />
    </>
    )
}

export default PrivateRoute

