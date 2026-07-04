import React from 'react'
import Hero from '../Components/Hero'
import Popular from '../Popular/Popular'
import Offers from './offers/Offers'
import NewCollections from '../new-collections/NewCollections'

const Shop = () => {
  return (
    <>
    <Hero/>
    <Popular/>
    <Offers/>
    <NewCollections/>
    </>
  )
}

export default Shop