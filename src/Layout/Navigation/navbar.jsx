import React from 'react';
import { useRef } from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';

import style from './navbar.css';
import logo from './assets/newLogo.png';
import vector from './assets/vector.png';
import search from './assets/search.png';

function Navbar() {

  const hamm = useRef();
  const mobilee = useRef();

  // const openMenu = () => {
  //     hamm.current.classList.toggle('change');
  //     mobilee.current.classList.toggle('inView');
  // };


  const [openMobile, setopenMobile] = useState(false);

  const openMenu = () => {
        setopenMobile(value => !value);
  }

  const closeMenu = () => {
        setopenMobile(value => false);
  }

  const linkStyle = {
    textDecoration: 'none',
    color: '#f78b26'
  }

    return (
      <div className='Navbar'>
        <nav>
          <Link to="/" onClick={closeMenu}><img className='logo' src={logo} /></Link>
          <div className='items'>
            <ul>
              <li className='coux'><Link style={linkStyle} to="/courses">Courses</Link> <img src={vector}></img></li>
              <div className="drop-courses">
          <div className="dc-1">
          <h2>Courses</h2>
          </div>
          <div className="dc-2">
            <Link to="courses/cybersecurity">Software Engineering</Link>
            <a href="">Graphics Design UI/UX</a>
            <a href="">Android/IOS Development</a>
            <a href="">CMS/BMS/Database MS</a>
            <a href="">Machine Learning</a>
            <a href="">Ethical Hacking</a>
            <a href="">Computer Diploma</a>
            <a href="">Cyber Security</a>
            <a href="">Artificial Intelligence</a>
          </div>

        </div>
        <li className='servx'><Link style={linkStyle} to="/services">Our Services</Link> <img src={vector}></img></li>
              <div className="drop-services">
          <div className="dc-1">
          <h2>Services</h2>
          </div>
          <div className="dc-2">
            <a href="">Drop Shipping Services</a>
            <a href="">Web Design and Hosting</a>
            <a href="">Penetration Testing</a>
            <a href="">ICT Training Center</a>
            <a href="">Business Branding</a>
            <a href="">Data Analysis</a>
            <a href="">Graphics Design</a>
            <a href="">Business Development</a>
            <a href="">Android/IOS Development</a>
            <a href="">Product Design UI/UX</a>
            <a href="">Content Management System</a>
          </div>
          </div>
              <li><Link style={linkStyle} to="/aboutus">About Us</Link></li>
              <li><Link style={linkStyle} to="/contactus">Contact Us</Link></li>
            </ul>
          </div>
          <div className='search'>
            <input type='text' placeholder='Search courses'></input>
            <img className='search-icon' src={search} onClick={closeMenu}></img>
          </div>
          <div className='nav-btn gone'>
            <button className='sign'><Link style={linkStyle} to="/signin">Sign In</Link></button>
            <button><Link style={{textDecoration: 'none', color: 'white'}} to="/signup">Register</Link></button>
          </div>
          <div className={openMobile ? 'hamburger change' : 'hamburger'} onClick={openMenu}>
            <div className='bar1'></div>
            <div className='bar2'></div>
            <div className='bar3'></div>
          </div>
        </nav>

        <div className={openMobile ? 'mobile inView' : 'mobile'} ref={mobilee}>
          <Link style={linkStyle} to="/courses" onClick={closeMenu}><h3>Courses</h3></Link>
          <Link style={linkStyle} to="/services" onClick={closeMenu}><h3>Services</h3></Link>
          <Link style={linkStyle} to="/aboutus" onClick={closeMenu}><h3>About Us</h3></Link>
          <Link style={linkStyle} to="/contactus" onClick={closeMenu}><h3>Contact Us</h3></Link>
          <div className='nav-btn'>
            <Link style={linkStyle} to="/signin" onClick={closeMenu}><button>Sign In</button></Link>
            <Link style={{linkStyle}} to="/signup" onClick={closeMenu}><button>Register</button></Link>
          </div>
        </div>

        
      </div>
    );
  }


export default Navbar;
