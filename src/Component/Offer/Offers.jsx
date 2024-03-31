import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
export default function Offer() {
    return (
        <div className='offers'>
            <div className='offers-left'>
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY FOR BEST SELLER PRODUCT</p>
                <button>Check Now</button>
            </div>
            <div className='offer-right'>
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}