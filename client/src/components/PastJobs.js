import React from "react";
import Carousel from "../modals/Carousel";

const PastJobs = (props) => {
  if (props.jobs.length === 0) {
    return (
      <div className="border-8 border-none shadow-2xl rounded-3xl flex items-center justify-center mt-32  bg-blue-300 bg-opacity-70">
        <h1 className="bold m-10 text-3xl">There are no done jobs yet</h1>
      </div>
    )
  } else {
    return (
      <div className="container flex justify-center mx-auto mb-20 ">
        {/* carousel is rendered if images are clicked */}
        {props.isClicked ? (
          <Carousel setIsClicked={props.setIsClicked} job={props.currentJob} />
        ) : (
          <div>
            <div className="border-8 border-none flex items-center justify-center mb-5">
              <h1 className="bold text-3xl">Past jobs</h1>
            </div>
            {/* table head */}
            <div className="overflow-y-auto h-96 flex flex-col">
              <div className="w-full">
                <div className="border-b border-gray-200 shadow ">
                  <table>
                    <thead className="bg-gray-200">
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
                          Description
                        </th>
                        <th className="px-6 py-2 text-xs text-gray-500">
                          Address
                        </th>
                        <th className="px-6 py-2 text-xs text-gray-500">
                          Updated at
                        </th>
                        <th className="px-6 py-2 text-xs text-gray-500">
                          Contact
                        </th>
                        <th className="px-6 py-2 text-xs text-gray-500">
                          Images
                        </th>
                      </tr>
                    </thead>
                    {/* table body */}
                    <tbody className=" bg-gray-100">
                      {props.jobs.map(
                        (job, i) =>
                          job.is_done && (
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
                                {job.updated_at.slice(0, 10)}
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
                            </tr>
                          )
                      )}
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
};

export default PastJobs;
