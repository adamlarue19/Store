import Link from 'next/link'
import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'

import  Cart  from './Cart';
import { useStateContext } from '@/context/StateContext';

const NavBar = () => {
  const {showCart, setShowCart, totalQuantities} = useStateContext();
  return (
    <div className='nav-bar'>
        <h1 className='logo'>SHOE STORE</h1>
        <ul className='nav-items'>
          <li> Men </li>
          <li> Women </li>
          <li> Kids </li>
        </ul>
            <button type='button' className='cart' onClick={() => setShowCart(true) }>
              <AiOutlineShoppingCart size={25}/>
              <span className='cart-item-qty'></span>
            </button>
     {showCart && <Cart />}
    </div>
  )
}

export default NavBar