import React from 'react'
import UserOverview from './components/UserOverview'
import { Routes, Route } from 'react-router-dom'

function AuthApp() {
    return (
        <div>
            <Routes>
                <Route exact path='/overview' element={<UserOverview />} />
            </Routes>
            
        </div>
    )
}

export default AuthApp
