import React from 'react'
import { Link } from 'react-router-dom'

function PropertyInfo({ propertyInfo }) {
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
                            {propertyInfo.address}
                        </p>
                        <p className="text-sm text-grey block mt-6">
                            {propertyInfo.contact}
                        </p>
                        <p className="text-sm text-grey block mt-6">
                            {propertyInfo.comments}
                        </p>
                        <Link to='/request-service'><button className='bg-green-500 hover:bg-green-700 text-white text-center py-2 px-4 rounded-full h-20 w-20 inline-flex items-center'>Request service</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyInfo
