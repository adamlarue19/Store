import React, {useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { client, urlFor } from '../../lib/client';

import ShoeSection from '../../components/ShoeSection';
import {useStateContext} from '../../context/StateContext'

const ProductDetails = ({product, products }) => {

    const { image, name, details, price} = product;

    const [index, setIndex] = useState(0);
    const {decQty, incQty, qty, onAdd } = useStateContext();

  return (
    <div>
      <div className='product-detail-container'>
        <div>
          <div className='product-detail-image'>
            <img src={urlFor(image && image[index])} />
          </div>
          <div className='small-images'>
          {image?.map((item, i) => (
            <img
              src={urlFor(item)}
              className={i === index ?
              'small-image selected-image' :
              'small-image'}
              onMouseEnter={() => setIndex(i)}
            />
          ))}
        </div>
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
              onClick={decQty}><AiOutlineMinus />
              </span>
              <span className='num'>{qty}</span>
              <span className='plus'
              onClick={incQty}><AiOutlinePlus /> 
              </span>
            </p>
          </div>
          <div className='buttons'>
            <button type='button' className='add-to-cart'
            onClick={() => onAdd(product, qty)}>Add to Cart</button>
            <button type='button' className='buy-now' onClick=''>
              Buy Now </button>
          </div>
        </div>
      </div>
      <div className='maylike-products-wrapper'>
        <h2>You may also like</h2>
        <div className='marquee'>
          <div className=' maylike-products-container track'>
            {products.map((item) => (
              <ShoeSection key={item._id} product={item} />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const productQuery = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;
  
  const products= await client.fetch(productQuery);
 
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
    
  }));

 
  return {
    paths,
    fallback: 'blocking'
  }
}


export const getStaticProps = async ({params: {slug}}) => {
  const productQuery = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  const product = await client.fetch(productQuery);
  const products = await client.fetch(productsQuery)

  


  return {
    props: { product, products }
  }
}


export default ProductDetails