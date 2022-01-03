import React from 'react' 
import baseURL from '../api/baseURL'
import { Link } from 'react-router-dom'

function PropertyCard({ property, filterProperties }) {

    const deleteProperty = async () => {
        try {
            await baseURL.delete(`/properties/${property.id}`, { withCredentials: true})
            filterProperties(property.id)
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div className="property-card mt-10 flex relative flex-col h-96 w-96 min-w-250 p-6 rounded-xl ease-in-out duration-300 bg-white bg-opacity-95 shadow-2xl hover:shadow-inner">
                <div className='flex-no-shrink'>
                    <img alt='' className='w-36 h-36 block mx-auto' src='https://source.unsplash.com/WLUHO9A_xik/1600x900' />
                </div>
                <div className='flex-1 card-block relative'>
                    <div className="p-6">
                        <h4 className='font-medium text-2xl mb-3'>
                            {property.name}
                        </h4>
                        <p className='leading-normal'>
                            {property.address}, {property.city}, {property.state}, {property.zipcode}
                        </p>
                        <p className="text-sm text-grey block mt-6">
                            {property.contact}
                        </p>
                        <p className="text-sm text-grey block mt-6">
                            {property.comments}
                        </p>
                        <Link to={`/properties/${property.id}/add-job`}><button className='bg-green-500 hover:bg-green-400 border-b-4 border-green-700 hover:border-green-500 text-white text-center py-2 px-4 rounded'>Request service</button></Link>
                        <Link to={`/properties/${property.id}/edit-property`}><button className='bg-gray-500 hover:bg-gray-400 border-b-4 border-gray-700 hover:border-gray-500 text-white text-center py-2 px-4 rounded'>Edit</button></Link>
                        <button onClick={deleteProperty} className='bg-red-500 hover:bg-red-400 border-b-4 border-red-700 hover:border-red-500 text-white text-center py-2 px-4 rounded'>Delete</button>
                    </div>
                </div>
            </div>
    )
}

export default PropertyCard
