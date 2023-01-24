import React from 'react'

import {FaInstagramSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTiktok} from 'react-icons/fa'



const Footer = () => {
    return (
        <div className='footer-container'>
            <h2> Follow us on Social media!</h2>
            <div>
        <FaInstagramSquare size={50}/>
        <FaTwitterSquare size={50} />
        <FaFacebookSquare size={50} />
        <FaTiktok size={50} />

            </div>

        </div>


    )
}

export default Footer