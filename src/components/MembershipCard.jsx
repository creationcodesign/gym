import React from 'react'
import { Link } from 'react-router-dom'

export default function MembershipCard(props) {
    const { type, price, period, plus, id } = props.data

    return (
        <li key={id}>
            <h3>{type}</h3>
            <div className="membership-info">
                <p className="price">{price} Euro/Month</p>
                <p className='decade'>{period}</p>
                <p>{plus}</p>
            </div>
            <button className='btn-m btn-membership'>
                <Link to="/authorize">get it now</Link>
            </button>
        </li>
    )
}
