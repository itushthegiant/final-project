import React from 'react'

function Eror404({ currentUser }) {
    return (
        <div className='w-screen h-screen fixed flex justify-center items-center bg-gray-400 bg-opacity-75'>
            <div>
                {currentUser ? 
                <div>
                    <h1 className='text-9xl'>404 Not-Found</h1>
                </div>
                :
                <div>
                    <h1 className='text-9xl'>Please Log In...</h1>
                </div>
            }
            </div>
        </div>
    )
}

export default Eror404
