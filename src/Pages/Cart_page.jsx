import React, { useContext, useState } from 'react'
import Footer from '../Components/Footer'
import { ShopContext } from '../Context/ShopContext'
import '../Styles/Cart.css'

const Cart_page = () => {
  const { cartItem = {}, all_product = [], removeFromcart } = useContext(ShopContext) || {}
  const [activeItemId, setActiveItemId] = useState(null)
  const cartItems = Object.entries(cartItem)
    .filter(([, qty]) => qty > 0)
    .map(([id, qty]) => {
      const product = all_product.find((item) => item.id === Number(id))
      return product ? { ...product, quantity: qty } : null
    })
    .filter(Boolean)

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.new_price * item.quantity,
    0
  )

  return (
    <>
      <div className="cart">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  onClick={() => setActiveItemId((prev) => (prev === item.id ? null : item.id))}
                  className="cart-item-image"
                />
                <div>
                  <h2>{item.name}</h2>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.new_price}</p>
                  <p>Subtotal: ${(item.new_price * item.quantity).toFixed(2)}</p>
                  <button onClick={() => removeFromcart(item.id)}>
                    Remove
                  </button>
                  {activeItemId === item.id && (
                    <button className="buy-now-button">
                      Buy Now
                    </button>
                  )}
                </div>
              </div>
            ))}
            <div className="cart-total">
              <h2>Total: ${totalPrice.toFixed(2)}</h2>
            </div>
          </div>
        )}
      </div>

      <Footer/>
    </>
  )
}

export default Cart_page