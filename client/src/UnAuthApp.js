import React from 'react'
import Login from './components/Login'

function UnAuthApp({ setCurrentUser }) {
    return (
        <div>
            <Login setCurrentUser={setCurrentUser}/>
        </div>
    )
}

export default UnAuthApp
