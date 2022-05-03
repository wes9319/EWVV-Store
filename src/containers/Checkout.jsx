import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';

function Checkout() {
  return (
   <div className="Checkout">
     <div className="Checkout-content">
       <h3>Items list</h3>
       <div className="Checkout-item">
         <div className="Checkout-element">
           <h4>Item Name</h4>
           <span>$ 18</span>
         </div>
         <button type='button'>Delete</button>
       </div>
     </div>
     <div className="Checkout-sidebar">
       <h3>Total: $18</h3>
       <Link to='/checkout/information'>
        <button type='button'> Checkout </button>
       </Link>
     </div>
   </div>
  )
}

export { Checkout };