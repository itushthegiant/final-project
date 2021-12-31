import React from 'react'
import { Link } from 'react-router-dom'
import FileUploader from '../components/FileUploader'

function RequestSent({ newJobId }) {
    return (
        <div className='w-screen h-screen fixed flex justify-center items-center bg-gray-400'>
            <div className='w-64 h-64 rounded-3xl bg-white shadow-lg shadow-black flex flex-col p-10'>
                <h1>Request sent!</h1>
                <h1>Almost done, please upload photos of the issue(optional)</h1>
                <FileUploader newJobId={newJobId} />
                <Link to='/overview'>
                    <button>Continue</button>
                </Link>
            </div>
        </div>
    )
}

export default RequestSent
