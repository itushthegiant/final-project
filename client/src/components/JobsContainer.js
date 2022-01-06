import React, { useEffect, useState } from 'react'
import baseURL from '../api/baseURL'
import JobCard from './JobCard'
import JobsTable from './JobsTable'

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

    

    // const renderCards = () => {
    //     return jobs.map((job) => {
    //         return <JobCard key={job.id} job={job}/>
    //     })
    // }


    return (
        <div className='flex'>
            {/* {renderCards()} */}
            <JobsTable jobs={jobs} />
        </div>
    )
}

export default Jobs
