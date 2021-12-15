import React, { useState, useEffect } from 'react'
import PropertyCard from './PropertyCard'
import PropertyInfo from './PropertyInfo'
import baseURL from '../api/baseURL'

function UserOverview({ currentUser }) {
    const [propertyInfo, setPropertyInfo] = useState(null)


////// Fetch the property info when click on property //////
    const fetchCardInfo = async (id) => {
        try {
            const response = await baseURL.get(`/properties/${id}`,
                { withCredentials: true }
            )
            setPropertyInfo(response.data)
        } catch (err) {
            console.log(err)
        }
    }


    const renderCardInfo = () => {
        if (propertyInfo) {
            return <PropertyInfo propertyInfo={propertyInfo} />
        }
    }



    const renderCards = () => {
        return currentUser.properties.map((property) => <PropertyCard fetchCardInfo={fetchCardInfo} id={property.id} key={property.id} property={property} />)
    }


    return (
        <div>
            <div>
                <h1 className='user-header flex items-center justify-center text-3xl'>Overview</h1>
            </div>
            <div className="grid grid-rows-1 row-span-2 p-10">
                {renderCards()}
            <div>
                {renderCardInfo()}
            </div>
            </div>
        </div>
    )
}

export default UserOverview
