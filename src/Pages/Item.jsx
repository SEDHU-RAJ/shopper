import React from 'react'
import './../Styles/Item.css';
import { Link } from 'react-router-dom';
import Product from './Product';
const Item = (props) => {
  return (
    <div className="item">
    <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} className='item-img'/></Link>
    <p>{props.name}</p>
    <div className="itemprices">
        <div className="item-old-price">
            ${props.old_price}
        </div>
        <div className="item-new-price">
            ${props.new_price}
        </div>
    </div>
    </div>
  )
}

export default Item