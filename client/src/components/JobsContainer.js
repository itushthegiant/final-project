import React, { useEffect, useState } from 'react'
import baseURL from '../api/baseURL'
import JobCard from './JobCard'

function Jobs() {
    const [jobs, setJobs] = useState([])




    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await baseURL.get('/jobs', { withCredentials: true })
                setJobs(response.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchJobs()
    }, [])

    const renderCards = () => {
        return jobs.map((job) => {
            return <JobCard job={job}/>
        })
    }


    return (
        <div>
            {renderCards()}
        </div>
    )
}

export default Jobs
