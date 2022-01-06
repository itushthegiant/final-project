import React, { useEffect, useState } from 'react'
import baseURL from '../api/baseURL'
import JobsTable from './JobsTable'

function Jobs() {
    const [jobs, setJobs] = useState([])
    const [isClicked, setIsClicked] = useState(false)


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

    



    return (
        <div className={isClicked ? 'flex bg-gray-600 bg-opacity-60' : 'flex'}>
            <JobsTable isClicked={isClicked} setIsClicked={setIsClicked} jobs={jobs} />
        </div>
    )
}

export default Jobs
