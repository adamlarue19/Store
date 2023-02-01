import React from 'react'

import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { client, urlFor } from '../../lib/client';

import Shoe from '../../components/Shoe'

const ShoeDetails = ({ shoe, shoes}) => {

    const {image, name, details, price} = shoe;
    
  return (
    <div>
    <div className='product-detail-container'>
      <div>
        <div className='product-detail-imge'>
          <img src={urlFor(image && image[0])} />
        </div>
        {/* <div className='small-images'>
        {image?.map((item, i) => (
          <img
            src={urlFor(item)}
            className=''
            onMouseEnter=''
          />
        ))}
      </div> */}
      </div>
      <div className='product-details-desc'>
        <h1>{name}</h1>
        <div className='reviews'>
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <p>
            (20)
          </p>
        </div>
        <h4>Details: </h4>
        <p>{details}</p>
        <p>${price}</p>
        <div className='quantity'>
          <h3>Quantity: </h3>
          <p className='quantity-desc'>
            <span className='minus'
            onClick=''><AiOutlineMinus />
            </span>
            <span className='num'
            onClick=''>0</span>
            <span className='plus'
            onClick=''><AiOutlinePlus /> 
            </span>
          </p>
        </div>
        <div className='buttons'>
          <button type='button' className='add-to-cart'
          onClick=''>Add to Cart</button>
          <button type='button' className='buy-now' onClick=''>
            Buy Now </button>
        </div>
      </div>
    </div>
    <div className='maylike-products-products-wrapper'>
      <h2>You may also like</h2>
      <div className='marquee'>
        <div className=' maylike-products-container track'>
          {shoes.map((item) => (
            <Shoe key={item._id} shoe={item} />
          ))}
        </div>
      </div>

    </div>
  </div>
  )
}

export const getStaticPaths = async () => {

  const shoeQuery = `*[_type == "shoe"] {
    slug {
      current
    }
  }
  `;
  


  const shoes = await client.fetch(shoeQuery);
 
 

  const paths = shoes.map((shoe) => ({
    params: {
      slug: shoe.slug.current
    }
    
  }));

  

  return {
    paths,
    fallback: 'blocking'
  }
}


export const getStaticProps = async ({params: {slug}}) => {
  
  const shoeQuery = `*[_type == "shoe" && slug.current == '${slug}'][0]`;
  const shoesQuery = '*[_type == "shoe"]'
  const shoe = await client.fetch(shoeQuery);
  const shoes = await client.fetch(shoesQuery);



  return {
    props: { shoe, shoes }
  }
}


export default ShoeDetails