import React from 'react'

function JobCard({ job }) {

    const renderImages = () => {
        return job.images_urls.map((image) => {
            return <img className='w-14 h-14' alt='issue image' src={image} />
        })
    }

    return (
        <div className="mt-10">
            <div className="bg-white p-10 rounded-lg shadow-md w-max">
                <h1 className="text-xl font-bold">{job.property.name}</h1>
                <div className="mt-4 mb-10">
                    <p className="text-gray-600">{job.description}</p>
                </div>
                <div>
                    <h2>{job.contact}</h2>
                </div>
                <div>
                    <p>Urgency - {job.urgent}</p>
                </div>
                <div>
                    <div>
                        <h3 className="text-xs uppercase">Current status:</h3>
                    </div>
                    <div>
                        <h2 className="tracking-wide">
                            {!job.approved ?
                                <p>PENDING</p>
                                :
                                <p>APPROVED</p>
                            }
                        </h2>
                    </div>
                </div>
                <div>
                   {job.images_urls.length === 0 ? <div></div> : renderImages()}
                </div>
                <button className="bg-orange-400 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75">Go to lesson</button>
            </div>
        </div>
    )
}

export default JobCard
