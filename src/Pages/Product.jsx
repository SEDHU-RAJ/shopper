import React, { useContext } from 'react'
import Footer from '../Components/Footer'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Breadcrums/Breadcrum'
import Productdisplay from './Productdisplay'
import Descriptionbox from '../Components/Descriptionbox'
import Relatedproducts from '../RelatedProducts/Relatedproducts'

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productID} = useParams();
  const product =all_product.find((e)=> e.id === Number(productID))
  return (
    <>
    <div className="products">
      <Breadcrum product ={product}/>
      <Productdisplay product={product}/>
      <Descriptionbox/>
      <Relatedproducts/>
    </div>
    <Footer/>
    </>
    
  )
}

export default Product