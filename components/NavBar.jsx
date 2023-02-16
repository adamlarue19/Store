
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-scroll/modules'

import Cart from './Cart';
import { useStateContext } from '@/context/StateContext';

const NavBar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <>
 

    <div className='nav-bar'>
      <h1 className='logo'>
        <a href='/' >SHOE STORE</a>
      </h1>
     
      <ul className='nav-items'>
        <Link activeClass="active" to="mens" spy={true} smooth={true} offset={50} duration={500}>
          Men
        </Link>

        <Link activeClass="active" to="womens" spy={true} smooth={true} offset={50} duration={500}>
          Women
        </Link>

        <Link activeClass="active" to="kids" spy={true} smooth={true} offset={50} duration={500}>
          Kids
        </Link>

      </ul>

      <button type='button' className='cart' onClick={() => setShowCart(true)}>
        <AiOutlineShoppingCart size={25} />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
       </>
  )
}

export default NavBar