import React from 'react'
import Login from './components/Login'
import { Routes, Route } from 'react-router-dom'

function UnAuthApp({ setCurrentUser }) {
    return (
        <div>
            <Routes>
                <Route exact path='/login' element={<Login setCurrentUser={setCurrentUser}/>} />
            </Routes>
        </div>
    )
}

export default UnAuthApp
