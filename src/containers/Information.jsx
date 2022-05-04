import React, { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Information.css';

function Information() {
  const { state, addToBuyer } = useContext(AppContext);
  const { cart } = state;
  const form = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apt': formData.get('apt'),
      'city': formData.get('city'),
      'contry': formData.get('contry'),
      'state': formData.get('state'),
      'zip': formData.get('zip'),
      'phone': formData.get('phone'),
    };
    addToBuyer(buyer);
    navigate('/checkout/payment')
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Contact Information:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
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
            <Link to={-1}>
              Back
            </Link>
          </div>
          <div className="Information-next">
            <button type='button' onClick={handleSubmit}>Go to Payment</button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Order summary</h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { Information };