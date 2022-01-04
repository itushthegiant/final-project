import React from 'react'
import { Link } from 'react-router-dom'
import FileUploader from '../components/FileUploader'
import checkMark from '../assets/checkmark.png'

function RequestSent({ newJobId }) {
    return (
        <div className='w-screen h-screen fixed flex justify-center items-center bg-gray-400 bg-opacity-75'>
            <div className='w-max h-max rounded-3xl bg-white shadow-lg shadow-black flex flex-col p-10'>
                <div className="flex mb-8">
                    <div>
                        <h1>Request sent</h1>
                    </div>
                    <div>
                        <img className='ml-3 w-6 h-5' src={checkMark} alt="checkmark" />
                    </div>
                </div>
                <h1 className='mb-3'>Almost done, please upload photos of the issue(optional)</h1>
                <FileUploader newJobId={newJobId} />
                <div className='flex justify-center'>
                    <Link to='/overview'>
                        <button >Continue</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RequestSent
