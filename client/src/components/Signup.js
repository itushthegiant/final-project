import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import baseURL from '../api/baseURL'

function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
             await baseURL.post('/signup',
                {
                    username,
                    password,
                    password_confirmation: passwordConfirmation,
                    email,
                    company_name: companyName,
                    is_admin: isAdmin
                },
                { withCredentials: true },
            )
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
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Create A new user.
                        </h2>
                    </div>
                    
                    {/*///// render error if error is true /////*/}
                    {error && <div className='mb-1 text-red-600' >* {error}</div>}

                    <input
                        name='username'
                        type="text"
                        value={username}
                        className="h-12 rounded w-full border px-3 focus:text-black focus:border-blue-100 hover:shadow-xl ease-in-out duration-300"
                        placeholder="Username"
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input
                        name='email'
                        type="email"
                        value={email}
                        className="h-12 mt-3 rounded w-full border px-3 focus:text-black focus:border-blue-100 hover:shadow-xl ease-in-out duration-300"
                        placeholder="example@gmail.com"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <div className='mt-1 text-sm text-gray-500'>Optional</div>
                    <input
                        name='companyName'
                        type="text"
                        value={companyName}
                        className="h-12 rounded w-full border px-3 focus:text-black focus:border-blue-100 hover:shadow-xl ease-in-out duration-300"
                        placeholder="Company"
                        onChange={e => setCompanyName(e.target.value)}
                    />
                    <input
                        name='password'
                        type="password"
                        value={password}
                        className="h-12 mt-3 rounded w-full border px-3 focus:text-black focus:border-blue-100 hover:shadow-xl ease-in-out duration-300"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input
                        name='passwordConfirmation'
                        type="password"
                        value={passwordConfirmation}
                        className="h-12 mt-3 rounded w-full border px-3 focus:text-black focus:border-blue-100 hover:shadow-xl ease-in-out duration-300"
                        placeholder="Confirm password"
                        onChange={e => setPasswordConfirmation(e.target.value)}
                    />
                    <input
                        name='isAdmin'
                        type="checkbox"
                        value={isAdmin}
                        className="w-4 h-4 mt-3 border px-3 focus:text-black focus:border-blue-100 hover:shadow-xl ease-in-out duration-300"
                        placeholder="Confirm password"
                        onChange={() => setIsAdmin(!isAdmin)}
                    />
                    <span className='ml-3'>Is admin?</span>
                    <button type='submit' className="ease-in-out duration-300 uppercase h-12 mt-3 text-white w-full rounded bg-blue-700 hover:bg-yellow-300 hover:shadow-inner">login</button>
                </div>
            </div>
        </form>
    </div>
    )
}

export default Signup
