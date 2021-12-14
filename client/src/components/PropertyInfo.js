import React from 'react'

function PropertyInfo({ propertyInfo }) {
    return (
        <div>
            <div className="container mt-32 mx-auto p-4 md:p-0">
                <div className="shadow-lg flex flex-wrap mx-auto">
                    <div className="bg-white w-full md:w-2/3">
                        <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                            <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                                <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                                    <h3>{propertyInfo.name}</h3>
                                    <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                                        {propertyInfo.address}
                                    </p>
                                    <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                                        {propertyInfo.contact}
                                    </p>
                                    <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                                        {propertyInfo.comments}
                                    </p>
                                    {/* <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" /> */}
                                </div>


                                <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                                    <button className="bg-white hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2">Visit now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PropertyInfo
