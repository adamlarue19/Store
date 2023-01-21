import Link from 'next/link'
import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const NavBar = () => {
  return (
    <div className='nav-bar'>
        <h1 className='logo'>SHOE STORE</h1>
        <ul className='nav-items'>
          <li> Men </li>
          <li> Women </li>
          <li> Kids </li>
        </ul>
            <div className='cart'>
              <AiOutlineShoppingCart size={25}/>
            </div>



    </div>
  )
}

export default NavBar