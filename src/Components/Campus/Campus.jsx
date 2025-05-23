import React from 'react'
import './campus.css'
import gallery_1 from '../../assets/gallery-1.jpg'
import gallery_2 from '../../assets/gallery-2.jpg'
import gallery_3 from '../../assets/gallery-3.jpg'
import gallery_4 from '../../assets/gallery-4.jpg'
import whiteArrow from '../../assets/white-arrow.png'


const Campus = () => {
    return (
        <div className='campus'>
            <div className="gallery">

                <img src={gallery_3} alt="" />
                <img src={gallery_2} alt="" />
                <img src={gallery_1} alt="" />
                <img src={gallery_4} alt="" />
            </div>
            <button className='btn darkBtn'>See More here <img src={whiteArrow} alt="" /></button>
        </div>
    )
}

export default Campus