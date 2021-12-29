import React, { useState, useEffect } from 'react'
import baseURL from '../api/baseURL'
import { useParams } from 'react-router-dom'
import CheckMark from '../modals/RequestSent'

function RequestForm() {
    const [checkMark, setCheckMark] = useState(false)
    const [urgent, setUrgent] = useState(null)
    const [description, setDescription] = useState('')
    const [contact, setContact] = useState('')
    const [currentProperty, setCurrentProperty] = useState('')
    const [image, setImage] = useState([])
    const { id } = useParams()


    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await baseURL.get(`/properties/${id}`, { withCredentials: true })
                if (response.statusText === 'OK') {
                    setCurrentProperty(response.data)
                }
            } catch (err) {
                console.log(err)
            }
        }
        fetchProperty()
    }, [id])



    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await baseURL.post(`/jobs`,
                {
                    urgent,
                    contact,
                    description,
                    property_id: id
                },
                { withCredentials: true },
            )
            setCheckMark(true)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>{!checkMark ?
            <div>
                <h1 className='headers flex items-center justify-center text-3xl mt-5 mb-5'>Request-A-Service for {currentProperty.name}</h1>
                <div className=" mr-56 ml-56 md:mt-0 md:col-span-2">
                    <form onSubmit={handleSubmit}>
                        <div className="shadow-lg overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-rows-3 gap-6">
                                    <div className="row-span-3 sm:col-span-3">
                                        <label className="block text-sm font-medium text-gray-700">Issue description</label>
                                        <input type="text" value={description} name='description' placeholder='' className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={(e) => setDescription(e.target.value)} />
                                    </div>

                                    <div className="row-span-3 sm:col-span-4">
                                        <label className="block text-sm font-medium text-gray-700">On site contact</label>
                                        <input type="text" value={contact} name='contact' placeholder='ex. name 212-212-2121..' className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={(e) => setContact(e.target.value)} />
                                    </div>
                                    <div className="row-span-3 sm:col-span-4">
                                        <label className="block text-sm font-medium text-gray-700">How urgent?</label>
                                        <div className='flex'>
                                            <p>1</p>
                                            <input type="radio" value='1' id='level1' name='urgent' className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={(e) => setUrgent(e.target.value)} />
                                            <p>2</p>
                                            <input type="radio" value='2' id='level2' name='urgent' className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={(e) => setUrgent(e.target.value)} />
                                            <p>3</p>
                                            <input type="radio" value='3' id='level3' name='urgent' className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={(e) => setUrgent(e.target.value)} />
                                            <p>4</p>
                                            <input type="radio" value='4' id='level4' name='urgent' className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={(e) => setUrgent(e.target.value)} />
                                            <p>5</p>
                                            <input type="radio" value='5' id='level5' name='urgent' className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={(e) => setUrgent(e.target.value)} />
                                        </div>
                                    </div>
                                    <input type='file' onChange={(e) => setImage(console.log(e.target.files[0]))} />
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
            :
            <div>
                <CheckMark />
            </div>
        }

        </div>
    )
}

export default RequestForm
