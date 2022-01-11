import React, { useEffect, useState } from 'react'
import baseURL from '../api/baseURL'
import JobsTable from './JobsTable'

function Jobs({ currentUser }) {
    const [jobs, setJobs] = useState([])
    const [isClicked, setIsClicked] = useState(false)
    const [isApproved, setIsApproved] = useState(true)


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
    }, [isApproved, setIsApproved])





    return (
        <div>
            {jobs.length === 0 ?
                <div className='border-8 border-none shadow-2xl rounded-3xl flex items-center justify-center mt-32 m-40 bg-blue-300 bg-opacity-70'>
                    <h1 className='bold m-10 text-3xl'>There are no jobs in your data</h1>
                </div>
                :
                <div className={isClicked ? 'flex bg-gray-600 bg-opacity-60' : 'flex'}>
                    <JobsTable 
                    isApproved={isApproved}
                    setIsApproved={setIsApproved}
                    isClicked={isClicked} 
                    setIsClicked={setIsClicked} 
                    jobs={jobs} 
                    currentUser={currentUser} />
                </div>
            }
        </div>
    )
}

export default Jobs
