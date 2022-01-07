import React, { useState } from 'react'
import { MdArrowForwardIos, MdArrowBackIos,MdCancel } from 'react-icons/md';

function Carousel({ job, setIsClicked }) {
    const [currentImg, setCurrentImg] = useState(0);
    const length = job.images_urls.length;




    const nextSlide = () => {
        setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
    };

    const prevSlide = () => {
        setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1);
    };

    if (!Array.isArray(job.images_urls) || job.images_urls.length <= 0) {
        return null;
    }

    const renderImages = () => {
        return job.images_urls.map((img, i) => {
            return <div className={i === currentImg ? 'opacity-100 transition duration-1000 scale-y-105' : 'opacity-0 transition duration-1000'} key={i}>
                {i === currentImg && (
                    <img src={img} alt='issue image' className='max-w-5xl h-1/2 rounded-xl mt-14 shadow-2xl' />
                )}
            </div>
        })
    }

    return (
        <div>

            <section className='relative h-screen flex'>
                <MdCancel className='text-xl text-red-600' onClick={() => setIsClicked(false)}/>
                <MdArrowBackIos className='animate-pulse shadow-2xl absolute mt-10 top-1/4 -left-9 text-5xl text-yellow-200 z-10 cursor-pointer select-none hover:text-black duration-500' onClick={prevSlide} />
                <MdArrowForwardIos className='animate-pulse shadow-2xl absolute mt-10 top-1/4 -right-14 text-5xl text-yellow-200 z-10 cursor-pointer select-none hover:text-black duration-500' onClick={nextSlide} />
                {renderImages()}
            </section>
        </div>
    )
}

export default Carousel
