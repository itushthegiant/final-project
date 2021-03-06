import React, { useState } from "react";
import baseURL from "../api/baseURL";
import { useNavigate } from "react-router-dom";
import { usStates } from "../assets/usStatesArray";
import { renderErrors } from "../assets/RenderErrors";

function AddProperty() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await baseURL.post(
        "/properties",
        {
          name,
          contact,
          address,
          zipcode,
          state,
          city,
        },
        { withCredentials: true }
      );
      navigate("/");
    } catch (err) {
      setErrors(err.response.data.errors);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="w-96 md:mt-0 md:col-span-2 opacity-95">
        <form onSubmit={handleSubmit}>
          <div className="mt-20 shadow-2xl overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <h1 className="mb-7 items-center flex justify-center text-3xl">
                Add Property
              </h1>
              <div>
                <div className=" sm:col-span-3">
                  <label className="text-sm font-medium text-gray-700">
                    Name
                  </label>
                  {errors && renderErrors(errors, "Name")}
                  <input
                    type="text"
                    value={name}
                    name="name"
                    placeholder="Property name.."
                    className=" w-full h-12 rounded border px-3 focus:text-black focus:border-blue-100 hover:shadow-xl ease-in-out duration-300"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mt-5 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Contact Info
                  </label>
                  {errors && renderErrors(errors, "Contact")}
                  <input
                    type="text"
                    value={contact}
                    name="contact"
                    placeholder="ex. name-212-212-2121.."
                    className="h-12 w-full rounded border px-3 focus:text-black focus:border-blue-100 hover:shadow-xl ease-in-out duration-300"
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>

                <div className="mt-5 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Street address
                  </label>
                  {errors && renderErrors(errors, "Address")}
                  <input
                    type="text"
                    value={address}
                    name="address"
                    className="h-12 rounded w-full border px-3 focus:text-black focus:border-blue-100 hover:shadow-xl ease-in-out duration-300"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <div className="mt-5 sm:col-span-6">
                  <label className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  {errors && renderErrors(errors, "City")}
                  <input
                    type="text"
                    value={city}
                    name="city"
                    className="h-12 rounded w-full border px-3 focus:text-black focus:border-blue-100 hover:shadow-xl ease-in-out duration-300"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>

                <div className="mt-5 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    State
                  </label>
                  {errors && renderErrors(errors, "State")}
                  <select
                    className="border-2 border-gray-400 hover:shadow-xl cursor-pointer"
                    onChange={(e) => setState(e.target.value)}
                  >
                    <option value="none" defaultValue={null}>
                      Choose State
                    </option>
                    {usStates.map((state, i) => {
                      return (
                        <option value={state} key={i}>
                          {state}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="mt-5 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    ZIP / Postal
                  </label>
                  {errors && renderErrors(errors, "Zipcode")}
                  <input
                    type="text"
                    value={zipcode}
                    name="zipcode"
                    className="h-12 rounded w-full border px-3 focus:text-black focus:border-blue-100 hover:shadow-xl ease-in-out duration-300"
                    onChange={(e) => setZipcode(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
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
  );
}

export default AddProperty;
