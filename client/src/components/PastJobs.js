import React from 'react'
import Carousel from "../modals/Carousel";

const PastJobs = (props) => {
    return (
            <div className="container flex justify-center mx-auto mt-20">
                {/* carousel is rendered if images are clicked */}
                {props.isClicked ? (
                    <Carousel setIsClicked={props.setIsClicked} job={props.currentJob} />
                ) : (
                    <div>
                        {/* table head */}
                        <div className="flex flex-col">
                            <div className="w-full">
                                <div className="border-b border-gray-200 shadow">
                                    <table>
                                        <thead className="bg-gray-50">
                                            <tr>
                                                {/* admin header */}
                                                {props.currentUser.is_admin && (
                                                    <th className="px-6 py-2 text-xs text-gray-500">
                                                        Client
                                                    </th>
                                                )}
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
                                                    Images
                                                </th>
                                                {/* admin header */}
                                                {props.currentUser.is_admin && (
                                                    <th className="px-6 py-2 text-xs text-gray-500">
                                                        Mark as Done
                                                    </th>
                                                )}
                                            </tr>
                                        </thead>
                                        {/* table body */}
                                        <tbody className="bg-white">
                                            {props.jobs.map((job, i) => (
                                                (job.is_done && 
                                                    <tr key={i} className="whitespace-nowrap">
                                                    {/* admin data */}
                                                    {props.currentUser.is_admin && (
                                                        <td className="px-6 py-4 text-sm text-gray-500">
                                                            {job.user.username}
                                                        </td>
                                                    )}
                                                    <td className="px-6 py-4 text-sm text-gray-500">
                                                        {job.property.name}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="text-sm text-gray-900">
                                                            {job.urgent}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="text-sm text-gray-500">
                                                            {job.description}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="text-sm text-gray-500">
                                                            {job.property.address}, {job.property.city},{" "}
                                                            {job.property.state}, {job.property.zipcode}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-500">
                                                        {job.created_at.slice(0, 10)}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="text-sm text-gray-500">
                                                            {job.contact}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {job.images_urls.length === 0 ? (
                                                            <p className="px-4 py-1 text-md text-gray-500">
                                                                No Images
                                                            </p>
                                                        ) : (
                                                            <button
                                                                onClick={() => {
                                                                    props.fetchJob(job.id);
                                                                }}
                                                                className="px-4 py-1 text-sm ml-2 text-black bg-yellow-400 rounded hover:bg-yellow-200 hover:text-white transition duration-300"
                                                            >
                                                                IMAGES
                                                            </button>
                                                        )}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <p>Done</p>
                                                    </td>
                                                </tr>
                                                )
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
    )
}

export default PastJobs
