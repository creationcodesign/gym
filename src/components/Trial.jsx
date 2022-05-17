import React from 'react'
import { Link } from 'react-router-dom'

export default function Trial() {
    return (
        <div className="trial">
            <h4>try one day trial training for free</h4>
            <button className='btn-m btn-trial'>
                <Link to="/authorize">try it now</Link>
            </button>
        </div>
    )
}
