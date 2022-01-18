import React from "react";
import Carousel from "../modals/Carousel";

function JobsTable(props) {
  if (props.unDoneJobs.length === 0) {
    return (
      <div className="border-8 border-none shadow-2xl rounded-3xl flex items-center justify-center mt-32  bg-blue-300 bg-opacity-70">
        <h1 className="bold m-10 text-3xl">There are no ongoing jobs</h1>
      </div>
    )
  } else {
    return (
      <div className="container flex justify-center mx-auto mt-5">
        {/* carousel is rendered if images are clicked */}
        {props.isClicked ? (
          <Carousel setIsClicked={props.setIsClicked} job={props.currentJob} />
        ) : (
          <div>
            <div className="border-8 border-none flex items-center justify-center mt-1">
              <h1 className="bold text-3xl">Ongoing jobs</h1>
            </div>
            {/* sort by urgency button */}
            <button
              className="px-4 py-1 text-sm ml-1 mb-1 text-black bg-gray-400 rounded-3xl hover:bg-blue-200 hover:text-white transition duration-300"
              onClick={() => props.sortByUrgency(props.jobs)}
            >
              {!props.sort ? "Sort by urgency" : "Undo"}
            </button>
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
                          Status
                        </th>
                        <th className="px-6 py-2 text-xs text-gray-500">
                          Images
                        </th>
                        {/* admin header */}
                        {props.currentUser.is_admin && (
                          <th className="px-6 py-2 text-xs text-gray-500">
                            Reject/Cancel
                          </th>
                        )}
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
                        (!job.is_done &&
                          <tr key={i} className="whitespace-nowrap">
                            {/* admin data */}
                            {props.currentUser.is_admin && (
                              <td className="px-6 py-4 text-sm text-gray-500">
                                {job.user.company_name}
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
                              {props.currentUser.is_admin ? (
                                !job.approved === true ? (
                                  <button
                                    onClick={() => {
                                      props.handleApprove(job.id);
                                    }}
                                    className="px-4 py-1 text-sm ml-2 text-black bg-yellow-400 rounded hover:bg-yellow-200 hover:text-white transition duration-300"
                                  >
                                    APPROVE
                                  </button>
                                ) : (
                                  <p className="ml-4 text-green-300">APPROVED</p>
                                )
                              ) : job.approved === true ? (
                                <p className="text-green-300">APPROVED</p>
                              ) : (
                                <p className="animate-pulse text-yellow-400">
                                  PENDING
                                </p>
                              )}
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
                            {props.currentUser.is_admin && (
                              // admin data
                              <td>
                                {!job.approved ? (
                                  <button
                                    onClick={() => {
                                      props.handleRejection(job.id);
                                    }}
                                    className="px-4 py-1 text-sm ml-2 text-white bg-red-400 rounded hover:bg-red-600 hover:text-white transition duration-300"
                                  >
                                    Reject
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => {
                                      props.handleRejection(job.id);
                                    }}
                                    className="px-4 py-1 text-sm ml-5 text-white bg-red-600 rounded hover:bg-red-800 hover:text-white transition duration-300"
                                  >
                                    Cancel
                                  </button>
                                )}
                              </td>
                            )}
                            {props.currentUser.is_admin && (
                              // admin data
                              <td>
                                {job.approved ? (
                                  <button
                                    onClick={() => {
                                      props.handleDone(job.id);
                                    }}
                                    className="px-4 py-1 text-sm ml-7 text-white bg-green-500 rounded hover:bg-green-300 hover:text-white transition duration-300"
                                  >
                                    Done
                                  </button>
                                ) : (
                                  <button
                                    disabled
                                    className="px-4 py-1 text-sm ml-2 text-white bg-green-100 rounded"
                                  >
                                    Done
                                  </button>
                                )}
                              </td>
                            )}
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
    );
  }
}


export default JobsTable;
