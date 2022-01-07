import React from 'react'
import { Link } from 'react-router-dom'
import baseURL from '../api/baseURL'


function DeleteModal({ setDeleteClicked, filterProperties, currentProperty }) {


    const deleteProperty = async () => {
        try {
            await baseURL.delete(`/properties/${currentProperty.id}`, { withCredentials: true })
            filterProperties(currentProperty.id)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className='w-screen h-screen fixed flex justify-center items-center bg-gray-400 bg-opacity-75'>
            <div className='w-max h-max rounded-3xl bg-white shadow-lg shadow-black flex flex-col p-10'>
                <div className="flex mb-8">
                    <div>
                        <h1 className='text-2xl'>Are you sure you want to delete "{currentProperty.name}"</h1>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Link to='/'>
                        <button
                            className='mr-3 bg-red-500 hover:bg-red-300 hover:text-black transition duration-300 text-white text-center py-2 px-4 rounded'
                            onClick={() => {
                                setDeleteClicked(false)
                                deleteProperty()
                            }}>
                            Delete
                        </button>
                    </Link>
                    <button
                        className='hover:text-gray-400 transition duration-300 text-lg'
                        onClick={() => setDeleteClicked(false)}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal
