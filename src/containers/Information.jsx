import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Information.css';

function Information() {
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Contact Information:</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <input type="text" placeholder='Full name' name='name'/>
            <input type="text" placeholder='Email' name='email'/>
            <input type="text" placeholder='Address' name='address'/>
            <input type="text" placeholder='Apt #' name='apt'/>
            <input type="text" placeholder='City' name='city'/>
            <input type="text" placeholder='Country' name='contry'/>
            <input type="text" placeholder='State' name='state'/>
            <input type="text" placeholder='Zip code' name='zip'/>
            <input type="text" placeholder='Phone' name='phone'/>
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            Back
          </div>
          <div className="Information-next">
            <Link to='/checkout/payment'>
              Continue
            </Link>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Order summary</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>Item Name</h4>
            <span>$18</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Information };