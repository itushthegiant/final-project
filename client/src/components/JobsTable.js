import React from 'react'

function JobsTable({ jobs }) {
    return (
        <div className="container flex justify-center mx-auto mt-20">
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
                                        Name
                                    </th>
                                    <th className="px-6 py-2 text-xs text-gray-500">
                                        Email
                                    </th>
                                    <th className="px-6 py-2 text-xs text-gray-500">
                                        Created_at
                                    </th>
                                    <th className="px-6 py-2 text-xs text-gray-500">
                                        Edit
                                    </th>
                                    <th className="px-6 py-2 text-xs text-gray-500">
                                        Delete
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
                                                Jon doe
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-500">{job.property.address}, {job.property.city}, {job.property.state}, {job.property.zipcode}</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {job.created_at.slice(0, 10)}
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href="#" className="px-4 py-1 text-sm text-white bg-blue-400 rounded">Edit</a>
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href="#" className="px-4 py-1 text-sm text-white bg-red-400 rounded">Delete</a>
                                        </td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobsTable
