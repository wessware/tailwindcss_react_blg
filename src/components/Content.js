import React from "react"
import Image_One from '../images/img-9.jpg'
import Image_Two from '../images/img-2.jpg'


const Content = () => {
    return (
        <>
        <div className='menu-card'>
            <img src={Image_One} alt='wess_img' className='h-full rounded mb-20 shadow'/>
            <div className='center-content'>
                <h2 className='text-2xl mb-2'>Religious Texts</h2>
                <p className='mb-2'>
                    Ancient, Pre-history, Middle Ages, Rennaisance and Modernity
                </p>
                <span>Read more...</span>
            </div>
        </div>
        <div className='menu-card'>
            <img src={Image_Two} alt='wess_img' className='h-full rounded mb-20 shadow'/>
            <div className='center-content'>
                <h2 className='text-2xl mb-2'>Astrology Texts</h2>
                <p className='mb-2'>
                    The Earth, sun, solar system, Galaxies and the Cosmos
                </p>
                <span>Read more...</span>
            </div>
        </div>
        </>
    )
}

export default Content
