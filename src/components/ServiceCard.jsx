import React from 'react'
import { Link } from 'react-router-dom'
import '../style/cards.scss'

export default function ServiceCard(props) {
    const { type, src } = props.data

    return (
        <>
            <li className="cards-item">
                <Link className="cards-item-link" to="/">
                    <figure className="cards-item-img-wrap">
                        <img src={src} alt={type} className="cards-item-img" />
                    </figure>
                    <div className="cards-item-info">
                        <h5 className='cards-item-title'>{type}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}
