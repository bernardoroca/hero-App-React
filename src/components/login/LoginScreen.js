import React, { useContext } from 'react'
import { authContext } from '../../auth/authContext'
import { types } from '../../types/types'

export const LoginScreen = ({ history }) => {

    const {dispatch} = useContext(authContext)  

    const handleLogin = () => {

        const lastPath = localStorage.getItem("lastPath") || "/"
        dispatch({
            type:types.login,
            payload:{
                name:"Bernardo"
            }
        })
        history.replace(lastPath)
    }

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
