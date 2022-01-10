import React, { useState, useEffect } from 'react'
import PropertyCard from './PropertyCard'
import baseURL from '../api/baseURL'
import DeleteModal from '../modals/DeleteModal'
import { Link } from 'react-router-dom'
import Loading from '../modals/Loading'

function UserOverview() {
    const [properties, setProperties] = useState([])
    const [currentProperty, setCurrentProperty] = useState('')
    const [deleteClicked, setDeleteClicked] = useState(false)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await baseURL.get('/properties', { withCredentials: true })
                if (response.statusText === 'OK') {
                    setProperties(response.data)
                    setIsLoading(true)
                } else {
                    setIsLoading(false)
                }
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
            {!isLoading ?
                <Loading />
                :
                !deleteClicked ?
                    (<div>
                        {properties.length === 0 ?
                            (<div className='border-8 border-none shadow-2xl opacity-70 rounded-3xl flex items-center justify-center mt-32 m-40 bg-blue-300'>
                                <Link to='/add-property'>
                                    <h1 className='m-10 text-3xl hover:text-blue-600 transition duration-300 animate-pulse'>Please add your property</h1>
                                </Link>
                            </div>)
                            :
                            (<div>
                                <div>
                                    <h1 className='flex items-center justify-center text-3xl mt-5'>Overview</h1>
                                </div>
                                <div className="flex justify-center ml-5 mr-5">
                                    {renderCards()}
                                </div>
                            </div>)
                        }
                    </div>)
                    :
                    (<div>
                        <DeleteModal
                            currentProperty={currentProperty}
                            filterProperties={filterProperties}
                            setDeleteClicked={setDeleteClicked}
                        />
                    </div>)
            }
        </div>
    )
}

export default UserOverview
