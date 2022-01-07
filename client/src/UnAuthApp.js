import React from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Eror404 from './components/Error404'



function UnAuthApp({ setCurrentUser, currentUser }) {

    return (
        <div>
            <NavBar />
            <Routes>
                <Route exact path='/login' element={<Login setCurrentUser={setCurrentUser}/>} />
                <Route exact path='/signup' element={<Signup setCurrentUser={setCurrentUser}/>} />
                <Route path='*' element={<Eror404 currentUser={currentUser} />} />
            </Routes>
        </div>
    )
}

export default UnAuthApp
