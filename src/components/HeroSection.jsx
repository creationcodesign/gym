import React from 'react'
import { NavLink } from 'react-router-dom'
import heroVideo from '../assets/hero-video.mp4'
import '../style/hero.scss'

export default function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={heroVideo} autoPlay loop muted />
            <h1>A KICK INTO FITNESS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <NavLink to="/authorize" className='btn btn-outline btn-large' activeclassname="active-link">
                    GET STARTED
                </NavLink>
                <button
                    className='btn btn-primary btn-large'
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </button>
            </div>
        </div>
    )
}
