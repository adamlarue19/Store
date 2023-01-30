import React from 'react'

import { client, urlFor } from '../../lib/client';

const ShoeDetails = ({product, products, kid, kids, shoe, shoes}) => {

    const {image, name, details, price} = shoe;
    
  return (
    <div>
      <div className='product-detail-container'>
        <div>
          <div className='image-container'>
            <img src={urlFor(image && image [0])} />
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  // const productQuery = `*[_type == "product"] {
  //   slug {
  //     current
  //   }
  // }
  // `;
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