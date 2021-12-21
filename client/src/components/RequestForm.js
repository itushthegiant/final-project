import React, { useState, useEffect } from 'react'
import baseURL from '../api/baseURL'
import { useNavigate, useParams } from 'react-router-dom'

function RequestForm() {
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [contact, setContact] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()


    // useEffect(() => {
    //     const fetchProperty
    // },[])



    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await baseURL.post(`/jobs`,
                {
                    job_type: type,
                    contact,
                    description,
                    property_id: id
                },
                { withCredentials: true },
            )
            navigate('/overview')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h1 className='headers flex items-center justify-center text-3xl mt-5 mb-5'>Request-A-Service</h1>
            <div className=" mr-56 ml-56 md:mt-0 md:col-span-2">
                <form onSubmit={handleSubmit}>
                    <div className="shadow-lg overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-rows-3 gap-6">
                                <div className="row-span-3 sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">Name</label>
                                    <input type="text" value={type} name='name' placeholder='Property name..' className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={(e) => setType(e.target.value)} />
                                </div>

                                <div className="row-span-3 sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">Contact Info</label>
                                    <input type="text" value={description} name='contact' placeholder='ex. name-212-212-2121..' className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={(e) => setDescription(e.target.value)} />
                                </div>

                                <div className="row-span-3 sm:col-span-4">
                                    <label className="block text-sm font-medium text-gray-700">Add Comment</label>
                                    <input type="text" value={contact} name='comments' placeholder='ex. no doorman' className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={(e) => setContact(e.target.value)} />
                                </div>



                                {/* <div className="col-span-6">
                                    <label className="block text-sm font-medium text-gray-700">Street address</label>
                                    <input type="text" value={address} name='address' className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={(e) => setAddress(e.target.value)} />
                                </div>

                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">City</label>
                                    <input type="text" value={city} name='city' className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={(e) => setCity(e.target.value)} />
                                </div>

                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">State</label>
                                    <input type="text" value={state} name='state' className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={(e) => setState(e.target.value)} />
                                </div>

                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                                    <input type="text" value={zipcode} name='zipcode' className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={(e) => setZipcode(e.target.value)} />
                                </div> */}
                            </div>
                        </div>
                        <div className="flex items-center justify-center px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RequestForm
