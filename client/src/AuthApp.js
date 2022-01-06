import React from 'react'
import UserOverview from './components/UserOverview'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import baseURL from './api/baseURL'
import AddProperty from './components/AddProperty'
import RequestForm from './components/RequestForm'
import EditProperty from './components/EditProperty'
import JobsContainer from './components/JobsContainer'
import Carousel from './modals/Carousel'

function AuthApp({ setCurrentUser, currentUser }) {


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
                <Route exact path='/properties/:id/add-job' element={<RequestForm />} />
                <Route exact path='/properties/:id/edit-property' element={<EditProperty />} />
                <Route exact path='/jobs' element={<JobsContainer />} />
            </Routes>
        </div>
    )
}

export default AuthApp
