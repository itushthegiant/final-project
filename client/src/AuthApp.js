import React from 'react'
import UserOverview from './components/UserOverview'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import baseURL from './api/baseURL'
import AddProperty from './components/AddProperty'

function AuthApp({ setCurrentUser, currentUser }) {

    // const navigate = useNavigate()

    const handleLogOut = async () => {
        try {
            await baseURL.delete('/logout',
            { withCredentials: true }
            )
            setCurrentUser(null)
        } catch (err) {
            console.log(err)
        }
    }

    

    return (
        <div>
            <NavBar handleLogOut={handleLogOut} currentUser={currentUser}  />
            <Routes>
                <Route exact path='/add-property' element={<AddProperty />} />
                <Route exact path='/overview' element={<UserOverview currentUser={currentUser} />} />
            </Routes>
        </div>
    )
}

export default AuthApp
