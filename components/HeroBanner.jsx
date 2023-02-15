import React from 'react'
import { Link }  from 'react-scroll/modules'
import Image from 'next/image'
import NikeShoe from '../img/nikeshoe1.png'


const HeroBanner = () => {
  return (
    <div className='Hero'>
      <div className='hero-left'>
        <h1 className='hero-header'> New <span className='herospan1'>Years</span> <span className="herospan2">Lineup</span> </h1>
        <h3 className='deals'>2023 Sale</h3>
        
        <p className='hero-descrp'>New Year, New Shoes: Save up to 50% on our top styles during our annual sale.</p>
        
        <Link activeClass="active" to="mens" spy={true} smooth={true} offset={50} duration={500}>
          <button  className='shop-btn'>Shop now</button> 
        </Link>
      </div>


      <div className='custom-img'>
       <Image 
      
          src={NikeShoe}
          alt='image of a shoe'
        />

        </div>

    </div>
  )
}

export default HeroBanner