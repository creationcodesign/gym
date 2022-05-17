import React, { useState } from 'react'
import data from '../assets/data/membership.js'
import MembershipCard from './MembershipCard.jsx'

export default function MembershipCards() {
    const [membership] = useState(data)

    return (
        <div className='membership-container'>
            <h2>select your membership plan</h2>
            <ul className="membership-boxes">
                {membership.map(data => {
                    return <MembershipCard key={data} data={data} />
                })}
            </ul>
        </div>
    )
}
