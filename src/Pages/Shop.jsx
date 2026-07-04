import React from 'react'
import Hero from '../Components/Hero'
import Popular from '../Popular/Popular'
import Offers from './offers/Offers'
import NewCollections from '../new-collections/NewCollections'
import Newsletter from '../Newsletter/Newsletter'
import Footer from '../Components/Footer'

const Shop = () => {
  return (
    <>
    <Hero/>
    <Popular/>
    <Offers/>
    <NewCollections/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default Shop