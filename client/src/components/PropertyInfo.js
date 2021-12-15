import React from 'react'

function PropertyInfo({ propertyInfo }) {
    return (
        <div class="max-w-md mx-auto px-4">
            <div class='relative m-0 shadow-lg flex bg-white'>
                <div class='flex-no-shrink'>
                    <img alt='' class='w-36 h-36 block mx-auto' src='https://source.unsplash.com/WLUHO9A_xik/1600x900' />
                </div>
                <div class='flex-1 card-block relative'>
                    <div class="p-6">
                        <h4 class='font-medium text-2xl mb-3'>
                            {propertyInfo.name}
                        </h4>
                        <p class='leading-normal'>
                            {propertyInfo.address}
                        </p>
                        <p class="text-sm text-grey block mt-6">
                            {propertyInfo.contact}
                        </p>
                        <p class="text-sm text-grey block mt-6">
                            {propertyInfo.comments}
                        </p>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyInfo
