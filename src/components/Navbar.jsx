import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../style/navbar.scss'

export default function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton)

    return (
        <nav>
            <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <i className="fas fa-dumbbell logo-icon"></i>
                <p>GYM</p>
            </NavLink>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times icon" : "fas fa-bars icon"} />
            </div>
            <div className={click ? "nav-menu active" : "nav-menu"}>
                <NavLink to="/services" className="nav-link" activeclassname="active-link" onClick={closeMobileMenu}>Services</NavLink>
                <NavLink to="/membership" className="nav-link" activeclassname="active-link" onClick={closeMobileMenu}>Membership</NavLink>
                <NavLink to="/contact" className="nav-link" activeclassname="active-link" onClick={closeMobileMenu}>Contact</NavLink>
            </div>
            {button &&
                <NavLink to="/authorize" className="nav-link-btn btn btn-outline btn-small" activeclassname="active-link" onClick={closeMobileMenu}>SIGN UP</NavLink>
            }
        </nav>
    )
}
