import React from 'react'
import PropertyCard from './PropertyCard'

function UserOverview({ currentUser }) {

    const renderCard = () => {
        return currentUser.properties.map((property) => <PropertyCard key={property.id} property={property} />)
    }


    return (
        <div>
            <div>
                <h1 className='flex items-center justify-center text-3xl'>Overview</h1>
            </div>
            <div className="grid grid-rows-1 grid-cols-4 gap-4 row-span-2 py-8">
                {renderCard()}
            </div>
        </div>
    )
}

export default UserOverview
