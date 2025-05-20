import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import './navbar.css'
import logo from '../../assets/logoo.png'
import menuIcon from '../../assets/menu-icon.png'
const Navbar = () => {
  const [sticky,setSticky]=useState(false);
    window.addEventListener('scroll',()=>{
      window.scrollY>50?  setSticky(true) :  setSticky(false) 
    })
    let showHideMenu=(event)=>{
      document.querySelector('nav ul').classList.toggle('show');
    }
  return (
<nav className={`container ${sticky? 'darkNav':''}`}>
    <img src={logo} alt=""  className='logo'/>
    <ul>
        <li> <Link to='hero' spy={true} smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' spy={true} smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' spy={true} smooth={true} offset={-260} duration={500}>About Us</Link></li>
        <li><Link to='campus' spy={true} smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' spy={true} smooth={true} offset={-290} duration={500}>Testimonials</Link></li>
        <li > 
          <button >
          <Link  to='testimonials' spy={true} smooth={true} offset={100} duration={500}>Contact Us</Link>
          </button>
        </li>
    </ul>
    <img src={menuIcon} alt="" className='menuIcon' onClick={showHideMenu}/>
</nav>
  )
}
export default Navbar