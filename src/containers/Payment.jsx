import React from 'react';
import '../styles/components/Payment.css';

const Payment = () => {
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Order Summary</h3>
        <div className="Payment-button">
          Pay with Paypal
        </div>
      </div>
      <div> here goes the Sidebar </div>
    </div>
  )
}

export { Payment };