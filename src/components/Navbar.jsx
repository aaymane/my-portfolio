import  { useState } from 'react'
import { Link ,NavLink } from 'react-router-dom'
import  "./Navbar.css"
import {IoLogoWhatsapp} from "react-icons/io"
import {SiGmail} from "react-icons/si"
import {GiHamburgerMenu} from "react-icons/gi"
import {MdClose} from "react-icons/md"
import {AiFillInstagram} from "react-icons/ai"
import logo_details from '../assets/logo.png'


const Navbar = () => {
  const [toggle, settoggle] = useState(false)
  return (
    <>
    <div className='ham-icon' onClick={() => settoggle(!toggle)}>
        {!toggle ? <GiHamburgerMenu className='hamburger'/> : <MdClose className='hamburger'/>}
        </div>
    <div className={toggle ? "navbar" : "navbar nav-hide"} >
      
      <div className="box">
        <Link to='/'
        >
          <img src={logo_details} alt="logo"  width={100}
           />
        </Link>
        
      </div>
      <div className="links">
        <ul onClick={() => settoggle(false)}>
          <li>
            <NavLink to='/about'>
              <p>About</p>
            </NavLink>
          </li>
          <li>
            <NavLink to='/skills'>
              <p>My Skills</p>
            </NavLink>
          </li>
          <li>
            <NavLink to='/work'>
              <p>Work</p>
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact'>
              <p>Contact</p>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socials">
        <a href='https://wa.me/33783000922' target="_blank">
        <IoLogoWhatsapp />
        </a>
        <a href='mailto: amriayman1@gmail.com' target="_blank">
        <SiGmail />
        </a>
        <a href='https://www.instagram.com/its_ayme_ne/' target="_blank">
        <AiFillInstagram />
        </a>
      </div>s
    </div>
    </>
  )
}

export default Navbar
