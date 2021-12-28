import React, { useState, useEffect } from 'react'
import PropertyCard from './PropertyCard'
import PropertyInfo from './PropertyInfo'
import baseURL from '../api/baseURL'

function UserOverview() {
    const [properties, setProperties] = useState([])




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
    }, [])


    const filterProperties = (id) => {
        const newProperties = properties.filter(property => property.id !== id)
        setProperties(newProperties)
    }


    const renderCards = () => {
        return properties.map((property) => {
            return <PropertyCard filterProperties={filterProperties} property={property} id={property.id} key={property.id} />
        })
    }


    return (
        <div>
            <div>
                <h1 className='flex items-center justify-center text-3xl mt-5'>Overview</h1>
            </div>
            <div className="flex">
                {renderCards()}
            </div>
        </div>
    )
}

export default UserOverview
