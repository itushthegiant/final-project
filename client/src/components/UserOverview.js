import React, { useState, useEffect } from 'react'
import PropertyCard from './PropertyCard'
import PropertyInfo from './PropertyInfo'
import baseURL from '../api/baseURL'

function UserOverview() {
    const [propertyInfo, setPropertyInfo] = useState(null)
    const [properties, setProperties] = useState([])
     

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

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await baseURL.get('/properties', { withCredentials: true })
                setProperties(response.data)
            } catch (err) {
                console.log(err)
            }
         }
         fetchProperties()
    },[])


    const filterProperties = (id) => {
         const newProperties = properties.filter(property => property.id !== id)
         setProperties(newProperties)
    }


    const renderCardInfo = () => {
        if (propertyInfo) {
            return <PropertyInfo filterProperties={filterProperties} propertyInfo={propertyInfo} />
        }
    }



    const renderCards = () => {
        return properties.map((property) => {
            return  <PropertyCard fetchCardInfo={fetchCardInfo} id={property.id} key={property.id} property={property} />
        })
    }


    return (
        <div>
            <div>
            <h1 className='headers flex items-center justify-center text-3xl mt-5'>Overview</h1>
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
