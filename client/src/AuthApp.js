import React from 'react'
import UserOverview from './components/UserOverview'
import { Routes, Route, useNavigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import baseURL from './api/baseURL'
import { API_URL } from './constants'

function AuthApp({ setCurrentUser, currentUser }) {

    const navigate = useNavigate()

    const handleLogOut = async () => {
        fetch(`${API_URL}/logout`, {
            method: "DELETE"
        })
        .then(() => {
            setCurrentUser(null)
            navigate("/login");
        });
        // try {
        //     await baseURL.delete('/logout')
        //     setCurrentUser(null)
        //     navigate('/login')
        // } catch (err) {
        //     console.log(err)
        // }

    }

    return (
        <div>
            <NavBar handleLogOut={handleLogOut} currentUser={currentUser}  />
            <Routes>
                <Route exact path='/overview' element={<UserOverview />} />
            </Routes>
        </div>
    )
}

export default AuthApp
