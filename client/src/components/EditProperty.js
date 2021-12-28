import React, { useState, useEffect } from 'react'
import baseURL from '../api/baseURL'
import { useNavigate, useParams } from 'react-router-dom'


function EditProperty() {
    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const [comments, setComments] = useState('')
    const [address, setAddress] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [errors, setErrors] = useState('')
    const [currentProperty, setCurrentProperty] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()



    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await baseURL.get(`/properties/${id}`, { withCredentials: true})
                if (response.statusText === 'OK') {
                    setCurrentProperty(response.data)
                }
            } catch (err) {
                console.log(err)
            }
        }
        fetchProperty()
    },[])

    

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await baseURL.patch(`/properties/${id}`,
                {
                    name,
                    contact,
                    comments,
                    address,
                    zipcode,
                    state,
                    city
                },
                { withCredentials: true },
            )
            navigate('/overview')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='mt-10'>
            <h1 className='flex items-center justify-center text-3xl mb-10'>Edit {currentProperty.name}</h1>
            <div className="mr-24 ml-24 md:mt-0 md:col-span-2">
                <form onSubmit={handleSubmit}>
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">Name</label>
                                    <input type="text" value={name} name='name' placeholder={currentProperty.name} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={(e) => setName(e.target.value)} />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">Contact Info</label>
                                    <input type="text" value={contact} name='contact' placeholder={currentProperty.contact} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={(e) => setContact(e.target.value)} />
                                </div>

                                <div className="col-span-6 sm:col-span-4">
                                    <label className="block text-sm font-medium text-gray-700">Comments</label>
                                    <input type="text" value={comments} name='comments' placeholder={currentProperty.comments} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={(e) => setComments(e.target.value)} />
                                </div>



                                <div className="col-span-6">
                                    <label className="block text-sm font-medium text-gray-700">Street address</label>
                                    <input type="text" value={address} name='address' placeholder={currentProperty.address} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={(e) => setAddress(e.target.value)} />
                                </div>

                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">City</label>
                                    <input type="text" value={city} name='city' placeholder={currentProperty.city} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={(e) => setCity(e.target.value)} />
                                </div>

                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">State</label>
                                    <input type="text" value={state} name='state' placeholder={currentProperty.state} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={(e) => setState(e.target.value)} />
                                </div>

                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                                    <input type="text" value={zipcode} name='zipcode' placeholder={currentProperty.zipcode} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={(e) => setZipcode(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
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

export default EditProperty
