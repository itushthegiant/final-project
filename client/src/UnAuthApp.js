import React from 'react'
import Login from './components/Login'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'



function UnAuthApp({ setCurrentUser, currentUser }) {

    return (
        <div>
            <NavBar currentUser={currentUser} />
                <Routes>
                    <Route exact path='/login' element={<Login setCurrentUser={setCurrentUser} />} />
                    <Route path='*' element={<Login setCurrentUser={setCurrentUser} />} />
                </Routes>
        </div>
    )
}

export default UnAuthApp
