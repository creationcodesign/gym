import React, { useState } from 'react'
import Service from './ServiceCard'
import gymServices from '../assets/data/services.js'
import '../style/cards.scss'

export default function ServicesCard() {
    const [serviceData] = useState(gymServices)

    return (
        <div className="cards">
            <h2>Checkout our Gym Offers</h2>
            <ul className='cards-items'>
                {serviceData.map((data, i) =>
                    <Service key={i} data={data} />
                )}
            </ul>
        </div>
    )
}
