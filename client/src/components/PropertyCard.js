import React from 'react'
import { Link } from 'react-router-dom'

function PropertyCard({ property, setCurrentProperty, setDeleteClicked, currentUser }) {



    return (
        <div className="property-card mt-10 flex relative flex-col h-3/5 w-96 p-6 text-center rounded-xl ease-in-out duration-300 bg-white bg-opacity-95 shadow-2xl hover:shadow-inner">
            {currentUser && currentUser.is_admin && <h5>Client: {property.user.company_name}</h5>}
            <div className='flex-no-shrink'>
                <img alt='' className='w-36 h-36 block rounded-full mx-auto' src='https://www.creativefabrica.com/wp-content/uploads/2020/02/10/Building-Logo-Graphics-1-50.jpg' />
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
                    <div className='mt-5'>
                        <Link to={`/properties/${property.id}/add-job`}>
                            <button
                                className='mr-2 bg-blue-500 hover:bg-yellow-300 hover:text-black transition duration-300 text-white text-center py-2 px-4 rounded'>
                                Request service
                            </button>
                        </Link>
                        |
                        <Link to={`/properties/${property.id}/edit-property`}>
                            <button
                                className='ml-2 mr-2 bg-yellow-300 hover:bg-gray-400 hover:text-black transition duration-300 text-white text-center py-2 px-4 rounded'>
                                Edit
                            </button>
                        </Link>
                        |
                        <button
                            onClick={() => {
                                setDeleteClicked(true)
                                setCurrentProperty(property)
                            }}
                            className='ml-2 bg-red-300 hover:bg-red-600 hover:text-black transition duration-300 text-white text-center py-2 px-4 rounded'>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard
