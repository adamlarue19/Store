import React from 'react'

import { client, urlFor } from '../../lib/client';

const KidDetails = ({ kid, kids, }) => {

    const {image, name, details, price} = kid;
    
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


export const getStaticProps = async ({params: {slug}}) => {
  
  const kidQuery = `*[_type == "kid" && slug.current == '${slug}'][0]`;
  const kidsQuery = '*[_type == "kid"]'
  const kid = await client.fetch(kidQuery);
  const kids = await client.fetch(kidsQuery);



  return {
    props: {  kid, kids  }
  }
}


export default KidDetails