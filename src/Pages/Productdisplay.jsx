import React, { useContext } from 'react'
import './../Styles/Productdisplay.css';
import star_dull from './../assets/star_dull_icon.png';
import star_icon from './../assets/star_icon.png';
import { ShopContext } from '../Context/ShopContext';
const Productdisplay = (props) => {
    const {product} = props;
    const{addTocart} = useContext(ShopContext);
    return (
    <div className="Productdisplay">
        <div className="productdisplay-left">
            <div className="image-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="display-image">
                <img src={product.image} className='productdisplaymain-img' alt="" />
            </div>
        </div>
        <div className="prodisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull} alt="" />
                <p>122</p>
            </div>
            <div className="productdisplay-price">
                <div className="price-old">
                    ${product.old_price}
                </div>
                <div className="price-new">
                    ${product.new_price}
                </div>
            </div>
            <div className="prodisright-des">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quam minus ratione voluptatibus inventore? Corporis animi ipsum est molestias rerum.
            </div>
            <div className="prodisrig-size">
                <h1>Select Size</h1>
                <div className="right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addTocart(product.id)}} >ADD TO CART</button>
            <p className='right-category'><span>Category :</span>Women , T-Shirt , Crop-Top</p>
            <p className='right-category'><span>Tags :</span>Modern , Latest</p>
        </div>
    </div>
  )
}

export default Productdisplay