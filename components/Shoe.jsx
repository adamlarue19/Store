import Link from 'next/link';
import React from 'react';

import { urlFor } from '@/lib/client';

const Shoe = ({shoe: {
     image ,name, slug, price} }) => {
  return (
    <>
   
  
        
        <Link href={`/shoe/${slug.current}`}>
            <div className='shoe-card'>
                <img
                src={urlFor(image && image[0])}
                width={350}
                height={350}
                className='shoe-img'
                />
                <p className='shoe-name'>
                    {name}
                </p>
                <p className='shoe-price'>
                    ${price}
                </p>
            </div>
        </Link>
  
     </>
  )
}

export default Shoe