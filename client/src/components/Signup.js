import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import baseURL from '../api/baseURL'

function Signup({ setCurrentUser }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await baseURL.post('/signup',
                {
                    username,
                    password
                },
                { withCredentials: true },
            )
            setCurrentUser(response.data)
            navigate('/overview')
        } catch (err) {
            console.log(err)
        }
    }


    return (
         <div className='w-screen h-screen flex justify-center items-center'>
            <div className='border border-purple-600 w-80 h-80 flex items-center justify-center'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-10'>
                        <label className='mx-5'>Username</label>
                        <input type='text' value={username} name='username' placeholder='Enter username..' onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                    <div className="mb-10">
                        <label className='mx-5'>Password</label>
                        <input type='password' value={password} name='password' placeholder='Enter password..' onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div className='flex justify-center'>
                        <button type='submit'>Signup</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup