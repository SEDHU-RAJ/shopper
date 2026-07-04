import React from 'react'
import './new-collections.css';
import newcollection from './../assets/new_collections.js';
import Item from './../Pages/Item.jsx';
const NewCollections = () => {
  return (
    <div className='Newcollections'>
      <h1>NEW COLLECTIONS</h1> <hr />
      <div className="collections">
        {newcollection.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections