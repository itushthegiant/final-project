import React from 'react'

function JobCard() {
    return (
        <div>
            <div className="bg-white p-10 rounded-lg shadow-md">
                <h1 className="text-xl font-bold">Jump back in!</h1>
                <div className="mt-4 mb-10">
                    <p className="text-gray-600">Course 75% completed</p>
                    <div className="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                        <div className="bg-pink-400 w-3/4 h-full rounded-lg shadow-md"></div>
                    </div>
                </div>
                <h3 className="text-xs uppercase">Current lesson:</h3>
                <h2 className="tracking-wide">
                    Object in JavaScript
                    <br />
                    (Challenge)
                </h2>
                <button className="bg-orange-400 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75">Go to lesson</button>
            </div>
        </div>
    )
}

export default JobCard
