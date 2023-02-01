import React from 'react'

import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import  Kid  from '../../components/Kid'


const KidDetails = ({ kid, kids, }) => {

  const { image, name, details, price } = kid;

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
            {kids.map((item) => (
              <Kid key={item._id} kid={item} />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export const getStaticPaths = async () => {

  const kidQuery = `*[_type == "kid"] {
    slug {
      current
    }
  }
  `;

  const kids = await client.fetch(kidQuery);
  const paths = kids.map((kid) => ({
    params: {
      slug: kid.slug.current
    }

  }));


  return {
    paths,
    fallback: 'blocking'
  }
}


export const getStaticProps = async ({ params: { slug } }) => {

  const kidQuery = `*[_type == "kid" && slug.current == '${slug}'][0]`;
  const kidsQuery = '*[_type == "kid"]'
  const kid = await client.fetch(kidQuery);
  const kids = await client.fetch(kidsQuery);



  return {
    props: { kid, kids }
  }
}


export default KidDetails