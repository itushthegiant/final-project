import React from 'react'
import loadingGif from '../assets/loading.gif'

const Loading = () => {
    return (
        <div className="mt-48 flex items-center justify-center">
            <div>
                <h1></h1>
            </div>
            <img src={loadingGif} alt="load" />
        </div>
    )
}

export default Loading
