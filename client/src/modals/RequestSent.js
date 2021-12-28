import React from 'react'
import { Link } from 'react-router-dom'

function RequestSent() {
    return (
        <div className='w-screen h-screen fixed flex justify-center items-center bg-gray-400'>
            <div className='w-64 h-64 rounded-3xl bg-white shadow-lg shadow-black flex flex-col p-10'>
                <h1>Request sent!</h1>
                <Link to='/overview'>
                    <button>Continue</button>
                </Link>
            </div>
        </div>
    )
}

export default RequestSent
