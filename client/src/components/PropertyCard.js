import React from 'react'

function PropertyCard(props) {
    return (
        <div className="wrapper  antialiased text-gray-900 w-10 mt-10">
            <div>
                <img src="https://source.unsplash.com/random/350x350" alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md" />
                <div className="relative px-4 -mt-16  ">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{props.property.name}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard
