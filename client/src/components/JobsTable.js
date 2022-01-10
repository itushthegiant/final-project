import React, { useState } from 'react'
import baseURL from '../api/baseURL'
import Carousel from '../modals/Carousel'


function JobsTable({ jobs, setIsClicked, isClicked, currentUser, handleApprove }) {
    const [currentJob, setCurrentJob] = useState(null)

    const fetchJob = async (id) => {
        try {
            const response = await baseURL.get(`/jobs/${id}`, { withCredentials: true })
            if (response.statusText === 'OK') {
                setCurrentJob(response.data)
                setIsClicked(true)
            }
        } catch (err) {
            console.log(err)
        }
    }

   


    return (
        <div className="container flex justify-center mx-auto mt-20">
            {isClicked ?
                <Carousel setIsClicked={setIsClicked} job={currentJob} />
                :
                <div className="flex flex-col">
                    <div className="w-full">
                        <div className="border-b border-gray-200 shadow">
                            <table>
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            Property
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            Urgent
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            Description
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            Address
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            Created at
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            Contact
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            Status
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            Images
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {jobs.map((job, i) => (
                                        <tr key={i} className="whitespace-nowrap">
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {job.property.name}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-gray-900">
                                                    {job.urgent}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-gray-500">{job.description}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-gray-500">{job.property.address}, {job.property.city}, {job.property.state}, {job.property.zipcode}</div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {job.created_at.slice(0, 10)}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-gray-500">{job.contact}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                            {currentUser.is_admin === true ? 
                                                (job.approved === true ?
                                                <button onClick={() => { handleApprove(job.id) }}
                                                    className="px-4 py-1 text-sm ml-2 text-black bg-yellow-400 rounded hover:bg-yellow-200 hover:text-white transition duration-300">
                                                    APPROVE
                                                </button>
                                                :
                                                <p className='ml-4 text-green-300'>APPROVED</p>
                                                )
                                                :
                                                job.approved === true ? <p className='text-green-300'>APPROVED</p> : <p className='animate-pulse text-yellow-400'>PENDING</p>
                                            }

                                            </td>
                                            <td className="px-6 py-4">
                                                {job.images_urls.length === 0 ?
                                                    <p className='px-4 py-1 text-md text-gray-500'>No Images</p>
                                                    :
                                                    <button onClick={() => { fetchJob(job.id) }}
                                                        className="px-4 py-1 text-sm ml-2 text-black bg-yellow-400 rounded hover:bg-yellow-200 hover:text-white transition duration-300">
                                                        IMAGES
                                                    </button>
                                                }
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            }
        </div>

    )
}

export default JobsTable
