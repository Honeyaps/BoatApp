import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";

export default function Navbar () {

    const[isMobile,setIsMobile] = useState(false);

    return(
        <nav className='navbar'>
             <h3 className='logo'> boAt</h3>
             <ul className={isMobile? "nav-links-mobile" : "nav-links"}
             onClick={() => setIsMobile(false)}>
                   <Link to="/home" className='home'>
                    <li>Home</li>
                   </Link>
                   <Link to="deal" className='deals'>
                    <li>Daily Deals</li>
                   </Link>
                   <Link to="social" className='social'>
                    <li>Social Responsibility</li>
                   </Link>
                   <Link to="" className='contact'>
                    <li>Contact</li>
                   </Link>
             </ul>
             <button className='mobile-menu-icon'
             onClick={() => setIsMobile(!isMobile)}>
                    {isMobile? 
                    (<FaTimes />):
                    (<IoMdMenu />)
                    }
             </button>
        </nav>
    ); 
}

 