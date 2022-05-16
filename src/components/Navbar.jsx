import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <NavLink to="/" className="navbar-logo">
                <i className="fas fa-dumbbell logo-icon"></i>
                <p>GYM</p>
            </NavLink>
            <NavLink to="/services" className="nav-link" activeclassname="active-link">Services</NavLink>
            <NavLink to="/membership" className="nav-link" activeclassname="active-link">Membership</NavLink>
            <NavLink to="/contact" className="nav-link" activeclassname="active-link">Contact</NavLink>
            <NavLink to="/authorize" className="nav-link" activeclassname="active-link">Sign Up</NavLink>
        </nav>
    )
}
