import React from 'react'
import HeroBanner from '@/components/HeroBanner'

const Home = () => {
  return (
    <>
      <HeroBanner />

      <div>
        <h2> Best selling products</h2>
        <p>speakers of many variations</p>
      </div>

      <div>
        {['product 1', 'product 2'].map(
          (product) => product)}
        
      </div>

    </>
  )
}

export default Home
