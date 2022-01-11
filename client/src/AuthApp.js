import React from 'react'
import UserOverview from './components/UserOverview'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import baseURL from './api/baseURL'
import AddProperty from './components/AddProperty'
import RequestForm from './components/RequestForm'
import EditProperty from './components/EditProperty'
import JobsContainer from './components/JobsContainer'
import Signup from './components/Signup'


function AuthApp({ setCurrentUser, currentUser }) {


    const handleLogOut = async () => {
        try {
            const response = await baseURL.delete('/logout', { withCredentials: true })
            if (response.statusText === 'No Content') {
                setCurrentUser(null)
            } else {
            }
        } catch (err) {
            console.log(err)
        }
    }




    return (
        <div>
            <NavBar handleLogOut={handleLogOut} currentUser={currentUser} />
                <Routes>
                    {currentUser.is_admin === true && <Route exact path='/signup' element={<Signup />} />}
                    <Route exact path='/add-property' element={<AddProperty />} />
                    <Route exact path='/' element={<UserOverview />} />
                    <Route exact path='/properties/:id/add-job' element={<RequestForm />} />
                    <Route exact path='/properties/:id/edit-property' element={<EditProperty />} />
                    <Route exact path='/jobs' element={<JobsContainer currentUser={currentUser} />} />
                    <Route path='*' element={<UserOverview />} />
                </Routes>
        </div>
    )
}

export default AuthApp
