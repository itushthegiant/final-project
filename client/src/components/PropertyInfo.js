import React from 'react'
import { Link } from 'react-router-dom'
import baseURL from '../api/baseURL'

function PropertyInfo({ propertyInfo, filterProperties }) {

    const deleteProperty = async () => {
        try {
            await baseURL.delete(`/properties/${propertyInfo.id}`, { withCredentials: true})
            filterProperties(propertyInfo.id)
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div className="max-w-md mx-auto px-4">
            <div className='relative m-0 shadow-lg flex bg-white'>
                <div className='flex-no-shrink'>
                    <img alt='' className='w-36 h-36 block mx-auto' src='https://source.unsplash.com/WLUHO9A_xik/1600x900' />
                </div>
                <div className='flex-1 card-block relative'>
                    <div className="p-6">
                        <h4 className='font-medium text-2xl mb-3'>
                            {propertyInfo.name}
                        </h4>
                        <p className='leading-normal'>
                            {propertyInfo.address}, {propertyInfo.city}, {propertyInfo.state}, {propertyInfo.zipcode}
                        </p>
                        <p className="text-sm text-grey block mt-6">
                            {propertyInfo.contact}
                        </p>
                        <p className="text-sm text-grey block mt-6">
                            {propertyInfo.comments}
                        </p>
                        <Link to={`/properties/${propertyInfo.id}/add-job`}><button className='bg-green-500 hover:bg-green-400 border-b-4 border-green-700 hover:border-green-500 text-white text-center py-2 px-4 rounded'>Request service</button></Link>
                        <Link to={`/properties/${propertyInfo.id}/edit-property`}><button className='bg-gray-500 hover:bg-gray-400 border-b-4 border-gray-700 hover:border-gray-500 text-white text-center py-2 px-4 rounded'>Edit</button></Link>
                        <button onClick={deleteProperty} className='bg-red-500 hover:bg-red-400 border-b-4 border-red-700 hover:border-red-500 text-white text-center py-2 px-4 rounded'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyInfo
