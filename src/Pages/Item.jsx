import React from 'react'
import './../Styles/Item.css';
const Item = (props) => {
  return (
    <div className="item">
    <img src={props.image} alt="" />
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