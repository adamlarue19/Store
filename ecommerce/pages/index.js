import React from 'react'
import HeroBanner from '@/components/HeroBanner'
import NavBar from '@/components/NavBar'
import MenSection from '@/components/MenSection'

import {client} from '../lib/client'

const Home = () => {
  return (
    <>
    <NavBar />
      <HeroBanner />
      <MenSection />
      

      
        
      

    </>
  )
}
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery= '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
}
export default Home
