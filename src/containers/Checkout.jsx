import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { sumTotal } from '../utils/sumTotal';
import '../styles/components/Checkout.css';

function Checkout() {
  const { state, removeFromCart } = useContext( AppContext );
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeFromCart(product)
  }

  return (
   <div className="Checkout">
     <div className="Checkout-content">
       <h3>{cart.length > 0 ? 'Items List' : 'No Items'}</h3>
       {cart.map((item) => (
        <div className="Checkout-item" key={item.title}>
          <div className="Checkout-element">
            <h4>{item.title}</h4>
            <span>$ {item.price}</span>
          </div>
          <button type='button' onClick={handleRemove(item)}>
            <i className='fas fa-trash-alt' title='Delete Item'/>
          </button>
        </div>
       ))}
     </div>
     {cart.length > 0 && (
      <div className="Checkout-sidebar">
        <h3>{`Total: $ ${sumTotal(cart)}`}</h3>
        <Link to='/checkout/information'>
          <button type='button'> Checkout </button>
        </Link>
      </div>
     )}
   </div>
  )
}

export { Checkout };