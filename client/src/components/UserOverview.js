import React, { useState, useEffect } from 'react'
import PropertyCard from './PropertyCard'
import baseURL from '../api/baseURL'
import DeleteModal from '../modals/DeleteModal'

function UserOverview() {
    const [properties, setProperties] = useState([])
    const [currentProperty, setCurrentProperty] = useState('')
    const [deleteClicked, setDeleteClicked] = useState(false)


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
            return <PropertyCard 
            setCurrentProperty={setCurrentProperty} 
            setDeleteClicked={setDeleteClicked} 
            property={property} id={property.id} 
            key={property.id} 
            />
        })
    }


    return (
        <div>
            {!deleteClicked ?
                <div>
                    <div>
                        <h1 className='flex items-center justify-center text-3xl mt-5'>Overview</h1>
                    </div>
                    <div className="flex justify-center ml-5 mr-5">
                        {renderCards()}
                    </div>
                </div>
                :
                <div>
                    <DeleteModal 
                    currentProperty={currentProperty} 
                    filterProperties={filterProperties} 
                    setDeleteClicked={setDeleteClicked} 
                    />
                </div>
            
            }
        </div>
    )
}

export default UserOverview
