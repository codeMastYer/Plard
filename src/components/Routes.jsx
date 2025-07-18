import React from 'react'
import {useRoutes} from 'react-router-dom'
import {privatePages, publicPages} from './pages'
import {useSelector} from "react-redux";

function Routes() {

    const {user} = useSelector(state => state.userReducer)
    const router = user ? privatePages : publicPages
    console.log(user, "router")
    return (
        <div>{useRoutes(router)}</div>
    )
}

export default Routes