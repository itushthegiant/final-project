import React, { useState, useEffect } from "react";
import baseURL from "../api/baseURL";
import { useParams } from "react-router-dom";
import RequestSent from "../modals/RequestSent";
import { renderErrors } from "../assets/RenderErrors";

function RequestForm() {
  const [checkMark, setCheckMark] = useState(false);
  const [urgent, setUrgent] = useState(null);
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [currentProperty, setCurrentProperty] = useState("");
  const [newJobId, setNewJobId] = useState(null);
  const [errors, setErrors] = useState("");
  const { id } = useParams();

  //// fetch current property when the page is rendered
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await baseURL.get(`/properties/${id}`, {
          withCredentials: true,
        });
        if (response.statusText === "OK") {
          setCurrentProperty(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchProperty();
  }, [id]);

  //// Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await baseURL.post(
        `/jobs`,
        {
          urgent,
          contact,
          description,
          property_id: id,
          user_id: currentProperty.user.id,
        },
        { withCredentials: true }
      );
      setCheckMark(true);
      setNewJobId(response.data.id);
    } catch (err) {
      setErrors(err.response.data.errors);
    }
  };

  return (
    <div>
      {!checkMark ? (
        //// render form if checkMark is False ////
        <div className="flex justify-center mt-10">
          <div className=" w-1/4 opacity-95 shadow-2xl md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="mt-20 shadow-2xl overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <h1 className="mb-7 items-center flex justify-center text-3xl">
                    Request-A-Service for {currentProperty.name}
                  </h1>
                  <div className="grid grid-rows-3 gap-6">
                    <div className="sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Issue description
                      </label>
                      {errors && renderErrors(errors, "Description")}
                      <input
                        type="text"
                        value={description}
                        name="description"
                        placeholder=""
                        className="h-12 w-96 rounded border px-3 focus:text-black focus:border-blue-100 hover:shadow-xl ease-in-out duration-300"
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>

                    <div className=" sm:col-span-4">
                      <label className="block text-sm font-medium text-gray-700">
                        On site contact
                      </label>
                      {errors && renderErrors(errors, "Contact")}
                      <input
                        type="text"
                        value={contact}
                        name="contact"
                        placeholder="ex. name 212-212-2121.."
                        className="h-12 w-96 rounded border px-3 focus:text-black focus:border-blue-100 hover:shadow-xl ease-in-out duration-300"
                        onChange={(e) => setContact(e.target.value)}
                      />
                    </div>
                    <div className="sm:col-span-4">
                      <label className="block text-sm font-medium text-gray-700">
                        How urgent?
                      </label>
                      {errors && renderErrors(errors, "Urgent")}
                      <div className="mt-1 flex">
                        {["1", "2", "3", "4", "5"].map((num, i) => {
                          //// renders input for each number ////
                          return (
                            <div key={i} className="w-16">
                              <div>
                                <p className="ml-7 mb-2">{num}</p>
                              </div>
                              <div>
                                <input
                                  type="radio"
                                  value={num}
                                  id={`level${1}`}
                                  name="urgent"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                  onChange={(e) => setUrgent(e.target.value)}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        //// render photo upload modal when submit ////
        <div>
          <RequestSent newJobId={newJobId} />
        </div>
      )}
    </div>
  );
}

export default RequestForm;
