import React from 'react'
import './hero.css'
import whiteArrow from '../../assets/white-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className="heroText">
            <h1>Ensuring Excellence in Education For You</h1>
            <p>Welcome to [University Name], where we are committed to fostering academic excellence, innovation, and personal growth.</p>
            <button className='btn darkBtn'>Explore More<img src={whiteArrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero