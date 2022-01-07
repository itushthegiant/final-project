import React, { useState } from 'react'
import baseURL from '../api/baseURL'
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'

function Login({ setCurrentUser }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await baseURL.post('/login',
                {
                    username,
                    password
                },
                { withCredentials: true },
            )
            setCurrentUser(response.data)
            navigate('/')
        } catch (err) {
            setError(err.response.data.error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="h-screen flex justify-center items-center">
                    <div className="bg-white bg-opacity-80 shadow-xl p-8 rounded-lg max-w-6xl pb-10">
                        <div className="justify-center mb-4">
                            <img src={logo} className="mx-auto h-20 w-auto" alt='logo' />
                            <h2 className="animate-pulse mt-6 text-center text-3xl font-extrabold text-gray-900">
                                Welcome, Please login.
                            </h2>
                        </div>
                        {error ? <div className='mb-1 text-red-600' >* {error}</div> : null}
                        <input
                            // required
                            name='username'
                            type="text"
                            value={username}
                            className="h-12 rounded w-full border px-3 focus:text-black focus:border-blue-100 hover:shadow-xl ease-in-out duration-300"
                            placeholder="Username"
                            onChange={e => setUsername(e.target.value)}
                        />
                        <input
                            // required
                            name='password'
                            type="password"
                            value={password}
                            className="h-12 mt-3 rounded w-full border px-3 focus:text-black focus:border-blue-100 hover:shadow-xl ease-in-out duration-300"
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        {/* <div className="flex justify-end items-center mt-2">
                        <a href="#" className="text-gray-400 hover:text-gray-600">Forgot password?</a>
                    </div> */}
                        <button type='submit' className="ease-in-out duration-300 uppercase h-12 mt-3 text-white w-full rounded bg-blue-700 hover:bg-yellow-300 hover:shadow-inner">login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
