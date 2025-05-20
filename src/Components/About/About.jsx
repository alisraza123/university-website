import React from 'react'
import './about.css'
import aboutImg from '../../assets/about.jpg'
import playImg from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
    <div className="aboutLeft">
    <img src={aboutImg} alt="" className='aboutImg'/>
    <img src={playImg} alt="" className='playImg' onClick={()=>setPlayState(true)}/>
    </div>
    <div className="aboutRight">
    <h3>ABOUT UNIVERSITY</h3>
    <h2>Nurturing Tomorrow Leaders Today</h2>
    <p>At [University Name], we are dedicated to providing a transformative educational experience. Our commitment to academic excellence, research, and community engagement ensures that our students are well-prepared to make meaningful contributions to society.</p>
  <p>Our diverse and inclusive campus fosters a vibrant learning environment where students from all backgrounds can thrive. With a wide range of programs and state-of-the-art facilities, we offer opportunities for personal and professional growth.</p>
  <p>We pride ourselves on our esteemed faculty, who are leaders in their fields and passionate about teaching and mentoring. Join us at [University Name] and become part of a community that values knowledge, innovation, and success.</p>
    </div>
    </div>
  )
}

export default About